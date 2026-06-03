const Property = require('../models/Property');
const propertiesData = require('../data/properties');

const formatPrice = (value) => Number(value);

exports.getProperties = async (req, res) => {
  const { search, location, minPrice, maxPrice, bedrooms, type, limit } = req.query;
  const filters = {};

  if (location) filters.location = location;
  if (type) filters.propertyType = type;
  if (bedrooms) filters.bedrooms = { $gte: Number(bedrooms) };
  if (minPrice || maxPrice) {
    filters.price = {};
    if (minPrice) filters.price.$gte = formatPrice(minPrice);
    if (maxPrice) filters.price.$lte = formatPrice(maxPrice);
  }

  const filterMock = (items) => {
    return items.filter((property) => {
      const matchesSearch = search
        ? [property.name, property.location, property.propertyType, property.description]
            .join(' ')
            .toLowerCase()
            .includes(search.toLowerCase())
        : true;
      const matchesLocation = location ? property.location === location : true;
      const matchesType = type ? property.propertyType === type : true;
      const matchesBedrooms = bedrooms ? property.bedrooms >= Number(bedrooms) : true;
      const matchesMinPrice = minPrice ? property.price >= formatPrice(minPrice) : true;
      const matchesMaxPrice = maxPrice ? property.price <= formatPrice(maxPrice) : true;
      return matchesSearch && matchesLocation && matchesType && matchesBedrooms && matchesMinPrice && matchesMaxPrice;
    });
  };

  if (process.env.MONGODB_URI) {
    try {
      const query = Property.find(filters);
      if (limit) query.limit(Number(limit));
      const properties = await query.exec();
      return res.json(properties);
    } catch (error) {
      return res.status(500).json({ message: 'Unable to fetch properties.' });
    }
  }

  const result = filterMock(propertiesData);
  return res.json(limit ? result.slice(0, Number(limit)) : result);
};

exports.getPropertyById = async (req, res) => {
  const { id } = req.params;

  if (process.env.MONGODB_URI) {
    try {
      const property = await Property.findById(id).exec();
      if (!property) return res.status(404).json({ message: 'Property not found.' });
      return res.json(property);
    } catch (error) {
      const fallback = propertiesData.find((item) => item.id === id);
      if (fallback) return res.json(fallback);
      return res.status(404).json({ message: 'Property not found.' });
    }
  }

  const property = propertiesData.find((item) => item.id === id);
  if (!property) {
    return res.status(404).json({ message: 'Property not found.' });
  }

  return res.json(property);
};

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import FilterPanel from '../components/FilterPanel';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { properties as propertiesData } from '../data/properties';

const initialFilters = { location: '', maxPrice: '', bedrooms: '', propertyType: '' };

function PropertiesPage() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));
  const [filters, setFilters] = useState(initialFilters);
  const [loading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredProperties = useMemo(() => {
    const search = searchParams.get('search')?.toLowerCase() || '';

    return propertiesData.filter((property) => {
      const matchesSearch = search
        ? [property.name, property.location, property.propertyType, property.description]
            .join(' ')
            .toLowerCase()
            .includes(search)
        : true;
      const matchesLocation = filters.location ? property.location === filters.location : true;
      const matchesType = filters.propertyType ? property.propertyType === filters.propertyType : true;
      const matchesBedrooms = filters.bedrooms ? property.bedrooms >= filters.bedrooms : true;
      const matchesPrice = filters.maxPrice ? property.price <= filters.maxPrice : true;
      return matchesSearch && matchesLocation && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [filters, searchParams]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id]
    );
  };

  const handleFilterChange = (field, value) => {
    setFilters((current) => ({ ...current, [field]: value }));
  };

  const handleClear = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_1fr]">
      <aside>
        <FilterPanel filters={filters} onChange={handleFilterChange} onReset={handleClear} />
      </aside>
      <section className="space-y-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Explore properties</h1>
          <p className="mt-3 text-slate-600">Browse the latest homes, villas, and apartments across Lagos and Nigeria.</p>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="grid gap-6 xl:grid-cols-2">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
            {filteredProperties.length === 0 && (
              <div className="rounded-3xl bg-white p-10 text-slate-600 shadow-sm">
                No properties match your filters. Try adjusting your search.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default PropertiesPage;

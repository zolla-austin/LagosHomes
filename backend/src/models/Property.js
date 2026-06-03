const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  propertyType: { type: String, required: true },
  area: { type: String },
  description: { type: String, required: true },
  images: [{ type: String }]
});

module.exports = mongoose.models.Property || mongoose.model('Property', propertySchema);

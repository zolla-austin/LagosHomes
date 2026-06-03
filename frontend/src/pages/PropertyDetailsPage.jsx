import { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { properties as propertiesData } from '../data/properties';
import placeholderImage from '../assets/houses/house-placeholder.svg';

const formatPrice = (price) => {
  if (price >= 1000000) {
    const millions = price / 1000000;
    return `₦${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  return `₦${price.toLocaleString()}`;
};

function PropertyDetailsPage() {
  const { id } = useParams();
  const [loading] = useState(false);
  const [error, setError] = useState('');

  const property = useMemo(() => propertiesData.find((item) => item.id === id), [id]);

  useEffect(() => {
    if (!property) {
      setError('Property not found.');
    }
  }, [property]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!property) return <ErrorMessage message="Property not found." />;

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {property.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${property.name} ${index + 1}`}
                  className="h-64 w-full rounded-3xl object-cover"
                  onError={(event) => {
                    event.currentTarget.src = placeholderImage;
                  }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-brandGreen/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brandGreen">{property.propertyType}</p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900">{property.name}</h1>
              <p className="mt-4 text-2xl font-semibold text-brandGreen">{formatPrice(property.price)}</p>
            </div>
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between text-slate-700">
                <span>Location:</span>
                <strong>{property.location}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span>Bedrooms:</span>
                <strong>{property.bedrooms}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span>Bathrooms:</span>
                <strong>{property.bathrooms}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span>Area:</span>
                <strong>{property.area}</strong>
              </div>
            </div>
            <button className="w-full rounded-2xl bg-brandGreen px-6 py-4 text-white transition hover:bg-emerald-600">
              Contact agent
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Property details</h2>
        <p className="mt-4 text-slate-600 leading-7">{property.description}</p>
      </section>
    </div>
  );
}

export default PropertyDetailsPage;

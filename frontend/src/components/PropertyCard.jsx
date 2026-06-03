import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import placeholderImage from '../assets/houses/house-placeholder.svg';

const formatPrice = (price) => {
  if (price >= 1000000) {
    const millions = price / 1000000;
    return `₦${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  return `₦${price.toLocaleString()}`;
};

function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = placeholderImage;
          }}
        />
        <button
          type="button"
          onClick={() => onToggleFavorite(property.id)}
          className="absolute right-4 top-4 rounded-full bg-white/90 dark:bg-slate-700/90 p-3 text-brandGreen shadow-sm transition hover:bg-brandGreen hover:text-white dark:hover:bg-brandGreen"
          aria-label="Save favorite property"
        >
          <FaHeart className={isFavorite ? 'fill-current' : 'text-current'} />
        </button>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brandGreen">{property.propertyType}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">{property.name}</h2>
          </div>
          <p className="text-xl font-semibold text-brandGreen">{formatPrice(property.price)}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <span className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <FaMapMarkerAlt className="text-brandGreen" /> {property.location}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <FaBed className="text-brandGreen" /> {property.bedrooms} beds
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{property.description}</p>
        <Link
          to={`/properties/${property.id}`}
          className="inline-flex items-center justify-center rounded-2xl bg-brandGreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          View details
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;

import PropertyCard from './PropertyCard';

function FeaturedProperties({ properties, favorites, onToggleFavorite }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brandGreen">Featured listings</p>
          <h2 className="text-3xl font-semibold text-slate-900">Hand-picked homes for your next move</h2>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {properties.slice(0, 4).map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.includes(property.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;

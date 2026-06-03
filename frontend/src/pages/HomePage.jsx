import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FeaturedProperties from '../components/FeaturedProperties';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { properties as propertiesData } from '../data/properties';

function HomePage() {
  const [query, setQuery] = useState('');
  const [loading] = useState(false);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));
  const properties = propertiesData.slice(0, 6);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/properties?search=${encodeURIComponent(query)}`;
  };

  return (
    <div className="space-y-16">
      <Hero />
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Search homes across Lagos and beyond</h2>
          <p className="mt-3 text-slate-600">Find your perfect property with filters for location, price, bedrooms, and more.</p>
          <div className="mt-8">
            <SearchBar query={query} onChange={setQuery} onSubmit={handleSubmit} />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <FeaturedProperties properties={properties} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
          )}

          <aside className="rounded-3xl bg-brandGreen/5 p-8 text-slate-900 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Why choose LagosHomes?</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>• Tailored property listings across major Lagos neighborhoods</li>
              <li>• Easy search, filters, and saved favorites</li>
              <li>• Fast contact form to reach an agent instantly</li>
              <li>• Responsive design for mobile and desktop</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

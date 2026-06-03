function FilterPanel({ filters, onChange, onReset }) {
  const locations = ['All', 'Lekki, Lagos', 'Victoria Island, Lagos', 'Ikoyi, Lagos', 'Yaba, Lagos', 'Lekki Phase 1, Lagos'];
  const propertyTypes = ['All', 'Duplex', 'Apartment', 'Mansion', 'Bungalow', 'Villa'];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Refine your search</h3>
      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <label className="block">
          <span className="text-sm text-slate-600">Location</span>
          <select
            value={filters.location}
            onChange={(e) => onChange('location', e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
          >
            {locations.map((label) => (
              <option key={label} value={label === 'All' ? '' : label}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Property Type</span>
          <select
            value={filters.propertyType}
            onChange={(e) => onChange('propertyType', e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type === 'All' ? '' : type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Bedrooms</span>
          <select
            value={filters.bedrooms}
            onChange={(e) => onChange('bedrooms', Number(e.target.value))}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
          >
            <option value="">All</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Max Price</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => onChange('maxPrice', Number(e.target.value))}
            placeholder="e.g. 100000000"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Reset filters
      </button>
    </div>
  );
}

export default FilterPanel;

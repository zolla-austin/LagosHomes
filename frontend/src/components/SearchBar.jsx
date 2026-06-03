function SearchBar({ query, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl bg-white p-5 shadow-sm sm:grid-cols-[1fr_auto] md:grid-cols-[1fr_auto]">
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by location, property type or keyword"
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20"
      />
      <button className="rounded-2xl bg-brandGreen px-6 py-3 text-white transition hover:bg-emerald-600">
        Search
      </button>
    </form>
  );
}

export default SearchBar;

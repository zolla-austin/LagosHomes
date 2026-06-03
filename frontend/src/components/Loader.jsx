function Loader() {
  return (
    <div className="flex min-h-[240px] items-center justify-center rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3 text-brandGreen">
        <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-brandGreen border-t-transparent" />
        <span className="text-lg font-medium">Loading properties...</span>
      </div>
    </div>
  );
}

export default Loader;

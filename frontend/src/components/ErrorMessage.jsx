function ErrorMessage({ message }) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
      <h3 className="text-lg font-semibold">Something went wrong</h3>
      <p className="mt-2 text-sm text-red-700">{message}</p>
    </div>
  );
}

export default ErrorMessage;

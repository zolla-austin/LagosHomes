import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">LagosHomes</h2>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Your trusted real estate partner for premium properties across Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-400 md:text-right">
            <span>Phone: +234 802 123 4567</span>
            <span>Email: hello@lagoshomes.ng</span>
            <span>Office: Victoria Island, Lagos</span>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-sm text-slate-500">
          <p>© 2026 LagosHomes. Built for modern Nigerian homebuyers.</p>
          <Link to="/" className="text-brandGreen hover:text-white">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

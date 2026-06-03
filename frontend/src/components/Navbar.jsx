import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/houses/logu-1.jpeg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LagosHomes logo" className="h-16 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-brandGreen font-medium'
                  : 'text-slate-600 dark:text-slate-300 transition hover:text-brandGreen'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={onToggleDarkMode}
          className="rounded-full p-3 text-slate-600 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-xl text-yellow-500" /> : <FaMoon className="text-xl text-slate-700" />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

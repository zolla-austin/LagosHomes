import { Link } from 'react-router-dom';
import heroBackground from '../assets/houses/hou-se10.jpeg';

function Hero() {
  return (
    <section
      className="overflow-hidden rounded-[2rem] bg-cover bg-center text-white shadow-lg"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="backdrop-brightness-75 p-8 sm:p-12 lg:p-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex rounded-full bg-brandGreen/95 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white">
            LagosHomes real estate
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Find Your Dream Home in Nigeria</h1>
          <p className="max-w-2xl text-lg text-slate-100/90">
            Browse curated listings across Lagos, compare top properties, and connect with agents instantly.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-brandGreen transition hover:bg-slate-100"
            >
              View properties
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-4 text-sm font-semibold text-white transition hover:border-white"
            >
              Contact an agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

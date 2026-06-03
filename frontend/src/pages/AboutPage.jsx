import team1 from '../assets/houses/team-1.jpeg';
import team2 from '../assets/houses/team-2.jpeg';
import team3 from '../assets/houses/team-3.jpeg';
import team4 from '../assets/houses/team-4.jpeg';

const teamMembers = [
  {
    name: 'Aisha Akande',
    role: 'Lead property consultant',
    image: team1,
    story: 'Aisha has over 8 years of experience helping buyers find their ideal Lagos homes, with a strong focus on neighborhood insights and client trust.'
  },
  {
    name: 'Chinedu Okonkwo',
    role: 'Investment strategist',
    image: team2,
    story: 'Chinedu guides investors through profitable property opportunities, combining market research with practical advice for every budget.'
  },
  {
    name: 'Zolla Austine',
    role: 'Client success manager',
    image: team3,
    story: 'Zolla ensures every client receives fast, friendly support, coordinating viewings and follow-ups to make property decisions easier.'
  },
  {
    name: 'Sade Ibrahim',
    role: 'Market research analyst',
    image: team4,
    story: 'Sade analyzes market trends across Lagos to help the team deliver up-to-date listings and trusted recommendations.'
  }
];

function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-semibold text-slate-900">About LagosHomes</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          LagosHomes is a modern real estate platform built for buyers and investors across Nigeria. We help clients discover premium properties, compare listings, and reach trusted agents quickly.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-brandGreen/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
          <p className="mt-4 text-slate-600 leading-7">
            To simplify property discovery in Nigeria by offering a curated, responsive, and trustworthy marketplace for homes and investments.
          </p>
        </div>
        <div className="rounded-3xl bg-slate-100 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our vision</h2>
          <p className="mt-4 text-slate-600 leading-7">
            To become the go-to real estate brand for Lagos and the wider Nigerian market, delivering modern tools for smarter property decisions.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-slate-900">Meet the team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-2 text-slate-600">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{member.story}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

import ContactForm from '../components/ContactForm';
import backgroundImage from '../assets/houses/hou-se5.jpeg';

function ContactPage() {
  return (
    <div
      className="grid gap-10 lg:grid-cols-[1fr_420px] rounded-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="rounded-3xl bg-white/95 p-8 shadow-sm backdrop-blur-sm">
        <h1 className="text-4xl font-semibold text-slate-900">Let’s talk about your next property</h1>
        <p className="mt-4 max-w-3xl text-slate-600 leading-8">
          Whether you are looking to buy, sell, or invest, our team is ready to support you. Fill out the form and we will connect you with an agent.
        </p>
        <div className="mt-10 space-y-6 text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900">Email</h3>
            <p>hello@lagoshomes.ng</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Phone</h3>
            <p>+234 802 123 4567</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Office</h3>
            <p>Victoria Island, Lagos, Nigeria</p>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}

export default ContactPage;

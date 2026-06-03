import { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      await axios.post('/api/contact', form);
      setStatus({ loading: false, error: '', success: 'Thanks — your message was sent successfully.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ loading: false, error: 'Unable to send message. Please try again later.', success: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows="5"
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-brandGreen focus:ring-2 focus:ring-brandGreen/20"
        />
      </div>
      <button
        type="submit"
        disabled={status.loading}
        className="inline-flex items-center justify-center rounded-2xl bg-brandGreen px-6 py-3 text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.loading ? 'Sending...' : 'Send message'}
      </button>
      {status.success && <p className="text-sm text-green-700">{status.success}</p>}
      {status.error && <p className="text-sm text-red-700">{status.error}</p>}
    </form>
  );
}

export default ContactForm;

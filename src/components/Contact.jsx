import { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.');
        e.currentTarget.reset();
      } else {
        setStatus(data?.detail || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Let’s Talk" title="Start a project" subtitle="Tell me about your timeline, budget, and goals." />
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-8">
          <input name="name" required placeholder="Your name" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" name="email" required placeholder="Email" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="subject" placeholder="Subject" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required rows="5" placeholder="Tell me a bit about the project" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white px-5 py-3 font-semibold shadow-lg hover:opacity-95">Send Message</button>
          {status && <p className="text-sm text-gray-700 dark:text-gray-200">{status}</p>}
        </form>
      </div>
    </section>
  );
}

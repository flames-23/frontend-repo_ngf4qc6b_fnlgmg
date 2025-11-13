import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="About" title="Designer with a playful tech vibe" />
        <div className="mt-8 rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-8">
          <p className="text-gray-700/90 dark:text-gray-200/90 leading-relaxed">
            I combine graphic design roots with UI/UX thinking to craft brands and digital experiences. My approach is collaborative and outcome-focused — from strategy and moodboards to pixel-perfect handoff.
          </p>
        </div>
      </div>
    </section>
  );
}

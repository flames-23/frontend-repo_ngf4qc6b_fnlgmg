export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-100 ring-1 ring-black/5 dark:ring-white/10">
          {kicker}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-700/90 dark:text-gray-200/90">{subtitle}</p>}
    </div>
  );
}

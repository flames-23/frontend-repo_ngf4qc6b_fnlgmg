import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10 py-24">
            <div className="">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-100 ring-1 ring-black/5 dark:ring-white/10">
                Available for freelance projects
              </div>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Graphic & UI/UX Designer
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700/90 dark:text-gray-200/90 max-w-xl">
                I craft playful, modern visuals and human-centered interfaces. Explore my selected projects and design services.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 font-semibold shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow">View Work</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-black/40 backdrop-blur px-5 py-3 font-semibold text-gray-900 dark:text-white ring-1 ring-black/10 dark:ring-white/10 hover:bg-white/90">Contact</a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-black/60 dark:to-black" />
    </section>
  );
}

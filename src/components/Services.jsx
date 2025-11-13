import SectionHeading from './SectionHeading';
import { PenTool, LayoutGrid, AppWindow, Package } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Brand identities, posters, album covers, social graphics, and marketing assets with a playful edge.',
  },
  {
    icon: LayoutGrid,
    title: 'UI/UX Design',
    desc: 'Wireframes, design systems, web and app interfaces that are clean, modern, and accessible.',
  },
  {
    icon: AppWindow,
    title: 'Website Design',
    desc: 'Landing pages and marketing sites that convert with bold visuals and smooth interactions.',
  },
  {
    icon: Package,
    title: 'Design Kits',
    desc: 'Reusable components, icon sets, and templates to speed up your product development.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="What I Do" title="Services" subtitle="Flexible packages from one-off graphics to full product design." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700/90 dark:text-gray-200/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

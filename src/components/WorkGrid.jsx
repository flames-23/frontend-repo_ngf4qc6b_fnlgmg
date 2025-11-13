import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Playful Brand Identity',
    tags: ['Branding', 'Illustration'],
    image: 'https://images.unsplash.com/photo-1716825340664-d52a315a0011?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGF5ZnVsJTIwQnJhbmQlMjBJZGVudGl0eXxlbnwwfDB8fHwxNzYzMDQwMTg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mobile App UI Kit',
    tags: ['UI/UX', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1738640679960-58d445857945?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBBcHAlMjBVSSUyMEtpdHxlbnwwfDB8fHwxNzYzMDQwMTg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'E-commerce Website Redesign',
    tags: ['Web', 'UX'],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Landing Visuals',
    tags: ['3D', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Selected Work" title="Design Portfolio" subtitle="A mix of graphic design, UI kits, and playful art direction." />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-xs text-gray-600/80 dark:text-gray-300/80">{p.tags.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

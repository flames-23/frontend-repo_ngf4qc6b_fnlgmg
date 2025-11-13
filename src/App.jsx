import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-zinc-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <WorkGrid />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  );
}

export default App;

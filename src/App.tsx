import { useEffect } from 'react';
import { gsap } from 'gsap';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.to('body', { opacity: 1, duration: 1 });
    
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href')!);
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Resume />
      <Blog />
    </div>
  );
}

export default App;
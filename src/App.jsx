import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: true }}>
      <main className="w-full overflow-hidden bg-brand-bg selection:bg-brand-accent selection:text-white">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Footer />
        <ScrollToTop />
      </main>
    </ReactLenis>
  );
}

export default App;
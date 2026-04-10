import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Infrastructure } from './Infrastructure';
import { BentoGrid } from './BentoGrid';
import { ParallaxDivider } from './ParallaxDivider';
import { CustomCursor } from './CustomCursor';
import { SmoothScroll } from './SmoothScroll';
import { Preloader } from './Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for preloader to show the threading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <AnimatePresence>
        {loading && <Preloader key="loader" />}
      </AnimatePresence>
      
      <CustomCursor />
      <Nav />
      
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section id="about" className="section-padding" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="section-title" style={{ fontWeight: 300, color: '#888', marginBottom: '20px' }}>Global Logistics.</h2>
              <p style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '1000px', color: '#111' }}>
                Strategically located near major South Indian sea ports, ensuring efficient global logistics for partners in <span style={{ color: '#888' }}>North America</span> and <span style={{ color: '#888' }}>Europe</span>.
              </p>
            </motion.div>
          </div>
        </section>

        <ParallaxDivider />
        <Infrastructure />
        <BentoGrid />
        
        {/* Final CTA / Contact Refinement */}
        <section id="contact" className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 style={{ fontSize: 'clamp(40px, 8vw, 120px)', letterSpacing: '-0.05em', marginBottom: '40px' }}>Join the Web.</h2>
              <a href="mailto:contact@alagendira.com" className="interactive" style={{ fontSize: '24px', fontWeight: 600, borderBottom: '2px solid #111', paddingBottom: '8px' }}>
                contact@alagendira.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="section-padding" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '24px' }}>ALAGENDIRA</div>
              <p style={{ color: '#888', maxWidth: '300px', fontSize: '14px' }}>
                Premier manufacturer and exporter of sustainable organic apparel based in the industrial heart of Tirupur.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>© 2026 Alagendira Exports</p>
              <p style={{ fontSize: '14px', color: '#888' }}>
                Crafted by <a href="https://crystalspace.org" target="_blank" rel="noopener noreferrer" style={{ color: '#111', fontWeight: 700 }}>Crystal Space</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
}

export default App;

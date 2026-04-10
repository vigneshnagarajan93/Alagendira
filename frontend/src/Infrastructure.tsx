import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const steps = [
  { id: 1, title: 'Raw Fiber Excellence', text: 'Sourcing premium GOTS-certified organic cotton to ensure the foundation of every garment is pristine.', image: 'v2_macro_weave.png' },
  { id: 2, title: 'Precision Knitting', text: 'Interlocking fibers at industrial scale using German-engineered machinery for consistency.', image: 'capability_knitting.png' },
  { id: 3, title: 'Eco-Forward Dyeing', text: 'Low-impact reactive dyes and closed-loop water systems in our modern processing facility.', image: 'capability_dyeing.png' },
  { id: 4, title: 'Master Craftsmanship', text: 'Automated sewing lines combined with manual quality oversight at every stitch.', image: 'v2_machinery_abstract.png' }
];

export const Infrastructure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the current step index based on scroll distance
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.floor(latest * (steps.length - 0.01));
      setCurrentStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      
      {/* Sticky Visual Container */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100vw', backgroundColor: '#111', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img 
              src={`/media/images/${steps[currentStep]?.image}`}
              alt={steps[currentStep]?.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
          <div className="container" style={{ color: '#fff' }}>
            <div style={{ maxWidth: '600px' }}>
              <motion.div
                key={`text-${currentStep}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div style={{ fontSize: '14px', letterSpacing: '0.4em', marginBottom: '20px', color: 'rgba(255,255,255,0.6)' }}>0{currentStep + 1} / 04</div>
                <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: '32px' }}>{steps[currentStep]?.title}</h2>
                <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '400px' }}>{steps[currentStep]?.text}</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Vertical Progress Line */}
        <div style={{ position: 'absolute', right: '40px', top: '50%', height: '200px', width: '2px', background: 'rgba(255,255,255,0.1)', transform: 'translateY(-50%)' }}>
          <motion.div 
            style={{ 
              height: '100%', 
              background: '#fff', 
              transformOrigin: 'top',
              scaleY: scrollYProgress 
            }} 
          />
        </div>
      </div>

    </section>
  );
};

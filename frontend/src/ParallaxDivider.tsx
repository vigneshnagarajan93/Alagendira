import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} style={{ height: '60vh', overflow: 'hidden', position: 'relative', margin: '80px 0' }}>
      <motion.div style={{ y, height: '120%', position: 'absolute', top: '-10%', left: 0, width: '100%' }}>
        <img 
          src="/media/images/v2_macro_weave.png" 
          alt="Macro Fiber Texture" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.95)' }}
        />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(2px)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
         <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: '#111', fontWeight: 300, maxWidth: '800px', letterSpacing: '-0.04em' }}>
           Our heritage spans decades of <span style={{ fontWeight: 800 }}>precision spinning</span> and ethical manufacturing.
         </h2>
      </div>
    </div>
  );
};

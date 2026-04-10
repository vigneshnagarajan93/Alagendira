import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const TITLE = "ALAGENDIRA";
const SUBTITLE = "Benchmark in Manufacturing Excellence";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll parallax for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Tracking (High Mass / Heavy feel)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 40, damping: 20, mass: 2 }; // Heavy feel
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-3deg", "3deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 500);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} style={{ height: '150vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Sticky Content Wrapper */}
      <motion.div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#fff',
          perspective: '2000px'
        }}
      >
        {/* Background - The 3D Sculpture */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            scale: bgScale, 
            y: bgY, 
            opacity,
            zIndex: 1
          }}
        >
          <img 
            src="/media/images/v2_hero_sculpture.png" 
            alt="Organic Sculpture" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Top and Bottom soft falloffs */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #fff 0%, transparent 15%, transparent 85%, #fff 100%)' }} />
        </motion.div>

        {/* Floating Typography - XYZ Assembly */}
        <motion.div 
          style={{ 
            zIndex: 10, 
            textAlign: 'center',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
        >
          <div style={{ display: 'flex', gap: '0.05em', transform: 'translateZ(100px)' }}>
            {TITLE.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ 
                  opacity: 0, 
                  x: (Math.random() - 0.5) * 500, 
                  y: (Math.random() - 0.5) * 500, 
                  z: (Math.random() - 0.5) * 1000,
                  rotateX: Math.random() * 360,
                  rotateY: Math.random() * 360
                }}
                animate={isLoaded ? { 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  z: 0,
                  rotateX: 0,
                  rotateY: 0
                } : {}}
                transition={{ 
                  duration: 2, 
                  delay: 0.1 * i, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="hero-title"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ marginTop: '20px', transform: 'translateZ(50px)' }}
          >
            <p className="body-large" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600, color: '#111' }}>
              {SUBTITLE}
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ 
            position: 'absolute', 
            bottom: '40px', 
            left: '50%', 
            x: '-50%',
            opacity
          }}
        >
          <div style={{ width: '1px', height: '60px', background: 'rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ width: '100%', height: '100%', background: '#111' }} 
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

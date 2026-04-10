import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const cards = [
  { id: 1, span: 'col-span-2 row-span-2', title: 'Sustainable Fabric Portfolio', category: 'Products', image: 'v2_macro_weave.png' },
  { id: 2, span: 'col-span-2 row-span-1', title: 'Global Compliance & Ethics', category: 'Certifications', image: 'v2_certifications_glass.png' },
  { id: 3, span: 'col-span-1 row-span-2', title: 'Circular Knitting', category: 'Capabilities', image: 'capability_knitting.png' },
  { id: 4, span: 'col-span-1 row-span-1', title: 'Our Heritage', category: 'Story', image: 'factory_interior.png' },
  { id: 5, span: 'col-span-2 row-span-1', title: 'Advanced Dyeing Technic', category: 'Infrastructure', image: 'capability_dyeing.png' },
];

const BentoCard = ({ card }: { card: typeof cards[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={ref}
      className={`bento-card ${card.span}`}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        height: '100%',
        minHeight: card.span.includes('row-span-2') ? '600px' : '280px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.img
        src={`/media/images/${card.image}`}
        alt={card.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        animate={{ scale: isHovered ? 1.05 : 1, filter: isHovered ? 'blur(0px)' : 'blur(2px) grayscale(0.2)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)',
          zIndex: 2,
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px', zIndex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
        <motion.div
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#fff', fontWeight: 700, opacity: 0.8 }}>{card.category}</span>
          <h3 style={{ fontSize: '24px', color: '#fff', marginTop: '8px', maxWidth: '80%' }}>{card.title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 className="section-title">The Vertical Setup.</h2>
            <p className="body-large" style={{ maxWidth: '500px' }}>Our integrated manufacturing ecosystem, from raw fiber to finished garment.</p>
          </div>
          <button className="interactive" style={{ padding: '16px 32px', border: '1px solid #111', borderRadius: '100px', background: 'transparent', fontWeight: 600, fontSize: '14px' }}>
            VIEW FULL CATALOGUE
          </button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gridAutoRows: 'minmax(300px, auto)',
          gap: '24px' 
        }}>
          {cards.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        .col-span-2 { grid-column: span 2; }
        .col-span-1 { grid-column: span 1; }
        .row-span-2 { grid-row: span 2; }
        .row-span-1 { grid-row: span 1; }
        
        @media (max-width: 1024px) {
          .col-span-2, .col-span-1 { grid-column: span 4; }
          .row-span-2, .row-span-1 { grid-row: auto; }
        }
      `}</style>
    </section>
  );
};

import { motion } from 'framer-motion';

export const Nav = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
      className="glass"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000,
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Alagendira</div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#about" className="interactive" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About</a>
          <a href="#infra" className="interactive" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Capabilities</a>
          <a href="#catalog" className="interactive" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Catalog</a>
          <motion.a 
            href="#contact" 
            className="interactive"
            whileHover={{ scale: 1.05 }}
            style={{ 
              padding: '12px 28px', 
              background: '#111', 
              color: '#fff', 
              borderRadius: '100px', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase' 
            }}
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

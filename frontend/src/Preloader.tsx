import { motion } from 'framer-motion';

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '200px' }}>
        <motion.svg
          viewBox="0 0 100 20"
          style={{ width: '100%', height: 'auto', overflow: 'visible' }}
        >
          {/* A simple wave representing a thread */}
          <motion.path
            d="M 0 10 Q 25 20 50 10 T 100 10"
            fill="transparent"
            stroke="#111"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '12px',
            letterSpacing: '0.2em',
            fontWeight: 500,
            color: '#111',
          }}
        >
          ALAGENDIRA
        </motion.div>
      </div>
    </motion.div>
  );
};

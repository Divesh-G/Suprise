import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bouquet from '../Bouquet/Bouquet';
import LetterCard from '../Letter/LetterCard';
import PetalAnimation from '../PetalAnimation/PetalAnimation';
import './SurpriseReveal.css';

// Steps: 'intro' → 'opening' → 'bouquet' → 'letter'
export default function SurpriseReveal({ data }) {
  const [step, setStep] = useState('intro');
  const [musicPlaying, setMusicPlaying] = useState(false);

  const openingText = data.openingText || 'Someone left a little something for you...';

  const handleOpen = () => {
    setStep('opening');
    setTimeout(() => setStep('bouquet'), 1200);
    setTimeout(() => setStep('letter'), 1200 + data.flowers.length * 350 + 1200);
  };

  return (
    <div className="reveal-page" data-theme={data.backgroundTheme || 'cream'}>
      <PetalAnimation count={16} />

      {/* STEP 1: Intro */}
      <AnimatePresence>
        {step === 'intro' && (
          <motion.div
            className="reveal-intro"
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="reveal-intro-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {openingText}
            </motion.p>
            <motion.button
              className="reveal-btn"
              onClick={handleOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Open it 🌷
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STEP 2: Opening transition */}
      <AnimatePresence>
        {step === 'opening' && (
          <motion.div
            className="reveal-intro"
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.p
              className="reveal-intro-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Just for you... {data.emoji || '🌸'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STEP 3+: Bouquet and Letter */}
      <AnimatePresence>
        {(step === 'bouquet' || step === 'letter') && (
          <motion.div
            className="reveal-main"
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="reveal-bouquet-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Bouquet flowers={data.flowers} animate={true} />
            </motion.div>

            <LetterCard
              recipientName={data.recipientName}
              message={data.message}
              signature={data.secretAdmirer ? 'Secret admirer 🌷' : data.signature}
              footerText={data.footerText}
              emoji={data.emoji}
              easterEgg={data.easterEgg}
              visible={step === 'letter'}
            />

            {data.musicEnabled && (
              <motion.button
                className="music-btn"
                onClick={() => setMusicPlaying(!musicPlaying)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {musicPlaying ? '🎵 Playing...' : 'Play a little music 🎵'}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

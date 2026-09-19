import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import './LetterCard.css';

export default function LetterCard({ recipientName, message, signature, footerText, emoji, easterEgg, visible }) {
  const { displayed, done } = useTypewriter(message, 22, visible);
  const [eggOpen, setEggOpen] = useState(false);

  // Unescape HTML entities from sanitized text
  const unescape = (str) => {
    if (!str) return '';
    const d = document.createElement('div');
    d.innerHTML = str;
    return d.textContent;
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Paper lines decoration */}
          <div className="letter-lines" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="letter-line" />
            ))}
          </div>

          <div className="letter-content">
            <p className="letter-dear">Dear {unescape(recipientName)},</p>
            <p className="letter-body">
              {unescape(displayed)}
              {!done && <span className="cursor">|</span>}
            </p>
            {done && (
              <motion.p
                className="letter-signature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {unescape(signature)}
              </motion.p>
            )}
          </div>

          {done && footerText && (
            <motion.p
              className="letter-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {unescape(footerText)}
            </motion.p>
          )}

          {/* Easter egg */}
          {done && easterEgg && (
            <motion.div
              className="easter-egg-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {!eggOpen ? (
                <button className="easter-egg-btn" onClick={() => setEggOpen(true)}>
                  One more thing... ✨
                </button>
              ) : (
                <motion.p
                  className="easter-egg-msg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  {unescape(easterEgg)}
                </motion.p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

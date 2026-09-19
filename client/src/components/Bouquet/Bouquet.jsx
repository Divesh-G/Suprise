import { motion } from 'framer-motion';
import { FLOWER_MAP } from '../Flower/Flower';
import './Bouquet.css';

const DEFAULT_FLOWERS = ['rose-red', 'daisy-white', 'lily-purple', 'carnation-pink'];

// Layout positions for each flower slot in the bouquet
const POSITIONS = [
  { x: '50%', y: '10%',  size: 88, zIndex: 5, rotate: 0   },  // center top
  { x: '28%', y: '22%',  size: 80, zIndex: 4, rotate: -22 },  // left
  { x: '72%', y: '22%',  size: 80, zIndex: 4, rotate: 22  },  // right
  { x: '18%', y: '42%',  size: 72, zIndex: 3, rotate: -38 },  // far left
  { x: '82%', y: '42%',  size: 72, zIndex: 3, rotate: 38  },  // far right
  { x: '38%', y: '36%',  size: 76, zIndex: 6, rotate: -10 },  // mid left
  { x: '62%', y: '36%',  size: 76, zIndex: 6, rotate: 10  },  // mid right
];

export default function Bouquet({ flowers = DEFAULT_FLOWERS, animate = true }) {
  const slots = POSITIONS.slice(0, Math.max(flowers.length, 3));

  return (
    <div className="bouquet-wrap">
      {/* Wrapping paper */}
      <div className="bouquet-wrap-paper">
        <svg viewBox="0 0 200 120" className="wrap-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10 L100 100 L180 10 Z" fill="#f5e6c8" stroke="#d4b896" strokeWidth="1.5"/>
          <path d="M20 10 L100 100 L180 10" fill="none" stroke="#c9a87c" strokeWidth="0.8" opacity="0.5"/>
          <path d="M60 10 L100 100 L140 10" fill="#eedfc0" stroke="#d4b896" strokeWidth="0.8" opacity="0.6"/>
          {/* Ribbon */}
          <path d="M85 95 Q100 88 115 95" stroke="#e8a0b0" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M100 88 Q92 78 88 82" stroke="#e8a0b0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M100 88 Q108 78 112 82" stroke="#e8a0b0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Flowers */}
      <div className="bouquet-flowers">
        {slots.map((pos, i) => {
          const flowerKey = flowers[i % flowers.length];
          const FlowerComp = FLOWER_MAP[flowerKey] || FLOWER_MAP['rose-red'];
          return (
            <motion.div
              key={i}
              className="bouquet-flower-slot"
              style={{
                left: pos.x, top: pos.y,
                zIndex: pos.zIndex,
                transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`
              }}
              initial={animate ? { opacity: 0, scale: 0, y: 20 } : false}
              animate={animate ? { opacity: 1, scale: 1, y: 0 } : false}
              transition={{ delay: i * 0.35 + 0.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <FlowerComp size={pos.size} />
            </motion.div>
          );
        })}
      </div>

      {/* Green leaves background */}
      <div className="bouquet-leaves">
        <svg viewBox="0 0 300 200" className="leaves-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 180 Q110 140 90 100 Q120 110 150 180Z" fill="#6a9e6a" opacity="0.7"/>
          <path d="M150 180 Q190 140 210 100 Q180 110 150 180Z" fill="#5a8a5a" opacity="0.7"/>
          <path d="M150 180 Q80 150 60 120 Q100 125 150 180Z" fill="#7ab07a" opacity="0.6"/>
          <path d="M150 180 Q220 150 240 120 Q200 125 150 180Z" fill="#6a9e6a" opacity="0.6"/>
          <path d="M150 180 Q130 130 120 90 Q145 110 150 180Z" fill="#5a8a5a" opacity="0.5"/>
          <path d="M150 180 Q170 130 180 90 Q155 110 150 180Z" fill="#7ab07a" opacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}

// Individual SVG flower illustrations with hand-drawn artistic style

export function RoseRed({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M40 75 Q38 60 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 65 Q32 58 28 52" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="25" cy="50" rx="7" ry="4" fill="#6a9e6a" transform="rotate(-30 25 50)" opacity="0.9"/>
      {/* Petals */}
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#c0392b" opacity="0.85" transform="rotate(0 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#e74c3c" opacity="0.7" transform="rotate(45 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#c0392b" opacity="0.75" transform="rotate(90 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#e74c3c" opacity="0.65" transform="rotate(135 40 32)"/>
      {/* Center */}
      <circle cx="40" cy="32" r="7" fill="#a93226"/>
      <circle cx="40" cy="32" r="4" fill="#c0392b"/>
      <circle cx="38" cy="30" r="1.5" fill="#e74c3c" opacity="0.6"/>
    </svg>
  );
}

export function RosePink({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q39 62 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 63 Q48 56 52 50" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="55" cy="48" rx="7" ry="4" fill="#6a9e6a" transform="rotate(30 55 48)" opacity="0.9"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#e8a0b0" opacity="0.85" transform="rotate(0 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#f4b8c4" opacity="0.7" transform="rotate(45 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#e8a0b0" opacity="0.75" transform="rotate(90 40 32)"/>
      <ellipse cx="40" cy="32" rx="8" ry="12" fill="#f4b8c4" opacity="0.65" transform="rotate(135 40 32)"/>
      <circle cx="40" cy="32" r="7" fill="#d4849a"/>
      <circle cx="40" cy="32" r="4" fill="#e8a0b0"/>
      <circle cx="38" cy="30" r="1.5" fill="#f9d0da" opacity="0.7"/>
    </svg>
  );
}

export function DaisyWhite({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q41 62 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 68 Q33 62 30 56" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="27" cy="54" rx="6" ry="3.5" fill="#6a9e6a" transform="rotate(-25 27 54)" opacity="0.9"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
        <ellipse key={i} cx="40" cy="26" rx="3.5" ry="9"
          fill={i % 2 === 0 ? '#f5f5f0' : '#ebebE5'}
          opacity="0.95"
          transform={`rotate(${a} 40 38)`}/>
      ))}
      <circle cx="40" cy="38" r="7" fill="#f5c842"/>
      <circle cx="40" cy="38" r="4.5" fill="#f0b830"/>
      <circle cx="38" cy="36" r="1.2" fill="#f5c842" opacity="0.7"/>
    </svg>
  );
}

export function LilyPurple({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q42 60 40 48" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 66 Q48 60 51 54" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="54" cy="52" rx="7" ry="3.5" fill="#6a9e6a" transform="rotate(25 54 52)" opacity="0.9"/>
      {[0,60,120,180,240,300].map((a, i) => (
        <ellipse key={i} cx="40" cy="28" rx="5" ry="13"
          fill={i % 2 === 0 ? '#9b7ec8' : '#b39ddb'}
          opacity="0.8"
          transform={`rotate(${a} 40 38)`}/>
      ))}
      <circle cx="40" cy="38" r="5" fill="#7b5ea7"/>
      {/* Stamens */}
      {[0,72,144,216,288].map((a, i) => (
        <line key={i} x1="40" y1="38"
          x2={40 + 7 * Math.sin(a * Math.PI/180)}
          y2={38 - 7 * Math.cos(a * Math.PI/180)}
          stroke="#f5c842" strokeWidth="1" strokeLinecap="round"/>
      ))}
    </svg>
  );
}

export function CarnationPink({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q38 62 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 64 Q32 57 29 51" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="26" cy="49" rx="7" ry="3.5" fill="#6a9e6a" transform="rotate(-30 26 49)" opacity="0.9"/>
      {/* Ruffled carnation petals */}
      {[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((a, i) => (
        <ellipse key={i} cx="40" cy="30" rx="4" ry="10"
          fill={i % 3 === 0 ? '#e8a0b0' : i % 3 === 1 ? '#f4b8c4' : '#fad4dc'}
          opacity="0.75"
          transform={`rotate(${a} 40 38)`}/>
      ))}
      <circle cx="40" cy="38" r="5" fill="#d4849a"/>
    </svg>
  );
}

export function FlowerOrange({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q41 62 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 67 Q47 61 50 55" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="53" cy="53" rx="6" ry="3.5" fill="#6a9e6a" transform="rotate(25 53 53)" opacity="0.9"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <ellipse key={i} cx="40" cy="28" rx="5.5" ry="11"
          fill={i % 2 === 0 ? '#e8834a' : '#f0a060'}
          opacity="0.82"
          transform={`rotate(${a} 40 38)`}/>
      ))}
      <circle cx="40" cy="38" r="6" fill="#c0622a"/>
      <circle cx="40" cy="38" r="3.5" fill="#e8834a"/>
      <circle cx="38.5" cy="36.5" r="1.2" fill="#f5c842" opacity="0.6"/>
    </svg>
  );
}

export function FlowerWhite({ size = 80, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 75 Q39 62 40 50" stroke="#5a8a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 65 Q33 59 30 53" stroke="#5a8a5a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <ellipse cx="27" cy="51" rx="6" ry="3.5" fill="#6a9e6a" transform="rotate(-25 27 51)" opacity="0.9"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <ellipse key={i} cx="40" cy="28" rx="5" ry="11"
          fill={i % 2 === 0 ? '#f8f8f4' : '#eeeeea'}
          opacity="0.9"
          stroke="#ddd" strokeWidth="0.5"
          transform={`rotate(${a} 40 38)`}/>
      ))}
      <circle cx="40" cy="38" r="6" fill="#f5c842"/>
      <circle cx="40" cy="38" r="3.5" fill="#f0b830"/>
    </svg>
  );
}

export const FLOWER_MAP = {
  'rose-red': RoseRed,
  'rose-pink': RosePink,
  'daisy-white': DaisyWhite,
  'lily-purple': LilyPurple,
  'carnation-pink': CarnationPink,
  'flower-orange': FlowerOrange,
  'flower-white': FlowerWhite,
};

export const FLOWER_LABELS = {
  'rose-red': 'Red Rose 🌹',
  'rose-pink': 'Pink Rose 🌸',
  'daisy-white': 'White Daisy 🌼',
  'lily-purple': 'Purple Lily 💜',
  'carnation-pink': 'Pink Carnation 🌺',
  'flower-orange': 'Orange Flower 🌻',
  'flower-white': 'White Flower 🤍',
};

import { useEffect, useState } from 'react';
import './PetalAnimation.css';

const PETAL_COLORS = ['#e8a0b0','#f4b8c4','#c0392b','#9b7ec8','#f5c842','#e8834a','#f9d0da'];

function Petal({ id }) {
  const left = `${Math.random() * 100}%`;
  const size = 8 + Math.random() * 10;
  const duration = 6 + Math.random() * 8;
  const delay = Math.random() * 10;
  const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  const rotate = Math.random() * 360;

  return (
    <div
      className="petal"
      style={{
        left, width: size, height: size * 0.6,
        background: color,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--rotate': `${rotate}deg`,
        borderRadius: '50% 0 50% 0',
        opacity: 0.7,
      }}
    />
  );
}

export default function PetalAnimation({ count = 18 }) {
  const [petals] = useState(() => Array.from({ length: count }, (_, i) => i));

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map(id => <Petal key={id} id={id} />)}
    </div>
  );
}

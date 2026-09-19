import { FLOWER_LABELS } from '../Flower/Flower';
import './BouquetSelector.css';

const STYLES = [
  { value: 'romantic-garden', label: 'Romantic Garden 🌹' },
  { value: 'spring-meadow',   label: 'Spring Meadow 🌼' },
  { value: 'soft-pastels',    label: 'Soft Pastels 🌸' },
  { value: 'wild-flowers',    label: 'Wild Flowers 🌻' },
];

const THEMES = [
  { value: 'cream',    label: 'Cream ☁️' },
  { value: 'blush',    label: 'Blush 🌸' },
  { value: 'lavender', label: 'Lavender 💜' },
  { value: 'mint',     label: 'Mint 🌿' },
];

export default function BouquetSelector({ bouquetStyle, flowers, backgroundTheme, onChange }) {
  const toggleFlower = (key) => {
    const next = flowers.includes(key)
      ? flowers.filter(f => f !== key)
      : [...flowers, key];
    if (next.length > 0) onChange('flowers', next);
  };

  return (
    <div className="bouquet-selector">
      <div className="selector-group">
        <label className="selector-label">Bouquet Style</label>
        <div className="selector-pills">
          {STYLES.map(s => (
            <button
              key={s.value}
              type="button"
              className={`pill ${bouquetStyle === s.value ? 'active' : ''}`}
              onClick={() => onChange('bouquetStyle', s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="selector-group">
        <label className="selector-label">Flowers</label>
        <div className="selector-pills">
          {Object.entries(FLOWER_LABELS).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`pill ${flowers.includes(key) ? 'active' : ''}`}
              onClick={() => toggleFlower(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="selector-group">
        <label className="selector-label">Background Theme</label>
        <div className="selector-pills">
          {THEMES.map(t => (
            <button
              key={t.value}
              type="button"
              className={`pill ${backgroundTheme === t.value ? 'active' : ''}`}
              onClick={() => onChange('backgroundTheme', t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

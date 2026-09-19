import { useState } from 'react';
import { createSurprise } from '../../services/api';
import BouquetSelector from './BouquetSelector';
import './AdminForm.css';

const DEFAULTS = {
  recipientName: '',
  message: '',
  signature: '',
  openingText: 'Someone left a little something for you...',
  footerText: 'Made with a little thought 💗',
  bouquetStyle: 'romantic-garden',
  flowers: ['rose-red', 'daisy-white', 'lily-purple', 'carnation-pink'],
  backgroundTheme: 'cream',
  emoji: '🌸',
  secretAdmirer: false,
  easterEgg: '',
  musicEnabled: false,
};

export default function AdminForm({ onCreated, onPreview }) {
  const [form, setForm] = useState(DEFAULTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handle = (e) => set(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await createSurprise(form);
      onCreated(data.token, form);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="admin-form" onSubmit={submit}>
      <div className="form-section">
        <h2 className="form-section-title">The Recipient</h2>
        <Field label="Recipient's Name *" name="recipientName" value={form.recipientName} onChange={handle} placeholder="e.g. Yojana" required />
        <Field label="Signature *" name="signature" value={form.signature} onChange={handle} placeholder="e.g. Secret admirer" required />
        <label className="form-check">
          <input type="checkbox" name="secretAdmirer" checked={form.secretAdmirer} onChange={handle} />
          <span>Hide signature (Secret Admirer mode)</span>
        </label>
      </div>

      <div className="form-section">
        <h2 className="form-section-title">The Message</h2>
        <div className="form-field">
          <label>Personalized Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            rows={5}
            placeholder="Write something from the heart..."
            required
          />
        </div>
        <Field label="Opening Text" name="openingText" value={form.openingText} onChange={handle} />
        <Field label="Footer Text" name="footerText" value={form.footerText} onChange={handle} />
        <Field label="Emoji" name="emoji" value={form.emoji} onChange={handle} placeholder="🌸" />
        <Field label="Easter Egg Message (optional)" name="easterEgg" value={form.easterEgg} onChange={handle} placeholder="Keep smiling. 🌷" />
      </div>

      <div className="form-section">
        <h2 className="form-section-title">The Bouquet</h2>
        <BouquetSelector
          bouquetStyle={form.bouquetStyle}
          flowers={form.flowers}
          backgroundTheme={form.backgroundTheme}
          onChange={set}
        />
      </div>

      <div className="form-section">
        <h2 className="form-section-title">Options</h2>
        <label className="form-check">
          <input type="checkbox" name="musicEnabled" checked={form.musicEnabled} onChange={handle} />
          <span>Show music button to recipient</span>
        </label>
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={() => onPreview(form)}>
          Preview Surprise 👁
        </button>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create & Generate Link 💌'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, placeholder, required }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} />
    </div>
  );
}

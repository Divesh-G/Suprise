import { useState } from 'react';
import { motion } from 'framer-motion';
import './LinkGenerator.css';

export default function LinkGenerator({ token, onPreview, onNew }) {
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}/surprise/${token}`;

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      className="link-gen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="link-gen-icon">💌</div>
      <h2 className="link-gen-title">Your surprise is ready!</h2>
      <p className="link-gen-sub">Share this private link with your recipient.</p>

      <div className="link-box">
        <span className="link-text">{url}</span>
        <button className="copy-btn" onClick={copy}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>

      <div className="link-actions">
        <button className="btn-secondary" onClick={() => onPreview(token)}>
          Preview 👁
        </button>
        <a className="btn-primary" href={url} target="_blank" rel="noreferrer">
          Open Surprise 🌷
        </a>
        <button className="btn-ghost" onClick={onNew}>
          Create Another
        </button>
      </div>
    </motion.div>
  );
}

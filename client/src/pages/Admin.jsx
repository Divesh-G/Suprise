import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminForm from '../components/AdminForm/AdminForm';
import LinkGenerator from '../components/LinkGenerator/LinkGenerator';
import SurpriseReveal from '../components/SurpriseReveal/SurpriseReveal';
import { adminLogin } from '../services/api';
import './Admin.css';

export default function Admin() {
  const [authed, setAuthed] = useState(!!localStorage.getItem('adminToken'));
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [view, setView] = useState('form'); // 'form' | 'link' | 'preview'
  const [token, setToken] = useState('');
  const [previewData, setPreviewData] = useState(null);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await adminLogin(password);
      localStorage.setItem('adminToken', data.token);
      setAuthed(true);
    } catch {
      setLoginErr('Incorrect password.');
    }
  };

  const handleCreated = (tok, formData) => {
    setToken(tok);
    setPreviewData(formData);
    setView('link');
  };

  const handlePreview = (data) => {
    setPreviewData(typeof data === 'string' ? previewData : data);
    setView('preview');
  };

  if (!authed) {
    return (
      <div className="admin-login">
        <form onSubmit={login} className="login-form">
          <div className="login-icon">🔑</div>
          <h2>Admin Access</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
          />
          {loginErr && <p className="login-err">{loginErr}</p>}
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

  if (view === 'preview' && previewData) {
    return (
      <div>
        <button className="back-btn" onClick={() => setView(token ? 'link' : 'form')}>
          ← Back
        </button>
        <SurpriseReveal data={previewData} />
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-title">Create a Surprise 🌸</h1>
        <button className="logout-btn" onClick={() => { localStorage.removeItem('adminToken'); setAuthed(false); }}>
          Logout
        </button>
      </div>

      <div className="admin-body">
        {view === 'form' && (
          <AdminForm
            onCreated={handleCreated}
            onPreview={handlePreview}
          />
        )}
        {view === 'link' && (
          <LinkGenerator
            token={token}
            onPreview={() => handlePreview(token)}
            onNew={() => { setView('form'); setToken(''); setPreviewData(null); }}
          />
        )}
      </div>
    </div>
  );
}

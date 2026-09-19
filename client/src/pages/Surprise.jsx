import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSurprise } from '../services/api';
import SurpriseReveal from '../components/SurpriseReveal/SurpriseReveal';
import './Surprise.css';

export default function Surprise() {
  const { token } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSurprise(token)
      .then(r => setData(r.data))
      .catch(err => {
        const code = err.response?.data?.error;
        if (code === 'expired') setError('This surprise has expired. 🕊️');
        else if (code === 'inactive') setError('This surprise is no longer available. 💌');
        else setError("Oops... this little surprise couldn't be found. 💌");
      })
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    if (data?.backgroundTheme) {
      document.body.setAttribute('data-theme', data.backgroundTheme);
      return () => document.body.removeAttribute('data-theme');
    }
  }, [data]);

  if (loading) return (
    <div className="surprise-loading">
      <span className="loading-dot">🌸</span>
    </div>
  );

  if (error) return (
    <div className="surprise-error">
      <p className="error-icon">💌</p>
      <p className="error-msg">{error}</p>
    </div>
  );

  return <SurpriseReveal data={data} />;
}

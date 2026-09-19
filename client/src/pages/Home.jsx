import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PetalAnimation from '../components/PetalAnimation/PetalAnimation';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <PetalAnimation count={12} />
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-icon">🌸</div>
        <h1 className="home-title">Surprise</h1>
        <p className="home-sub">
          Create a personal bouquet & letter for someone special.
        </p>
        <Link to="/admin" className="home-btn">
          Create a Surprise 💌
        </Link>
      </motion.div>
    </div>
  );
}

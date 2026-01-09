import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-title">
        Buat CV Ramah ATS<br />
        <span className="highlight">dalam Hitungan Menit</span>
      </h1>
      
      <p className="hero-subtitle">
        Buat CV profesional dan terstandarisasi yang dirancang untuk lolos sistem pelacakan pelamar (ATS).
        Fokus pada konten Anda, biarkan kami yang mengurus formatnya.
      </p>

      <Link to="/create" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
        Buat CV Sekarang <ArrowRight size={20} />
      </Link>

      <div className="features-grid">
        <div className="feature-card">
          <CheckCircle className="highlight" size={32} style={{ marginBottom: '1rem' }} />
          <h3 className="feature-title">Ramah ATS</h3>
          <p className="feature-desc">
            Layout satu kolom yang bersih tanpa elemen yang menghalangi parsing sistem.
          </p>
        </div>
        
        <div className="feature-card">
          <CheckCircle className="highlight" size={32} style={{ marginBottom: '1rem' }} />
          <h3 className="feature-title">Format Standar</h3>
          <p className="feature-desc">
            Struktur standar internasional yang disukai oleh rekruter di seluruh dunia.
          </p>
        </div>
        
        <div className="feature-card">
          <CheckCircle className="highlight" size={32} style={{ marginBottom: '1rem' }} />
          <h3 className="feature-title">Teks Murni</h3>
          <p className="feature-desc">
            Fokus pada keterbacaan dan kata kunci konten tanpa gangguan visual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

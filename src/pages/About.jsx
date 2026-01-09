import React from 'react';

const About = () => {
  return (
    <div className="glass-card" style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Tentang Kami</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        ATS Forged adalah alat yang dirancang untuk membantu pencari kerja membuat CV yang mudah dibaca oleh Applicant Tracking Systems (ATS).
      </p>
      <p style={{ color: 'var(--text-secondary)' }}>
        Dibangun oleh dowithsudo.com.
      </p>
    </div>
  );
};

export default About;

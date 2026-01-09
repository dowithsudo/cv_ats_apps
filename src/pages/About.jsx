import React from 'react';
import { Server, Network, ShieldCheck, Video, Headphones, LineChart, ExternalLink } from 'lucide-react';

const About = () => {
  const services = [
    {
      title: "Manajemen Server & Cloud",
      description: "Instalasi server, migrasi AWS/Azure/GCP, backup & disaster recovery, monitoring, dan VM management.",
      icon: <Server size={32} />
    },
    {
      title: "Jaringan & Infrastruktur",
      description: "Desain jaringan, konfigurasi router/switch, optimasi WiFi, VPN, dan troubleshooting.",
      icon: <Network size={32} />
    },
    {
      title: "Keamanan IT",
      description: "Audit keamanan, firewall, proteksi malware, pelatihan karyawan, dan incident response planning.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "CCTV & Keamanan Fisik",
      description: "Desain sistem CCTV, kamera IP, akses kontrol, penyimpanan video, dan monitoring jarak jauh.",
      icon: <Video size={32} />
    },
    {
      title: "Dukungan IT On-Demand",
      description: "Remote support, kunjungan onsite, masalah hardware/software, dan konsultasi umum.",
      icon: <Headphones size={32} />
    },
    {
      title: "Konsultasi & Strategi IT",
      description: "Roadmap transformasi digital, optimasi anggaran, pemilihan tech stack, kebijakan IT, dan manajemen vendor.",
      icon: <LineChart size={32} />
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* Hero Section */}
      <section className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Tentang DoWithSudo
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto' 
        }}>
          DoWithSudo adalah penyedia layanan IT yang membantu bisnis membangun, mengelola, dan mengamankan infrastruktur teknologi secara menyeluruh. Layanan mencakup manajemen server dan cloud, jaringan, keamanan IT, sistem CCTV, hingga dukungan teknis on-demand dan konsultasi strategi IT. Fokus utama DoWithSudo adalah menyediakan solusi yang andal, aman, dan sesuai kebutuhan bisnis, baik untuk skala kecil maupun menengah, dengan pendekatan praktis dan efisien.
        </p>
      </section>

      {/* Services Grid */}
      <section>
        <h2 style={{ 
          marginBottom: '2rem', 
          textAlign: 'center',
          fontSize: '1.8rem'
        }}>
          Layanan Kami
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {services.map((service, index) => (
            <div key={index} className="glass-card" style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--primary-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            >
              <div style={{ color: 'var(--primary-glow)', marginBottom: '0.5rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-card" style={{ 
        textAlign: 'center', 
        padding: '3rem 2rem',
        background: 'linear-gradient(180deg, rgba(109, 40, 217, 0.1) 0%, rgba(22, 22, 26, 0.4) 100%)',
        borderColor: 'var(--primary-accent)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Siap Mengoptimalkan Infrastruktur IT Anda?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Jelajahi solusi lengkap kami dan diskusikan kebutuhan teknologi Anda bersama tim ahli kami.
        </p>
        <a 
          href="https://dowithsudo.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ 
            fontSize: '1.1rem',
            padding: '1rem 2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          Kunjungi DoWithSudo.com
          <ExternalLink size={20} />
        </a>
      </section>

    </div>
  );
};

export default About;

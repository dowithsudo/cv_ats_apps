import React from 'react';
import { useNavigate } from 'react-router-dom';
import CVPreview from '../components/cv-preview/CVPreview';

const Templates = () => {
  const navigate = useNavigate();

  const dummyData = {
    personalInfo: {
      fullName: 'Alex Anderson',
      email: 'alex.anderson@email.com',
      phone: '+62 812 3456 7890',
      city: 'Jakarta',
      country: 'Indonesia',
      linkedin: 'linkedin.com/in/alex',
    },
    summary: 'Experienced Software Engineer with a focus on scalable web applications and cloud infrastructure. Proven track record of delivering high-quality code in agile environments.',
    workExperience: [
      {
        jobTitle: 'Senior Developer',
        company: 'Tech Solutions Inc.',
        location: 'Jakarta',
        startDate: '2020-01',
        isCurrent: true,
        responsibilities: '• Led a team of 5 developers\n• Architected microservices\n• Improved performance by 40%'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University of Indonesia',
        year: '2019'
      }
    ],
    skills: {
      technical: ['React', 'Node.js', 'Typescript', 'AWS'],
      soft: ['Leadership', 'Communication', 'Problem Solving']
    }
  };

  const templates = [
    { id: 'ats-standard', name: 'ATS Standard', description: 'Clean, simple, and 100% ATS optimized.', type: 'ATS' },
    { id: 'professional-classic', name: 'Professional Classic', description: 'Traditional serif style for corporate roles.', type: 'Professional' },
    { id: 'professional-modern', name: 'Professional Modern', description: 'Clean lines with subtle blue accents.', type: 'Professional' },
    { id: 'creative-bold', name: 'Creative Bold', description: 'High contrast header for standing out.', type: 'Creative' },
    { id: 'creative-clean', name: 'Creative Clean', description: 'Minimalist with teal accents.', type: 'Creative' }
  ];

  const handleSelectTemplate = (id) => {
    navigate(`/create?template=${id}`);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Pilih Template CV</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Semua template kami dirancang agar mudah dibaca oleh sistem ATS namun tetap menarik secara visual. Pilih gaya yang sesuai dengan kepribadian profesional Anda.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {templates.map((tpl) => (
          <div key={tpl.id} className="glass-card" style={{ 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onClick={() => handleSelectTemplate(tpl.id)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Thumbnail Container */}
            <div style={{ 
              width: '100%', 
              height: '350px', 
              background: '#fff', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              position: 'relative',
              border: '1px solid var(--border-color)'
            }}>
              {/* Scaled Preview */}
              <div style={{ 
                transform: 'scale(0.35)', 
                transformOrigin: 'top left', 
                width: '210mm', 
                height: 'auto', // Allow height to flow
              }}>
                <CVPreview data={dummyData} template={tpl.id} />
              </div>
              {/* Overlay for interaction */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'transparent',
                // zIndex: 10
              }}></div>
            </div>

            {/* Info */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '0.5rem' 
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{tpl.name}</h3>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '12px', 
                  background: 'rgba(109, 40, 217, 0.1)', 
                  color: 'var(--primary-glow)',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  {tpl.type}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {tpl.description}
              </p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Gunakan Template Ini
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { initialCVData } from '../utils/initialData';
import CVPreview from '../components/cv-preview/CVPreview';
import Step1Personal from '../components/cv-form/steps/Step1Personal';
import Step2Summary from '../components/cv-form/steps/Step2Summary';
import Step3Experience from '../components/cv-form/steps/Step3Experience';
import Step4Education from '../components/cv-form/steps/Step4Education';
import Step5Skills from '../components/cv-form/steps/Step5Skills';
import Step6Certifications from '../components/cv-form/steps/Step6Certifications';
import Step7Projects from '../components/cv-form/steps/Step7Projects';
import Step8Languages from '../components/cv-form/steps/Step8Languages';
import Step9Optional from '../components/cv-form/steps/Step9Optional';
import { ArrowLeft, ArrowRight, Printer, CheckCircle, LayoutTemplate } from 'lucide-react';
import './CreateCV.css';

const STEPS = [
  { id: 1, title: 'Data Diri', component: Step1Personal },
  { id: 2, title: 'Ringkasan', component: Step2Summary },
  { id: 3, title: 'Pengalaman', component: Step3Experience },
  { id: 4, title: 'Pendidikan', component: Step4Education },
  { id: 5, title: 'Keahlian', component: Step5Skills },
  { id: 6, title: 'Sertifikasi', component: Step6Certifications },
  { id: 7, title: 'Proyek', component: Step7Projects },
  { id: 8, title: 'Bahasa', component: Step8Languages },
  { id: 9, title: 'Lanjutan', component: Step9Optional },
  { id: 10, title: 'Selesai', component: null }, // Special case
];

const TEMPLATE_OPTIONS = [
  { id: 'ats-standard', label: 'ATS Standard' },
  { id: 'professional-classic', label: 'Professional Classic' },
  { id: 'professional-modern', label: 'Professional Modern' },
  { id: 'creative-bold', label: 'Creative Bold' },
  { id: 'creative-clean', label: 'Creative Clean' },
];

const CreateCV = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [cvData, setCvData] = useState(initialCVData);
  const [template, setTemplate] = useState(searchParams.get('template') || 'ats-standard');

  const updateData = (newData) => {
    setCvData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    // Basic validation could go here
    if (currentStep < 10) {
      setCurrentStep(curr => curr + 1);
      window.scrollTo(0,0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(curr => curr - 1);
      window.scrollTo(0,0);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Scale logic
  const [scale, setScale] = useState(1);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const calculateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // A4 width in pixels (96 DPI) approx 794px. 
        // We add some buffer/margin (e.g. 60px total horizontal padding)
        const a4Width = 794; 
        const padding = 40;
        const availableWidth = containerWidth - padding;
        
        let newScale = availableWidth / a4Width;
        // Clamp scale: max 1.2, min 0.3
        newScale = Math.min(Math.max(newScale, 0.3), 1.2);
        
        setScale(newScale);
      }
    };

    // Initial calc
    calculateScale();

    // Resize observer
    const observer = new ResizeObserver(() => {
      calculateScale();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CurrentComponent = STEPS[currentStep - 1]?.component;

  return (
    <div className="create-cv-container">
      {/* Editor Section */}
      <div className="cv-editor-section">
        {/* Progress */}
        <div className="form-header">
           <div className="steps-indicator no-scrollbar">
             {STEPS.map(step => (
               <div 
                 key={step.id} 
                 className={`step-dot ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                 onClick={() => setCurrentStep(step.id)} // Allow jumping
                 title={step.title}
                 style={{ cursor: 'pointer' }}
               >
                 {currentStep > step.id ? <CheckCircle size={16} /> : step.id}
               </div>
             ))}
           </div>
           <h2>{STEPS[currentStep - 1].title}</h2>
        </div>

        {/* Dynamic Form Step */}
        <div className="step-content">
          {currentStep === 10 ? (
            <div className="step-container">
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <CheckCircle size={64} className="highlight" style={{ margin: '0 auto 1rem' }} />
                <h2>Sudah Siap!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  CV Anda siap dalam format <strong>{TEMPLATE_OPTIONS.find(t => t.id === template)?.label}</strong>.
                  Cek preview di sebelah kanan (atau di bawah pada mobile).
                </p>
                <div style={{ marginBottom: '2rem', textAlign: 'left', maxWidth: '400px', margin: '0 auto 2rem' }}>
                   <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                     Ganti Template (Preview):
                   </label>
                   <select 
                     value={template} 
                     onChange={(e) => setTemplate(e.target.value)}
                     className="form-select"
                     style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid var(--border-color)' }}
                   >
                     {TEMPLATE_OPTIONS.map(opt => (
                       <option key={opt.id} value={opt.id}>{opt.label}</option>
                     ))}
                   </select>
                </div>
                <p style={{ marginBottom: '2rem' }}>
                  Klik tombol di bawah ini untuk menyimpan sebagai PDF.
                </p>
                <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                  <Printer size={24} /> Unduh PDF
                </button>
                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary' }}>
                  <strong>Tip:</strong> Di dialog print, pastikan "Background graphics" 
                  {template.includes('creative') || template.includes('modern') ? ' DICENTANG ' : ' TIDAK dicentang '} 
                  untuk hasil terbaik.
                </div>
              </div>
            </div>
          ) : (
            CurrentComponent && <CurrentComponent data={cvData} updateData={updateData} />
          )}
        </div>

        {/* Navigation */}
        <div className="form-navigation">
          <button 
            onClick={prevStep} 
            disabled={currentStep === 1}
            className="btn btn-outline"
          >
            <ArrowLeft size={18} /> Kembali
          </button>
          
          {currentStep < 10 ? (
            <button onClick={nextStep} className="btn btn-primary">
              Lanjut <ArrowRight size={18} />
            </button>
          ) : (
             <button onClick={handlePrint} className="btn btn-primary">
              <Printer size={18} /> Unduh
            </button>
          )}
        </div>
      </div>

      {/* Preview Section */}
      <div className="cv-preview-section" ref={containerRef}>
        
        {/* Template Selector Overlay for Preview Area */}
        <div style={{ 
          marginBottom: '1rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 1rem' 
        }} className="no-print">
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
             <LayoutTemplate size={16} />
             <span style={{ fontSize: '0.9rem' }}>Template:</span>
           </div>
           <select 
             value={template} 
             onChange={(e) => setTemplate(e.target.value)}
             style={{ 
               background: 'transparent',
               color: 'var(--primary-glow)',
               border: 'none',
               textAlign: 'right',
               cursor: 'pointer',
               fontWeight: '600',
               fontSize: '0.9rem'
             }}
           >
             {TEMPLATE_OPTIONS.map(opt => (
               <option key={opt.id} value={opt.id} style={{ background: '#222' }}>{opt.label}</option>
             ))}
           </select>
        </div>

        <div 
          className="preview-container"
          style={{ 
            transform: `scale(${scale})`,
            // We need to adjust margin-bottom to account for the scale reducing the effective height visual
            // But usually just transforming is enough if parent overflows
          }}
        >
          <CVPreview data={cvData} template={template} />
        </div>
      </div>
    </div>
  );
};

export default CreateCV;

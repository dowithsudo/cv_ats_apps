import React from 'react';
import './CVPreview.css';

const CVPreview = ({ data }) => {
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    certifications,
    projects,
    languages,
    awards,
    volunteer,
    publications
  } = data || {};

  // Formatter helpers
  const getContactString = () => {
    const parts = [];
    if (personalInfo?.phone) parts.push(personalInfo.phone);
    if (personalInfo?.email) parts.push(personalInfo.email);
    
    const location = [personalInfo?.city, personalInfo?.country].filter(Boolean).join(', ');
    if (location) parts.push(location);
    
    if (personalInfo?.linkedin) parts.push(personalInfo.linkedin);
    if (personalInfo?.portfolio) parts.push(personalInfo.portfolio);
    
    return parts.join(' | ');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    // Assume input is YYYY-MM or similar.
    // If it's already formatted, return as is.
    return dateStr; 
  };

  const renderBullets = (text) => {
    if (!text) return null;
    // Split by newline and render as list
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length === 0) return null;
    return (
      <ul className="cv-list">
        {lines.map((line, i) => (
          <li key={i} className="cv-list-item">{line.replace(/^•\s*/, '')}</li> // Remove existing bullet if user typed it
        ))}
      </ul>
    );
  };

  return (
    <div id="cv-preview" className="cv-document">
      {/* Header */}
      <div className="cv-header">
        <div className="cv-name">{personalInfo?.fullName || 'YOUR NAME'}</div>
        <div className="cv-contact-info">{getContactString()}</div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="cv-section">
          <div className="cv-section-title">PROFESSIONAL SUMMARY</div>
          <p className="cv-body-text">{summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">WORK EXPERIENCE</div>
          {workExperience.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                {exp.jobTitle} — {exp.company}{exp.location ? `, ${exp.location}` : ''}
              </div>
              <div className="cv-item-date">
                {formatDate(exp.startDate)} – {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
              </div>
              {renderBullets(exp.responsibilities)}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">EDUCATION</div>
          {education.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                {edu.degree}{edu.major ? `, ${edu.major}` : ''}
              </div>
              <div className="cv-item-sub">
                {edu.institution}, {edu.year}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(skills?.technical?.length > 0 || skills?.soft?.length > 0) && (
        <div className="cv-section">
          <div className="cv-section-title">SKILLS</div>
          {skills?.technical?.length > 0 && (
            <div className="cv-item">
              <strong>Technical Skills:</strong> {skills.technical.join(', ')}
            </div>
          )}
          {skills?.soft?.length > 0 && (
            <div className="cv-item">
              <strong>Soft Skills:</strong> {skills.soft.join(', ')}
            </div>
          )}
        </div>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">CERTIFICATIONS</div>
          {certifications.map((cert, index) => (
            <div key={index} className="cv-item">
              {cert.name} — {cert.issuer}, {cert.year}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">PROJECTS</div>
          {projects.map((proj, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">{proj.name}</div>
              <div className="cv-body-text">{proj.description}</div>
               {proj.technologies && (
                 <div className="cv-item-sub">Technologies: {proj.technologies}</div>
               )}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">LANGUAGES</div>
          {languages.map((lang, index) => (
            <div key={index} className="cv-item">
              {lang.language} — {lang.level}
            </div>
          ))}
        </div>
      )}
      
      {/* Awards */}
      {awards?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">AWARDS</div>
          {awards.map((item, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">{item.title} — {item.issuer}, {item.year}</div>
            </div>
          ))}
        </div>
      )}

      {/* Volunteer */}
      {volunteer?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">VOLUNTEER EXPERIENCE</div>
          {volunteer.map((item, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">{item.role} — {item.organization}</div>
              <div className="cv-item-date">{item.year}</div>
              <div className="cv-body-text">{item.description}</div>
            </div>
          ))}
        </div>
      )}

      {/* Publications */}
      {publications?.length > 0 && (
        <div className="cv-section">
          <div className="cv-section-title">PUBLICATIONS</div>
          {publications.map((item, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                {item.title} — {item.publisher}, {item.year}
              </div>
              {item.url && <div className="cv-item-sub">{item.url}</div>}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CVPreview;

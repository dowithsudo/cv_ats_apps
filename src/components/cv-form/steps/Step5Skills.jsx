import React, { useState } from 'react';
import { X } from 'lucide-react';

const TagInput = ({ tags, onAdd, onRemove, label, placeholder }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = input.trim();
      if (val && !tags.includes(val)) {
        onAdd(val);
        setInput('');
      }
    }
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="tags-container" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem', 
        padding: '0.5rem', 
        border: '1px solid var(--border-color)', 
        borderRadius: 'var(--radius-md)',
        background: 'rgba(0,0,0,0.2)'
      }}>
        {tags.map(tag => (
          <span key={tag} className="tag" style={{ 
            background: 'var(--primary-accent)', 
            color: 'white', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {tag}
            <button onClick={() => onRemove(tag)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
              <X size={14} />
            </button>
          </span>
        ))}
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={{ border: 'none', background: 'transparent', flex: 1, minWidth: '120px', padding: 0, height: '24px' , boxShadow: 'none'}} 
        />
      </div>
      <small style={{ color: 'var(--text-secondary)' }}>Tekan Enter atau Koma untuk menambah.</small>
    </div>
  );
};

const Step5Skills = ({ data, updateData }) => {
  const { skills } = data;

  const handleAdd = (type, tag) => {
    updateData({
      skills: {
        ...skills,
        [type]: [...skills[type], tag]
      }
    });
  };

  const handleRemove = (type, tag) => {
    updateData({
      skills: {
        ...skills,
        [type]: skills[type].filter(t => t !== tag)
      }
    });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Keahlian (Skills)</h2>
      <p className="step-desc">Tampilkan keahlian teknis dan soft skill Anda.</p>

      <TagInput 
        label="Technical Skills *" 
        tags={skills.technical} 
        onAdd={(t) => handleAdd('technical', t)} 
        onRemove={(t) => handleRemove('technical', t)}
        placeholder="e.g. JavaScript, React, Python"
      />

      <TagInput 
        label="Soft Skills *" 
        tags={skills.soft} 
        onAdd={(t) => handleAdd('soft', t)} 
        onRemove={(t) => handleRemove('soft', t)}
        placeholder="e.g. Kepemimpinan, Komunikasi"
      />
    </div>
  );
};

export default Step5Skills;

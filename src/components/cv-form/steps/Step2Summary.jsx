import React from 'react';

const Step2Summary = ({ data, updateData }) => {
  const handleChange = (e) => {
    updateData({ summary: e.target.value });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Ringkasan Profesional</h2>
      <p className="step-desc">Tulis ringkasan singkat (2-4 kalimat) yang menjelaskan pengalaman dan pencapaian utama Anda.</p>
      
      <div className="form-group">
        <label>Teks Ringkasan *</label>
        <textarea
          name="summary"
          value={data.summary}
          onChange={handleChange}
          rows={6}
          placeholder="Contoh: Software Engineer berpengalaman dengan 5+ tahun pengalaman dalam..."
          maxLength={600}
        />
        <div className="char-count" style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {data.summary.length} / 600 karakter
        </div>
      </div>
    </div>
  );
};

export default Step2Summary;

import React from 'react';

const Step1Personal = ({ data, updateData }) => {
  const { personalInfo } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      personalInfo: {
        ...personalInfo,
        [name]: value
      }
    });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Informasi Pribadi</h2>
      <p className="step-desc">Masukkan detail kontak Anda. Ini diperlukan agar rekruter dapat menghubungi Anda.</p>

      <div className="form-grid">
        <div className="form-group">
          <label>Nama Lengkap *</label>
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label>Nomor Telepon *</label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            placeholder="e.g. +62 812 3456 7890"
            required
          />
        </div>

        <div className="form-group">
          <label>Alamat Email *</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label>Kota</label>
            <input
              type="text"
              name="city"
              value={personalInfo.city}
              onChange={handleChange}
              placeholder="Jakarta"
            />
          </div>
          <div className="form-group">
            <label>Negara</label>
            <input
              type="text"
              name="country"
              value={personalInfo.country}
              onChange={handleChange}
              placeholder="Indonesia"
            />
          </div>
        </div>

        <div className="form-group">
          <label>URL LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>

        <div className="form-group">
          <label>URL Portofolio</label>
          <input
            type="url"
            name="portfolio"
            value={personalInfo.portfolio}
            onChange={handleChange}
            placeholder="dowithsudo.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1Personal;

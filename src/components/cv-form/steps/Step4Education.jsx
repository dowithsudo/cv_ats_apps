import React, { useState } from 'react';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const Step4Education = ({ data, updateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdu, setCurrentEdu] = useState(null);

  const handleAdd = () => {
    setCurrentEdu({
      id: generateId(),
      degree: '',
      major: '',
      institution: '',
      year: ''
    });
    setIsEditing(true);
  };

  const handleEdit = (item) => {
    setCurrentEdu({ ...item });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const newData = data.education.filter(i => i.id !== id);
    updateData({ education: newData });
  };

  const handleSave = () => {
    const list = [...data.education];
    const index = list.findIndex(i => i.id === currentEdu.id);
    if (index > -1) {
      list[index] = currentEdu;
    } else {
      list.push(currentEdu);
    }
    // Sort descending by year
    list.sort((a, b) => b.year.localeCompare(a.year));
    updateData({ education: list });
    setIsEditing(false);
    setCurrentEdu(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdu(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Pendidikan</h2>
      <p className="step-desc">Daftar riwayat pendidikan Anda.</p>

      {!isEditing && (
        <div className="items-list">
          {data.education.map(item => (
            <div key={item.id} className="item-card glass-card" style={{ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: 'bold' }}>{item.degree} {item.major && `in ${item.major}`}</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.institution}, {item.year}</div>
              </div>
              <div className="item-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => handleEdit(item)} className="btn-icon"><Edit2 size={18} /></button>
                <button onClick={() => handleDelete(item.id)} className="btn-icon" style={{ color: 'red' }}><Trash2 size={18} /></button>
              </div>
            </div>
          ))}

          <button onClick={handleAdd} className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }}>
            <Plus size={18} /> Tambah Pendidikan
          </button>
        </div>
      )}

      {isEditing && (
        <div className="item-form glass-card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{currentEdu.id && data.education.find(i => i.id === currentEdu.id) ? 'Edit Pendidikan' : 'Pendidikan Baru'}</h3>
          
          <div className="form-group">
            <label>Gelar / Tingkat *</label>
            <input name="degree" value={currentEdu.degree} onChange={handleChange} placeholder="e.g. Sarjana Komputer (S.Kom)" />
          </div>

          <div className="form-group">
            <label>Jurusan</label>
            <input name="major" value={currentEdu.major} onChange={handleChange} placeholder="e.g. Teknik Informatika" />
          </div>

          <div className="form-group">
            <label>Institusi *</label>
            <input name="institution" value={currentEdu.institution} onChange={handleChange} placeholder="e.g. Universitas Indonesia" />
          </div>

          <div className="form-group">
            <label>Tahun Lulus *</label>
            <input type="number" name="year" value={currentEdu.year} onChange={handleChange} placeholder="e.g. 2024" />
          </div>

          <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={handleSave} className="btn btn-primary"><Check size={18} /> Simpan</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary"><X size={18} /> Batal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step4Education;

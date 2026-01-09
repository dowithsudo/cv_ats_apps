import React, { useState } from 'react';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const Step3Experience = ({ data, updateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentExp, setCurrentExp] = useState(null);

  const handleAdd = () => {
    setCurrentExp({
      id: generateId(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      responsibilities: ''
    });
    setIsEditing(true);
  };

  const handleEdit = (item) => {
    setCurrentExp({ ...item });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const newData = data.workExperience.filter(i => i.id !== id);
    updateData({ workExperience: newData });
  };

  const handleSave = () => {
    const list = [...data.workExperience];
    const index = list.findIndex(i => i.id === currentExp.id);
    if (index > -1) {
      list[index] = currentExp;
    } else {
      list.push(currentExp);
    }
    // Sort by date (newest first)? User instructions: "Urut terbaru ke lama".
    // I won't auto sort to not confuse user, or I should?
    // User instruction: "Aturan: Urut terbaru ke lama". Ideally I should sort.
    // I'll sort by startDate descending properly.
    list.sort((a, b) => {
        // Simple string comparison for YYYY-MM works if format is strict.
        if (a.isCurrent) return -1;
        if (b.isCurrent) return 1;
        return b.startDate.localeCompare(a.startDate);
    });

    updateData({ workExperience: list });
    setIsEditing(false);
    setCurrentExp(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentExp(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Pengalaman Kerja</h2>
      <p className="step-desc">Tambahkan pengalaman kerja yang relevan, dimulai dari yang terbaru.</p>

      {/* List */}
      {!isEditing && (
        <div className="items-list">
          {data.workExperience.map(item => (
            <div key={item.id} className="item-card glass-card" style={{ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: 'bold' }}>{item.jobTitle}</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.company} | {item.startDate} - {item.isCurrent ? 'Present' : item.endDate}</div>
              </div>
              <div className="item-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => handleEdit(item)} className="btn-icon"><Edit2 size={18} /></button>
                <button onClick={() => handleDelete(item.id)} className="btn-icon" style={{ color: 'red' }}><Trash2 size={18} /></button>
              </div>
            </div>
          ))}

          <button onClick={handleAdd} className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }}>
            <Plus size={18} /> Tambah Pengalaman
          </button>
        </div>
      )}

      {/* Form */}
      {isEditing && (
        <div className="item-form glass-card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{currentExp.id && data.workExperience.find(i => i.id === currentExp.id) ? 'Edit Pengalaman' : 'Pengalaman Baru'}</h3>
          
          <div className="form-group">
            <label>Judul Pekerjaan / Posisi *</label>
            <input name="jobTitle" value={currentExp.jobTitle} onChange={handleChange} placeholder="e.g. Senior Frontend Developer" />
          </div>

          <div className="form-group">
            <label>Nama Perusahaan *</label>
            <input name="company" value={currentExp.company} onChange={handleChange} placeholder="e.g. Google" />
          </div>

          <div className="form-group">
            <label>Lokasi</label>
            <input name="location" value={currentExp.location} onChange={handleChange} placeholder="e.g. Jakarta, Indonesia" />
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Tanggal Mulai *</label>
              <input type="month" name="startDate" value={currentExp.startDate} onChange={handleChange} />
            </div>
            
            {!currentExp.isCurrent && (
              <div className="form-group">
                <label>Tanggal Selesai *</label>
                <input type="month" name="endDate" value={currentExp.endDate} onChange={handleChange} />
              </div>
            )}
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              name="isCurrent" 
              checked={currentExp.isCurrent} 
              onChange={handleChange} 
              id="isCurrent" 
              style={{ width: 'auto' }}
            />
            <label htmlFor="isCurrent" style={{ margin: 0 }}> Saya masih bekerja di sini</label>
          </div>

          <div className="form-group">
            <label>Tanggung Jawab (Poin-poin) *</label>
            <textarea 
              name="responsibilities" 
              value={currentExp.responsibilities} 
              onChange={handleChange} 
              rows={5} 
              placeholder="• Mengembangkan fitur baru...&#10;• Meningkatkan performa sistem..."
            />
            <small style={{ color: 'var(--text-secondary)' }}>Gunakan strip atau bullet untuk daftar.</small>
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

export default Step3Experience;

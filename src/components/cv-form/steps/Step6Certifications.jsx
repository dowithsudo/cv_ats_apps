import React, { useState } from 'react';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const Step6Certifications = ({ data, updateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [current, setCurrent] = useState(null);

  const handleAdd = () => {
    setCurrent({ id: generateId(), name: '', issuer: '', year: '' });
    setIsEditing(true);
  };

  const handleSave = () => {
    const list = [...data.certifications];
    const index = list.findIndex(i => i.id === current.id);
    if (index > -1) list[index] = current;
    else list.push(current);
    list.sort((a,b) => b.year - a.year);
    updateData({ certifications: list });
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    updateData({ certifications: data.certifications.filter(i => i.id !== id) });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Sertifikasi</h2>
      <p className="step-desc">Tambahkan sertifikasi yang relevan.</p>

      {!isEditing ? (
        <div className="items-list">
          {data.certifications.map(item => (
            <div key={item.id} className="item-card glass-card" style={{ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
             <div><h4>{item.name}</h4><small>{item.issuer}, {item.year}</small></div>
             <div>
               <button onClick={() => { setCurrent(item); setIsEditing(true); }} className="btn-icon"><Edit2 size={16}/></button>
               <button onClick={() => handleDelete(item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
             </div>
            </div>
          ))}
          <button onClick={handleAdd} className="btn btn-outline w-full"><Plus size={16}/> Tambah Sertifikasi</button>
        </div>
      ) : (
        <div className="glass-card p-4">
          <div className="form-group"><label>Nama Sertifikasi</label><input value={current.name} onChange={e => setCurrent({...current, name: e.target.value})} placeholder="Contoh: AWS Certified" /></div>
          <div className="form-group"><label>Penerbit</label><input value={current.issuer} onChange={e => setCurrent({...current, issuer: e.target.value})} placeholder="Contoh: Amazon" /></div>
          <div className="form-group"><label>Tahun</label><input value={current.year} onChange={e => setCurrent({...current, year: e.target.value})} placeholder="2024" /></div>
          <div className="flex gap-2 mt-4" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={handleSave} className="btn btn-primary">Simpan</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Batal</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step6Certifications;

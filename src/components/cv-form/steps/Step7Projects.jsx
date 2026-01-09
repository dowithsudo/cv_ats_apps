import React, { useState } from 'react';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const Step7Projects = ({ data, updateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [current, setCurrent] = useState(null);

  const handleAdd = () => {
    setCurrent({ id: generateId(), name: '', description: '', technologies: '' });
    setIsEditing(true);
  };

  const handleSave = () => {
    const list = [...data.projects];
    const index = list.findIndex(i => i.id === current.id);
    if (index > -1) list[index] = current;
    else list.push(current);
    updateData({ projects: list });
    setIsEditing(false);
  };

  const handleDelete = (id) => updateData({ projects: data.projects.filter(i => i.id !== id) });

  return (
    <div className="step-container">
      <h2 className="step-title">Proyek</h2>
      
      {!isEditing ? (
        <div className="items-list">
          {data.projects.map(item => (
            <div key={item.id} className="item-card glass-card" style={{ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
             <div><h4>{item.name}</h4><small>{item.technologies}</small></div>
             <div>
               <button onClick={() => { setCurrent(item); setIsEditing(true); }} className="btn-icon"><Edit2 size={16}/></button>
               <button onClick={() => handleDelete(item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
             </div>
            </div>
          ))}
          <button onClick={handleAdd} className="btn btn-outline w-full"><Plus size={16}/> Tambah Proyek</button>
        </div>
      ) : (
        <div className="glass-card p-4">
          <div className="form-group"><label>Nama Proyek</label><input value={current.name} onChange={e => setCurrent({...current, name: e.target.value})} placeholder="Contoh: Aplikasi Toko Online" /></div>
          <div className="form-group"><label>Deskripsi</label><textarea value={current.description} onChange={e => setCurrent({...current, description: e.target.value})} placeholder="Menjelaskan fitur dan tanggung jawab..." /></div>
          <div className="form-group"><label>Teknologi (Pisahkan dengan koma)</label><input value={current.technologies} onChange={e => setCurrent({...current, technologies: e.target.value})} placeholder="React, Node.js, MongoDB" /></div>
          <div className="flex gap-2 mt-4" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={handleSave} className="btn btn-primary">Simpan</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Batal</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step7Projects;

import React, { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const Step8Languages = ({ data, updateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [current, setCurrent] = useState(null);



  const handleAdd = () => {
    setCurrent({ id: generateId(), language: '', level: 'Intermediate' });
    setIsEditing(true);
  };

  const handleSave = () => {
    const list = [...data.languages];
    const index = list.findIndex(i => i.id === current.id);
    if (index > -1) list[index] = current;
    else list.push(current);
    updateData({ languages: list });
    setIsEditing(false);
  };

  const handleDelete = (id) => updateData({ languages: data.languages.filter(i => i.id !== id) });

  return (
    <div className="step-container">
      <h2 className="step-title">Bahasa</h2>
      
      {!isEditing ? (
        <div className="items-list">
          {data.languages.map(item => (
            <div key={item.id} className="item-card glass-card" style={{ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
             <div><h4>{item.language}</h4><small>{item.level}</small></div>
             <div>
               <button onClick={() => { setCurrent(item); setIsEditing(true); }} className="btn-icon"><Edit2 size={16}/></button>
               <button onClick={() => handleDelete(item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
             </div>
            </div>
          ))}
          <button onClick={handleAdd} className="btn btn-outline w-full"><Plus size={16}/> Tambah Bahasa</button>
        </div>
      ) : (
        <div className="glass-card p-4">
          <div className="form-group"><label>Bahasa</label><input value={current.language} onChange={e => setCurrent({...current, language: e.target.value})} placeholder="Indonesian" /></div>
          <div className="form-group"><label>Tingkat</label>
            <select value={current.level} onChange={e => setCurrent({...current, level: e.target.value})}>
              <option value="Basic">Basic (Dasar)</option>
              <option value="Intermediate">Intermediate (Menengah)</option>
              <option value="Fluent">Fluent (Lancar)</option>
              <option value="Native">Native (Penutur Asli)</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={handleSave} className="btn btn-primary">Simpan</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Batal</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step8Languages;

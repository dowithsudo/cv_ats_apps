import React, { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { generateId } from '../../../utils/initialData';

const SectionHeader = ({ title }) => <h3 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>{title}</h3>;

const Step9Optional = ({ data, updateData }) => {
  const [editingType, setEditingType] = useState(null); // 'awards', 'volunteer', 'publications'
  const [current, setCurrent] = useState(null);

  const handleAdd = (type) => {
    const fresh = { id: generateId() };
    if (type === 'awards') Object.assign(fresh, { title: '', issuer: '', year: '' });
    if (type === 'volunteer') Object.assign(fresh, { role: '', organization: '', year: '', description: '' });
    if (type === 'publications') Object.assign(fresh, { title: '', publisher: '', year: '', url: '' });
    
    setCurrent(fresh);
    setEditingType(type);
  };

  const handleSave = () => {
    const list = [...data[editingType]]; // awards, volunteer, or publications
    const index = list.findIndex(i => i.id === current.id);
    if (index > -1) list[index] = current;
    else list.push(current);
    
    updateData({ [editingType]: list });
    setEditingType(null);
    setCurrent(null);
  };

  const handleDelete = (type, id) => {
    updateData({ [type]: data[type].filter(i => i.id !== id) });
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Bagian Tambahan (Opsional)</h2>
      <p className="step-desc">Tambahkan penghargaan, pengalaman sukarelawan, atau publikasi.</p>

      {/* Awards */}
      <SectionHeader title="Penghargaan (Awards)" />
      <div className="items-list">
        {data.awards.map(item => (
          <div key={item.id} className="item-card glass-card" style={{ padding: '0.8rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <div><strong>{item.title}</strong> — {item.issuer} ({item.year})</div>
            <div>
              <button onClick={() => { setCurrent(item); setEditingType('awards'); }} className="btn-icon"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete('awards', item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
        {!editingType && <button onClick={() => handleAdd('awards')} className="btn btn-outline btn-sm"><Plus size={14}/> Tambah Penghargaan</button>}
      </div>

      {/* Volunteer */}
      <SectionHeader title="Pengalaman Sukarelawan" />
      <div className="items-list">
        {data.volunteer.map(item => (
          <div key={item.id} className="item-card glass-card" style={{ padding: '0.8rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
             <div><strong>{item.role}</strong> di {item.organization}</div>
             <div>
              <button onClick={() => { setCurrent(item); setEditingType('volunteer'); }} className="btn-icon"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete('volunteer', item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
        {!editingType && <button onClick={() => handleAdd('volunteer')} className="btn btn-outline btn-sm"><Plus size={14}/> Tambah Sukarelawan</button>}
      </div>

      {/* Publications */}
      <SectionHeader title="Publikasi" />
      <div className="items-list">
        {data.publications.map(item => (
          <div key={item.id} className="item-card glass-card" style={{ padding: '0.8rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
             <div><strong>{item.title}</strong> ({item.year})</div>
             <div>
              <button onClick={() => { setCurrent(item); setEditingType('publications'); }} className="btn-icon"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete('publications', item.id)} className="btn-icon text-red-500"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
        {!editingType && <button onClick={() => handleAdd('publications')} className="btn btn-outline btn-sm"><Plus size={14}/> Tambah Publikasi</button>}
      </div>

      {/* Modal / Form Overlay */}
      {editingType && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-card" style={{ width: '90%', maxWidth: '500px', padding: '2rem' }}>
            <h3>{current.id && data[editingType].find(i=>i.id===current.id) ? 'Edit Item' : 'Item Baru'}</h3>
            
            {editingType === 'awards' && (
              <>
                <div className="form-group"><label>Judul Penghargaan</label><input value={current.title} onChange={e=>setCurrent({...current, title:e.target.value})} placeholder="Contoh: Juara 1 Hackathon" /></div>
                <div className="form-group"><label>Pemberi / Organisasi</label><input value={current.issuer} onChange={e=>setCurrent({...current, issuer:e.target.value})} placeholder="Contoh: Google" /></div>
                <div className="form-group"><label>Tahun</label><input value={current.year} onChange={e=>setCurrent({...current, year:e.target.value})} placeholder="2024" /></div>
              </>
            )}

            {editingType === 'volunteer' && (
              <>
                <div className="form-group"><label>Peran / Posisi</label><input value={current.role} onChange={e=>setCurrent({...current, role:e.target.value})} placeholder="Relawan" /></div>
                <div className="form-group"><label>Organisasi</label><input value={current.organization} onChange={e=>setCurrent({...current, organization:e.target.value})} placeholder="Palang Merah" /></div>
                <div className="form-group"><label>Tahun</label><input value={current.year} onChange={e=>setCurrent({...current, year:e.target.value})} placeholder="2023 - 2024" /></div>
                <div className="form-group"><label>Deskripsi</label><textarea value={current.description} onChange={e=>setCurrent({...current, description:e.target.value})} /></div>
              </>
            )}

            {editingType === 'publications' && (
              <>
                <div className="form-group"><label>Judul Publikasi</label><input value={current.title} onChange={e=>setCurrent({...current, title:e.target.value})} /></div>
                <div className="form-group"><label>Penerbit</label><input value={current.publisher} onChange={e=>setCurrent({...current, publisher:e.target.value})} /></div>
                <div className="form-group"><label>Tahun</label><input value={current.year} onChange={e=>setCurrent({...current, year:e.target.value})} /></div>
                <div className="form-group"><label>URL / Link</label><input value={current.url} onChange={e=>setCurrent({...current, url:e.target.value})} /></div>
              </>
            )}

            <div className="flex gap-2 mt-4" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button onClick={handleSave} className="btn btn-primary">Simpan</button>
              <button onClick={() => setEditingType(null)} className="btn btn-secondary">Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Step9Optional;

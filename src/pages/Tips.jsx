import React from 'react';
import './Tips.css';

const Tips = () => {
  return (
    <div className="tips-container">
      <header className="tips-header">
        <h1>Cara Membuat CV ATS yang Profesional</h1>
        <p className="subtitle">
          Panduan lengkap membuat CV yang lolos screening sistem
        </p>
      </header>

      <article className="tips-content glass-card">
        <section>
          <p>
            Banyak CV gugur bukan karena kandidat tidak kompeten, tetapi karena CV tidak terbaca dengan baik oleh sistem <strong>ATS (Applicant Tracking System)</strong>. 
            ATS menyaring CV berdasarkan <strong>struktur teks dan keyword</strong> sebelum dibaca HR.
          </p>
          <p>
            Dengan aplikasi CV ATS dari <strong>dowithsudo.com</strong>, user tidak perlu pusing soal format dan layout karena desain sudah otomatis disesuaikan agar <strong>aman untuk ATS</strong>. 
            Fokus utama user cukup pada <strong>isi CV yang benar dan relevan</strong>.
          </p>
          <p>Artikel ini membahas:</p>
          <ul>
            <li>Cara menulis isi CV yang profesional</li>
            <li>Tips agar lolos screening ATS</li>
            <li>Keunggulan design aplikasi CV ATS dowithsudo.com</li>
          </ul>
        </section>

        <section>
          <h2>1. Gunakan Struktur CV yang Standar</h2>
          <p>ATS bekerja lebih baik dengan struktur yang konsisten. Urutan section yang direkomendasikan:</p>
          <ol>
            <li>Personal Information</li>
            <li>Professional Summary</li>
            <li>Work Experience</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Certifications (jika ada)</li>
            <li>Projects (jika ada)</li>
          </ol>
          <p>Aplikasi akan otomatis menyusun urutan ini, sehingga user tidak perlu mengatur layout manual.</p>
        </section>

        <section>
          <h2>2. Tulis Professional Summary dengan Tepat</h2>
          <p>Summary adalah ringkasan singkat tentang siapa Anda secara profesional. Isi yang ideal meliputi:</p>
          <ul>
            <li>Posisi / role</li>
            <li>Lama pengalaman</li>
            <li>Skill utama</li>
          </ul>
          <div className="example-box">
            <strong>Contoh:</strong>
            <p>IT Support dengan 10+ tahun pengalaman dalam troubleshooting jaringan dan server. Berpengalaman menggunakan Windows Server, Mikrotik, dan Active Directory.</p>
          </div>
          <p>Summary yang jelas membantu ATS dan HR langsung memahami profil kandidat.</p>
        </section>

        <section>
          <h2>3. Gunakan Keyword dari Lowongan Kerja</h2>
          <p>ATS melakukan pencocokan kata (keyword matching). Langkah yang disarankan:</p>
          <ol>
            <li>Baca deskripsi lowongan</li>
            <li>Catat skill, tools, dan teknologi yang disebutkan</li>
            <li>Masukkan keyword tersebut ke Summary, Work Experience, dan Skills</li>
          </ol>
          <div className="example-box">
            <strong>Contoh:</strong>
            <p>Jika lowongan menyebut: Active Directory, Windows Server, Troubleshooting.</p>
            <p>Maka kata-kata tersebut sebaiknya muncul di CV secara natural.</p>
          </div>
          <p><em>Jangan menulis skill yang tidak dikuasai hanya demi keyword.</em></p>
        </section>

        <section>
          <h2>4. Tulis Pengalaman Kerja dengan Kalimat Aktif</h2>
          <p>Gunakan pola: <strong>Action + Object + Result (jika ada)</strong></p>
          <div className="example-box">
            <strong>Contoh:</strong>
            <ul>
              <li>Managed 50+ user accounts using Active Directory</li>
              <li>Configured VLAN and firewall rules on Mikrotik routers</li>
              <li>Reduced ticket resolution time by 30%</li>
            </ul>
          </div>
          <p>Ini lebih kuat dibanding: <em>Responsible for IT support tasks</em>. Kalimat aktif meningkatkan kualitas CV di mata HR dan ATS.</p>
        </section>

        <section>
          <h2>5. Gunakan Bullet Point, Bukan Paragraf Panjang</h2>
          <p>Untuk setiap posisi kerja gunakan 3–6 bullet point. Fokus pada tugas utama dan hasil.</p>
          <ul>
            <li>Mudah dibaca HR</li>
            <li>Mudah diproses ATS</li>
          </ul>
          <p>Paragraf panjang sering dilewati saat screening cepat.</p>
        </section>

        <section>
          <h2>6. Skills Harus dalam Bentuk List</h2>
          <p>Skills sebaiknya ditulis sebagai daftar, bukan cerita.</p>
          <p>ATS lebih akurat membaca list skill dibanding kalimat panjang.</p>
        </section>

        <section>
          <h2>7. Sertifikasi Sangat Membantu Skor ATS</h2>
          <p>Jika memiliki sertifikasi, selalu masukkan. Banyak perusahaan menggunakan sertifikasi sebagai filter awal di ATS.</p>
        </section>

        <section>
          <h2>8. Simpan CV dalam Format yang Bisa Dibaca Mesin</h2>
          <p>Format aman: PDF berbasis teks atau DOCX. Hindari PDF hasil scan atau file gambar.</p>
          <p>Aplikasi akan menghasilkan file yang tetap berbentuk teks, bukan gambar.</p>
        </section>

        <hr className="divider" />

        <section className="highlight-section">
          <h1>Keunggulan Design Aplikasi CV ATS dowithsudo.com</h1>
          <p>Aplikasi ini dirancang khusus agar user <strong>tidak perlu memikirkan aspek teknis ATS</strong>.</p>

          <div className="feature-item">
            <h3>1. Layout Otomatis ATS-Safe</h3>
            <p>User hanya mengisi form, aplikasi akan menyusun satu kolom, menempatkan section di urutan yang benar, dan menghindari struktur yang sulit dibaca ATS (seperti tabel atau multi-column).</p>
          </div>

          <div className="feature-item">
            <h3>2. Struktur Field Sudah Disesuaikan dengan ATS</h3>
            <p>Field yang tersedia mengikuti standar internasional: Experience terstruktur, Skill dalam bentuk list, Bullet point untuk deskripsi kerja.</p>
          </div>

          <div className="feature-item">
            <h3>3. Validasi Input Agar CV Tetap Profesional</h3>
            <p>Aplikasi dapat membatasi input agar CV tidak kosong dan konten tetap berkualitas.</p>
          </div>

          <div className="feature-item">
            <h3>4. Output File Siap Kirim ke Rekruter</h3>
            <p>File yang dihasilkan bisa dibaca ATS dan HR tanpa layout rusak. User cukup: <strong>Isi data → Generate CV → Kirim lamaran</strong>.</p>
          </div>
          
          <div className="feature-item">
            <h3>5. Fokus User Hanya ke Konten, Bukan Design</h3>
            <p>User tidak perlu mengatur margin, memilih font, atau mengatur layout. Semua aspek teknis CV ATS sudah di-handle oleh sistem.</p>
          </div>
        </section>

        <section className="conclusion">
          <h2>Kesimpulan</h2>
          <p>
            CV ATS yang baik ditentukan oleh struktur yang benar, keyword yang relevan, dan deskripsi pengalaman yang jelas.
            Dengan aplikasi CV ATS dari <strong>dowithsudo.com</strong>, user bisa langsung fokus ke isi CV tanpa khawatir soal format dan kompatibilitas ATS.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Tips;

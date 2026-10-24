'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── COMPLETE BILINGUAL TRANSLATION DICTIONARY FOR FAREL RAYHAN SAPUTRA ───
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': 'TENTANG SAYA',
    'nav.education': 'PENDIDIKAN',
    'nav.work': 'MAGANG',
    'nav.org': 'PUBLIKASI',
    'nav.awards': 'SERTIFIKASI',
    'nav.skills': 'KEAHLIAN',
    'nav.contact': 'HUBUNGI SAYA',

    // ── Hero
    'hero.scroll': 'GULIR KE BAWAH',
    'hero.badge.major': 'S1 Hukum — UII Yogyakarta',
    'hero.badge.medal': 'IPK 3.62 / 4.00',
    'hero.badge.event': 'Legal Intern — BI & Kejaksaan',

    // ── About Section
    'about.label': 'TENTANG SAYA',
    'about.title': 'Sarjana Hukum. Analitis. Berorientasi Dokumen.',
    'about.ipk': 'IPK Sarjana',
    'about.toefl': 'Pengalaman Magang',
    'about.year': 'Publikasi Ilmiah',
    'about.bio1': 'Lulusan S1 Hukum Universitas Islam Indonesia (IPK 3.62/4.00) dengan pengalaman magang di Bank Indonesia dan dua Kejaksaan Negeri (Sleman & Banjarnegara). Memiliki kompetensi dalam legal research, penelaahan berkas perkara, penyusunan surat dakwaan & tuntutan, administrasi perkara, validasi data hukum, dan keadilan restoratif. Terbuka untuk peluang karir di bidang Hukum, Kepatuhan (Compliance), Administrasi, Perbankan, dan Operasional.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Legal Research',
    'about.current.1.sub': 'Analisis Hukum & Penelaahan Berkas',
    'about.current.2.title': 'Administrasi Perkara',
    'about.current.2.sub': 'Dakwaan, Tuntutan & Pengarsipan',
    'about.current.3.title': 'Kepatuhan & Data',
    'about.current.3.sub': 'Validasi Data, LIMS & Entry Data',

    // ── Trait Deck
    'trait.card.label': 'KARAKTER KERJA',
    'trait.change': 'Ganti',
    'trait.hint': 'Klik untuk melihat karakter kerja lainnya',
    'trait.1.title': 'Teliti',
    'trait.1.sub': 'Presisi & Zero Error',
    'trait.1.tag': 'Akurasi Dokumen',
    'trait.1.desc': 'Memastikan ketelitian tinggi dalam penelaahan berkas perkara, penyusunan surat dakwaan & tuntutan, serta verifikasi dan validasi dokumen hukum.',
    'trait.2.title': 'Analitis',
    'trait.2.sub': 'Legal Analysis',
    'trait.2.tag': 'Riset Hukum',
    'trait.2.desc': 'Mampu menganalisis ketentuan hukum secara mendalam, melakukan legal research berbasis regulasi, dan menyusun argumen hukum yang terstruktur.',
    'trait.3.title': 'Kolaboratif',
    'trait.3.sub': 'Tim & Koordinasi',
    'trait.3.tag': 'Kerja Tim Lintas Fungsi',
    'trait.3.desc': 'Berpengalaman berkolaborasi dengan jaksa, staf hukum, dan tim perbankan dalam lingkungan kerja profesional yang dinamis.',
    'trait.4.title': 'Adaptif',
    'trait.4.sub': 'Multi-Lembaga',
    'trait.4.tag': 'Cepat Tanggap',
    'trait.4.desc': 'Berpengalaman di berbagai lembaga hukum: Kejaksaan Negeri (pidana umum, tipidsus, datun) dan Bank Indonesia (regulasi perbankan & hukum).',

    // ── Quote
    'about.quote': '"Mengutamakan integritas, ketelitian analisis hukum, dan kontribusi nyata dalam administrasi keadilan."',

    // ── Metrics
    'metric.ipk': 'IPK SARJANA',
    'metric.ipk.sub': 'Universitas Islam Indonesia (3.62 / 4.00)',
    'metric.medal': 'PENGALAMAN MAGANG',
    'metric.medal.sub': 'Bank Indonesia, Kejari Sleman, Kejari Banjarnegara',
    'metric.org': 'PUBLIKASI ILMIAH',
    'metric.org.sub': 'Artikel Hukum Perlindungan Debitur (2026)',
    'metric.toefl': 'UNIVERSITAS',
    'metric.toefl.sub': 'Universitas Islam Indonesia — Sleman, Yogyakarta',

    // ── Education Section
    'education.label': 'RIWAYAT AKADEMIK',
    'education.title': 'Pendidikan',
    'education.degreeLabel': 'Gelar',
    'education.highlights.label': 'Kompetensi & Aktivitas Utama',

    'education.1.institution': 'Universitas Islam Indonesia',
    'education.1.program': 'S1 Ilmu Hukum',
    'education.1.degree': 'Sarjana Hukum (S.H.)',
    'education.1.period': '2022 — 2026',
    'education.1.gpa': '3.62 / 4.00',
    'education.1.status': 'Lulus',
    'education.1.desc': 'Menempuh studi S1 Ilmu Hukum di Universitas Islam Indonesia (UII) Sleman, Yogyakarta dengan IPK 3.62/4.00. Selama studi aktif mengikuti magang di tiga lembaga hukum bergengsi (Bank Indonesia, Kejaksaan Negeri Sleman, dan Kejaksaan Negeri Banjarnegara), serta menghasilkan artikel ilmiah hukum yang dipublikasikan.',
    'education.1.tag': 'Pendidikan Sarjana',
    'education.1.caption': 'Wisuda Sarjana Hukum — Universitas Islam Indonesia',
    'education.1.h1': 'Magang di Bank Indonesia (Dept. Hukum, Divisi DPHPIH) — review regulasi, Glossarium Kumham, validasi metadata LIMS',
    'education.1.h2': 'Magang di Kejaksaan Negeri Sleman (Tipidnum, Datun & Tipidsus) — penelaahan berkas, dakwaan, tuntutan, keadilan restoratif',
    'education.1.h3': 'Magang di Kejaksaan Negeri Banjarnegara (Tipidnum) — membantu JPU, persiapan berkas persidangan, pengarsipan',
    'education.1.h4': 'Publikasi artikel ilmiah: "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy" (2026)',

    // ── Work Section
    'work.label': 'PENGALAMAN MAGANG',
    'work.title': 'Pengalaman Magang & Praktik Hukum',
    'work.subtitle': 'Pengalaman magang di lembaga hukum nasional: Bank Indonesia (Departemen Hukum), Kejaksaan Negeri Sleman, dan Kejaksaan Negeri Banjarnegara.',
    'work.cta': 'Lihat Semua Pengalaman',

    'work.1.role': 'Legal Intern — Seksi Tipidnum, Datun & Tipidsus',
    'work.1.inst': 'KEJAKSAAN NEGERI SLEMAN',
    'work.1.loc': 'Sleman, DI Yogyakarta',
    'work.1.period': 'November 2025 — Januari 2026',
    'work.1.sub': 'Hukum Pidana Umum, Tata Usaha Negara & Pidana Khusus',
    'work.1.desc': 'Melaksanakan penelaahan berkas perkara secara mendalam serta membantu penyusunan Surat Dakwaan dan Surat Tuntutan. Berpartisipasi aktif dalam kegiatan Forum Konsultasi Publik dan penyelesaian perkara melalui mekanisme keadilan restoratif. Mempelajari dan menganalisis penerapan Pasal 55 KUHP dalam konteks penyertaan tindak pidana, serta mendukung administrasi perkara di Seksi Tipidnum, Datun, dan Tipidsus.',

    'work.2.role': 'Legal Intern — Departemen Hukum, Divisi DPHPIH',
    'work.2.inst': 'BANK INDONESIA',
    'work.2.loc': 'Jakarta Pusat, DKI Jakarta',
    'work.2.period': 'Februari 2025',
    'work.2.sub': 'Regulasi Perbankan, Validasi Data & Administrasi Hukum',
    'work.2.desc': 'Melakukan review dan telaah terjemahan PADG No.14/2024 untuk memastikan kesesuaian substansi hukum. Berkontribusi dalam penyusunan Glossarium Kumham sebagai referensi terminologi hukum. Mengelola metadata dokumen pada sistem LIMS dan menginput data sistem Sarah untuk kebutuhan validasi internal. Berpartisipasi aktif sebagai delegasi dalam Pameran Kampung Hukum di Mahkamah Agung Republik Indonesia (18–19 Februari 2025), mewakili Departemen Hukum Bank Indonesia.',

    'work.3.role': 'Legal Intern — Seksi Tindak Pidana Umum',
    'work.3.inst': 'KEJAKSAAN NEGERI BANJARNEGARA',
    'work.3.loc': 'Banjarnegara, Jawa Tengah',
    'work.3.period': 'Agustus 2024',
    'work.3.sub': 'Hukum Pidana Umum & Administrasi Persidangan',
    'work.3.desc': 'Membantu Jaksa Penuntut Umum (JPU) dalam persiapan berkas perkara dan pelaksanaan persidangan di Pengadilan Negeri Banjarnegara. Melakukan pengarsipan dan pengelolaan dokumen perkara secara sistematis sesuai prosedur administrasi Kejaksaan. Mempelajari alur penanganan perkara pidana umum mulai dari tahap pra-penuntutan hingga eksekusi putusan.',

    // ── Organizations / Research Section (reused as Publications)
    'trainings.label': 'PUBLIKASI & PENCAPAIAN AKADEMIK',
    'trainings.title': 'Artikel Ilmiah & Pencapaian',
    'trainings.campus': 'UNIVERSITAS ISLAM INDONESIA',

    'org.1.role': 'Penulis Artikel Ilmiah Hukum',
    'org.1.inst': 'Fakultas Hukum — Universitas Islam Indonesia',
    'org.1.period': '2026',
    'org.1.loc': 'Sleman, DI Yogyakarta',
    'org.1.desc': 'Menulis dan mempublikasikan artikel ilmiah berjudul "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy in Housing Credit Agreements" — mengkaji perlindungan hukum bagi debitur beritikad baik dalam perjanjian kredit pemilikan rumah ketika pengembang mengalami kepailitan, dengan analisis normatif berdasarkan KUHPerdata dan hukum kepailitan Indonesia.',

    'org.2.role': 'Peserta Aktif Program Magang Tiga Lembaga',
    'org.2.inst': 'Bank Indonesia & Kejaksaan Negeri',
    'org.2.period': '2024 — 2026',
    'org.2.loc': 'Jakarta, Sleman & Banjarnegara',
    'org.2.desc': 'Menyelesaikan program magang di tiga lembaga hukum prestisius secara berurutan: Kejaksaan Negeri Banjarnegara (2024), Bank Indonesia Departemen Hukum (2025), dan Kejaksaan Negeri Sleman (2025–2026). Memperoleh sertifikat penghargaan dari setiap lembaga atas kontribusi dan dedikasi selama program magang.',

    // ── Awards Section
    'awards.label': 'SERTIFIKAT & PENGHARGAAN',
    'awards.title': 'Sertifikasi & Penghargaan',
    'awards.sub': 'Sertifikat resmi dari lembaga hukum, perbankan, dan institusi akademik atas partisipasi dan kontribusi dalam program magang dan kegiatan hukum.',
    'awards.openDoc': 'Buka Sertifikat',
    'awards.issuer': 'Penerbit',
    'awards.viewOriginal': 'Lihat Dokumen Asli →',

    'award.1.title': 'Sertifikat Magang Mahasiswa',
    'award.1.issuer': 'Kejaksaan Negeri Sleman',
    'award.1.cat': 'SERTIFIKAT MAGANG',
    'award.1.desc': 'Sertifikat atas keikutsertaan dalam kegiatan Magang Mahasiswa Periode Tahun 2025 di Kejaksaan Negeri Sleman, yang dilaksanakan pada 17 November 2025 sampai dengan 02 Januari 2026.',

    'award.2.title': 'Surat Keterangan Selesai Magang',
    'award.2.issuer': 'Bank Indonesia — Divisi Rekrutmen dan Kepatuhan SDM',
    'award.2.cat': 'KETERANGAN MAGANG',
    'award.2.desc': 'Surat keterangan resmi dari Bank Indonesia (No.27/251/DSDM-GOps-RKS/Srt/B) yang menyatakan Farel Rayhan Saputra telah melaksanakan kegiatan magang di Kantor Pusat Bank Indonesia, Departemen Hukum, periode 3 Februari 2025 s.d 28 Februari 2025.',

    'award.3.title': 'Sertifikat Peserta Pameran Kampung Hukum',
    'award.3.issuer': 'Mahkamah Agung Republik Indonesia',
    'award.3.cat': 'SERTIFIKAT PARTISIPASI',
    'award.3.desc': 'Sertifikat dari Mahkamah Agung Republik Indonesia atas peran serta sebagai Peserta pada Pameran Kampung Hukum Mahkamah Agung RI, tanggal 18–19 Februari 2025. Ditandatangani oleh Kepala Biro Hukum dan Humas Mahkamah Agung.',

    'award.4.title': 'Sertifikat Webinar Nasional Capacity Building',
    'award.4.issuer': 'Pusat Studi Pasar Modal & Hukum Keuangan FH UII',
    'award.4.cat': 'SERTIFIKAT PENGHARGAAN',
    'award.4.desc': 'Sertifikat Penghargaan sebagai Peserta Webinar Nasional Capacity Building: Peluang Karir Lulusan Fakultas Hukum di BUMN, yang diselenggarakan oleh PSPMHK Fakultas Hukum UII pada 3 Mei 2025.',

    'award.5.title': 'Sertifikat Magang Mahasiswa',
    'award.5.issuer': 'Kejaksaan Negeri Banjarnegara',
    'award.5.cat': 'SERTIFIKAT MAGANG',
    'award.5.desc': 'Sertifikat dan ucapan terima kasih dari Kejaksaan Negeri Banjarnegara atas pelaksanaan Program Magang Mahasiswa dari tanggal 05 Agustus 2024 s.d 22 Agustus 2024. Ditandatangani oleh PLH Kepala Kejaksaan Negeri Banjarnegara.',

    // ── Skills Section
    'skills.label': 'KOMPETENSI HUKUM & TEKNIS',
    'skills.title': 'Kemampuan Teknis',
    'skills.desc': 'Menggabungkan keahlian hukum pidana & perdata, administrasi lembaga penegak hukum, serta kemampuan riset dan validasi data hukum berdasarkan pengalaman nyata di BI dan Kejaksaan Negeri.',
    'skills.card1.tag': 'LEGAL SKILLS',
    'skills.card1.sub': 'Hukum & Analisis Yuridis',
    'skills.card1.desc': 'Legal research berbasis regulasi, analisis hukum pidana & perdata, penelaahan berkas perkara, penyusunan Surat Dakwaan & Surat Tuntutan, legal drafting dasar, administrasi perkara, keadilan restoratif, analisis Pasal 55 KUHP, review & telaah regulasi (PADG), serta pemahaman hukum kepailitan dan perlindungan konsumen.',
    'skills.card2.tag': 'ADMINISTRATIVE SKILLS',
    'skills.card2.sub': 'Administrasi & Pengelolaan Dokumen',
    'skills.card2.desc': 'Pengelolaan dan pengarsipan dokumen hukum secara sistematis, entry data dan validasi metadata pada sistem LIMS, penyusunan Glossarium Kumham, administrasi persidangan, verifikasi dokumen pesanan, serta pelaporan dan dokumentasi administratif sesuai prosedur lembaga.',
    'skills.card3.tag': 'ANALYTICAL SKILLS',
    'skills.card3.sub': 'Riset & Pemikiran Kritis',
    'skills.card3.desc': 'Penulisan artikel ilmiah hukum, analisis normatif yuridis, pemikiran kritis dalam pemecahan masalah hukum, riset kepustakaan mendalam, penyusunan argumen hukum terstruktur, serta kemampuan komunikasi dan presentasi dalam forum konsultasi publik.',

    // ── Personal Skills Section
    'personal.label': 'KEMAMPUAN PERSONAL & SOFTWARE',
    'personal.title': 'Karakter & Software Kerja',
    'personal.sub': 'Karakter personal pendukung kinerja profesional di bidang hukum serta penguasaan perangkat lunak untuk administrasi, riset, dan presentasi dokumen hukum.',
    'personal.soft.label': 'SOFT SKILLS',
    'personal.soft.title': 'Kemampuan Personal',
    'personal.hard.label': 'SOFTWARE TOOLS',
    'personal.hard.title': 'Kemampuan Software',
    'personal.orientation': 'Karakter Profesional:',
    'personal.quality': 'Integritas & Ketelitian Analisis Hukum',
    'personal.app': 'Aplikasi Kerja:',
    'personal.ready': 'Ms. Word, Excel, PowerPoint, Canva, Google Workspace',

    'personal.soft.1.t': 'Teliti & Bertanggung Jawab',
    'personal.soft.1.d': 'Komitmen tinggi terhadap keakuratan dokumen hukum, administrasi perkara, dan ketepatan analisis regulasi.',
    'personal.soft.2.t': 'Komunikatif',
    'personal.soft.2.d': 'Mampu menyampaikan analisis dan pendapat hukum secara jelas, baik secara lisan maupun tertulis dalam konteks profesional.',
    'personal.soft.3.t': 'Kerja Tim',
    'personal.soft.3.d': 'Terbiasa bekerja sama dalam tim lintas fungsi di lingkungan Kejaksaan, perbankan, dan akademik.',
    'personal.soft.4.t': 'Adaptif & Cepat Belajar',
    'personal.soft.4.d': 'Cepat memahami regulasi baru, sistem kerja lembaga, dan prosedur administrasi yang berbeda di setiap instansi magang.',
    'personal.soft.5.t': 'Berpikir Kritis',
    'personal.soft.5.d': 'Mampu mengidentifikasi permasalahan hukum, menganalisis akar masalah, dan menyusun solusi berdasarkan regulasi yang berlaku.',
    'personal.soft.6.t': 'Cekatan & Proaktif',
    'personal.soft.6.d': 'Sigap dalam menyelesaikan tugas administrasi dan mendukung kegiatan operasional tim secara mandiri dan inisiatif.',

    // ── Contact Section
    'contact.label': 'KONTAK',
    'contact.title': 'Hubungi Saya',
    'contact.tagline': 'Sarjana Hukum — Siap Berkontribusi di Bidang Hukum, Kepatuhan & Administrasi',
    'contact.subtitle': 'Terbuka untuk peluang karir di bidang Hukum, Legal, Compliance, Perbankan, Pemerintahan, dan Administrasi Umum.',
    'contact.chatNow': 'Hubungi Sekarang',
    'contact.direct': 'Saluran Komunikasi Langsung',
    'contact.directSub': 'Hubungi melalui kontak berikut:',
    'contact.openHours': 'Jam Respons:',
    'contact.openVal': 'Senin — Sabtu (08.00 — 17.00 WIB)',
    'contact.location': 'LOKASI',
    'contact.phone': 'TELEPON / WHATSAPP',
  },

  en: {
    // ── Navbar
    'nav.about': 'ABOUT ME',
    'nav.education': 'EDUCATION',
    'nav.work': 'INTERNSHIP',
    'nav.org': 'PUBLICATION',
    'nav.awards': 'CERTIFICATIONS',
    'nav.skills': 'COMPETENCIES',
    'nav.contact': 'CONTACT ME',

    // ── Hero
    'hero.scroll': 'SCROLL DOWN',
    'hero.badge.major': 'Bachelor of Law — UII Yogyakarta',
    'hero.badge.medal': 'GPA 3.62 / 4.00',
    'hero.badge.event': 'Legal Intern — BI & Kejaksaan',

    // ── About Section
    'about.label': 'ABOUT ME',
    'about.title': 'Law Graduate. Analytical. Document-Driven.',
    'about.ipk': 'Bachelor GPA',
    'about.toefl': 'Internship Experiences',
    'about.year': 'Scientific Publication',
    'about.bio1': 'Bachelor of Law graduate from Universitas Islam Indonesia (GPA 3.62/4.00) with internship experience at Bank Indonesia and two District Prosecutors\' Offices (Kejari Sleman & Kejari Banjarnegara). Competent in legal research, case file review, indictment drafting, case administration, legal data validation, and restorative justice. Open to career opportunities in Law, Compliance, Administration, Banking, and Operations.',
    'about.cv.prompt': 'Want to learn more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Legal Research',
    'about.current.1.sub': 'Legal Analysis & Case File Review',
    'about.current.2.title': 'Case Administration',
    'about.current.2.sub': 'Indictments, Demands & Filing',
    'about.current.3.title': 'Compliance & Data',
    'about.current.3.sub': 'Data Validation, LIMS & Entry',

    // ── Trait Deck
    'trait.card.label': 'WORK TRAITS',
    'trait.change': 'Switch',
    'trait.hint': 'Click to view more work traits',
    'trait.1.title': 'Meticulous',
    'trait.1.sub': 'Precision & Zero Error',
    'trait.1.tag': 'Document Accuracy',
    'trait.1.desc': 'Ensuring high precision in case file review, drafting indictments and charges, and verifying legal documents to the highest standard.',
    'trait.2.title': 'Analytical',
    'trait.2.sub': 'Legal Analysis',
    'trait.2.tag': 'Legal Research',
    'trait.2.desc': 'Able to deeply analyze legal provisions, conduct regulation-based legal research, and construct well-structured legal arguments.',
    'trait.3.title': 'Collaborative',
    'trait.3.sub': 'Team & Coordination',
    'trait.3.tag': 'Cross-Functional Teams',
    'trait.3.desc': 'Experienced collaborating with prosecutors, legal staff, and banking teams in dynamic professional environments.',
    'trait.4.title': 'Adaptive',
    'trait.4.sub': 'Multi-Institution',
    'trait.4.tag': 'Quick Responder',
    'trait.4.desc': 'Experienced across legal institutions: District Prosecutors\' Offices (criminal, special crimes, state administration) and Bank Indonesia (banking regulation & law).',

    // ── Quote
    'about.quote': '"Upholding integrity, analytical precision, and meaningful contribution to the administration of justice."',

    // ── Metrics
    'metric.ipk': 'BACHELOR GPA',
    'metric.ipk.sub': 'Universitas Islam Indonesia (3.62 / 4.00)',
    'metric.medal': 'INTERNSHIP EXPERIENCES',
    'metric.medal.sub': 'Bank Indonesia, Kejari Sleman, Kejari Banjarnegara',
    'metric.org': 'SCIENTIFIC PUBLICATION',
    'metric.org.sub': 'Legal Protection of Borrowers Article (2026)',
    'metric.toefl': 'UNIVERSITY',
    'metric.toefl.sub': 'Universitas Islam Indonesia — Sleman, Yogyakarta',

    // ── Education Section
    'education.label': 'ACADEMIC BACKGROUND',
    'education.title': 'Education',
    'education.degreeLabel': 'Degree',
    'education.highlights.label': 'Key Competencies & Activities',

    'education.1.institution': 'Universitas Islam Indonesia',
    'education.1.program': 'Bachelor of Law (S1 Ilmu Hukum)',
    'education.1.degree': 'Bachelor of Law (S.H.)',
    'education.1.period': '2022 — 2026',
    'education.1.gpa': '3.62 / 4.00',
    'education.1.status': 'Graduated',
    'education.1.desc': 'Completed a Bachelor of Law at Universitas Islam Indonesia (UII), Sleman, Yogyakarta with a GPA of 3.62/4.00. During studies, completed internships at three prestigious legal institutions (Bank Indonesia, Kejari Sleman, and Kejari Banjarnegara) and authored a published scientific law article.',
    'education.1.tag': 'Undergraduate Degree',
    'education.1.caption': 'Law Graduation Ceremony — Universitas Islam Indonesia',
    'education.1.h1': 'Internship at Bank Indonesia (Dept. of Law, DPHPIH Division) — regulatory review, Kumham Glossary, LIMS metadata validation',
    'education.1.h2': 'Internship at Kejaksaan Negeri Sleman (Tipidnum, Datun & Tipidsus) — case file review, indictments, restorative justice',
    'education.1.h3': 'Internship at Kejaksaan Negeri Banjarnegara (Tipidnum) — assisting prosecutors, case preparation, court filing',
    'education.1.h4': 'Published scientific article: "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy" (2026)',

    // ── Work Section
    'work.label': 'INTERNSHIP EXPERIENCE',
    'work.title': 'Legal Internship Experience',
    'work.subtitle': 'Internship experience at national legal institutions: Bank Indonesia (Department of Law), Kejaksaan Negeri Sleman, and Kejaksaan Negeri Banjarnegara.',
    'work.cta': 'View All Experiences',

    'work.1.role': 'Legal Intern — Tipidnum, Datun & Tipidsus Sections',
    'work.1.inst': 'KEJAKSAAN NEGERI SLEMAN',
    'work.1.loc': 'Sleman, DI Yogyakarta',
    'work.1.period': 'November 2025 — January 2026',
    'work.1.sub': 'General Criminal Law, State Administration & Special Crimes',
    'work.1.desc': 'Conducted thorough review of case files and assisted in drafting Indictment Letters and Demand Letters. Actively participated in Public Consultation Forums and case resolution through restorative justice mechanisms. Studied and analyzed the application of Article 55 of the Criminal Code (KUHP) in the context of criminal participation, and supported case administration across the Tipidnum, Datun, and Tipidsus sections.',

    'work.2.role': 'Legal Intern — Dept. of Law, DPHPIH Division',
    'work.2.inst': 'BANK INDONESIA',
    'work.2.loc': 'Central Jakarta, DKI Jakarta',
    'work.2.period': 'February 2025',
    'work.2.sub': 'Banking Regulation, Data Validation & Legal Administration',
    'work.2.desc': 'Reviewed and analyzed the translation of PADG No.14/2024 to ensure legal substance accuracy. Contributed to the preparation of the Kumham Glossary as a legal terminology reference. Managed document metadata in the LIMS system and entered data into the Sarah system for internal validation. Actively participated as a delegate at the Pameran Kampung Hukum at the Supreme Court of Indonesia (18–19 February 2025), representing Bank Indonesia\'s Department of Law.',

    'work.3.role': 'Legal Intern — General Criminal Section',
    'work.3.inst': 'KEJAKSAAN NEGERI BANJARNEGARA',
    'work.3.loc': 'Banjarnegara, Central Java',
    'work.3.period': 'August 2024',
    'work.3.sub': 'General Criminal Law & Court Administration',
    'work.3.desc': 'Assisted Public Prosecutors (JPU) in preparing case files and conducting court hearings at the Banjarnegara District Court. Performed systematic filing and management of case documents in accordance with the Prosecutor\'s administrative procedures. Learned the handling workflow of general criminal cases from pre-prosecution through verdict execution.',

    // ── Organizations / Research Section (reused as Publications)
    'trainings.label': 'PUBLICATIONS & ACADEMIC ACHIEVEMENTS',
    'trainings.title': 'Scientific Articles & Achievements',
    'trainings.campus': 'UNIVERSITAS ISLAM INDONESIA',

    'org.1.role': 'Author — Scientific Law Article',
    'org.1.inst': 'Faculty of Law — Universitas Islam Indonesia',
    'org.1.period': '2026',
    'org.1.loc': 'Sleman, DI Yogyakarta',
    'org.1.desc': 'Authored and published a scientific article titled "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy in Housing Credit Agreements" — examining legal protection for good-faith borrowers in home loan agreements when developers face bankruptcy, through a normative analysis based on the Civil Code and Indonesian bankruptcy law.',

    'org.2.role': 'Active Participant — Three-Institution Internship Program',
    'org.2.inst': 'Bank Indonesia & Kejaksaan Negeri',
    'org.2.period': '2024 — 2026',
    'org.2.loc': 'Jakarta, Sleman & Banjarnegara',
    'org.2.desc': 'Completed internship programs at three prestigious legal institutions in succession: Kejaksaan Negeri Banjarnegara (2024), Bank Indonesia Department of Law (2025), and Kejaksaan Negeri Sleman (2025–2026). Received official certificates of appreciation from each institution for contributions and dedication throughout the internship programs.',

    // ── Awards Section
    'awards.label': 'CERTIFICATES & AWARDS',
    'awards.title': 'Certifications & Awards',
    'awards.sub': 'Official certificates from legal institutions, banking, and academic bodies recognizing participation and contribution in internship programs and legal activities.',
    'awards.openDoc': 'Open Document',
    'awards.issuer': 'Issuing Body',
    'awards.viewOriginal': 'View Original Document →',

    'award.1.title': 'Student Internship Certificate',
    'award.1.issuer': 'Kejaksaan Negeri Sleman',
    'award.1.cat': 'INTERNSHIP CERTIFICATE',
    'award.1.desc': 'Certificate for participation in the 2025 Student Internship Program at Kejaksaan Negeri Sleman, conducted from 17 November 2025 to 02 January 2026.',

    'award.2.title': 'Internship Completion Letter',
    'award.2.issuer': 'Bank Indonesia — HR Recruitment & Compliance Division',
    'award.2.cat': 'INTERNSHIP LETTER',
    'award.2.desc': 'Official letter from Bank Indonesia (No.27/251/DSDM-GOps-RKS/Srt/B) confirming that Farel Rayhan Saputra completed an internship at Bank Indonesia Head Office, Department of Law, from 3 February 2025 to 28 February 2025.',

    'award.3.title': 'Pameran Kampung Hukum Participant Certificate',
    'award.3.issuer': 'Supreme Court of the Republic of Indonesia',
    'award.3.cat': 'PARTICIPATION CERTIFICATE',
    'award.3.desc': 'Certificate from the Supreme Court of Indonesia for participation as a delegate at the Pameran Kampung Hukum Mahkamah Agung RI on 18–19 February 2025. Signed by the Head of the Bureau of Law and Public Relations of the Supreme Court.',

    'award.4.title': 'National Capacity Building Webinar Certificate',
    'award.4.issuer': 'Center for Capital Market & Financial Law Studies FH UII',
    'award.4.cat': 'AWARD CERTIFICATE',
    'award.4.desc': 'Award Certificate as Participant in the National Capacity Building Webinar: Career Opportunities for Law Graduates in State-Owned Enterprises, organized by PSPMHK Faculty of Law UII on 3 May 2025.',

    'award.5.title': 'Student Internship Certificate',
    'award.5.issuer': 'Kejaksaan Negeri Banjarnegara',
    'award.5.cat': 'INTERNSHIP CERTIFICATE',
    'award.5.desc': 'Certificate and letter of appreciation from Kejaksaan Negeri Banjarnegara for completing the Student Internship Program from 05 August 2024 to 22 August 2024. Signed by the Acting Head of Kejaksaan Negeri Banjarnegara.',

    // ── Skills Section
    'skills.label': 'LEGAL & TECHNICAL COMPETENCIES',
    'skills.title': 'Technical Competencies',
    'skills.desc': 'Integrating criminal & civil legal expertise, prosecution and banking legal administration, and legal research and data validation skills from real-world experience at Bank Indonesia and the Kejaksaan Negeri.',
    'skills.card1.tag': 'LEGAL SKILLS',
    'skills.card1.sub': 'Law & Legal Analysis',
    'skills.card1.desc': 'Regulation-based legal research, criminal & civil legal analysis, case file review, drafting indictments and charges, basic legal drafting, case administration, restorative justice, Article 55 KUHP analysis, regulatory review (PADG), and understanding of bankruptcy law and consumer protection.',
    'skills.card2.tag': 'ADMINISTRATIVE SKILLS',
    'skills.card2.sub': 'Administration & Document Management',
    'skills.card2.desc': 'Systematic management and filing of legal documents, data entry and metadata validation in the LIMS system, preparation of the Kumham Glossary, court administration, document verification, and administrative reporting and documentation in accordance with institutional procedures.',
    'skills.card3.tag': 'ANALYTICAL SKILLS',
    'skills.card3.sub': 'Research & Critical Thinking',
    'skills.card3.desc': 'Scientific legal article writing, normative juridical analysis, critical thinking in legal problem-solving, in-depth literature research, structured legal argument construction, and communication and presentation skills in public consultation forums.',

    // ── Personal Skills Section
    'personal.label': 'PERSONAL & SOFTWARE SKILLS',
    'personal.title': 'Character & Software Tools',
    'personal.sub': 'Professional character traits supporting strong performance in the legal field, along with proficiency in software tools for administration, research, and legal document presentation.',
    'personal.soft.label': 'SOFT SKILLS',
    'personal.soft.title': 'Personal Traits',
    'personal.hard.label': 'SOFTWARE TOOLS',
    'personal.hard.title': 'Software Competencies',
    'personal.orientation': 'Professional Character:',
    'personal.quality': 'Integrity & Legal Analytical Precision',
    'personal.app': 'Productivity Tools:',
    'personal.ready': 'Ms. Word, Excel, PowerPoint, Canva, Google Workspace',

    'personal.soft.1.t': 'Meticulous & Responsible',
    'personal.soft.1.d': 'High commitment to the accuracy of legal documents, case administration, and regulatory analysis.',
    'personal.soft.2.t': 'Communicative',
    'personal.soft.2.d': 'Able to clearly convey legal analysis and opinions, both verbally and in writing, in professional contexts.',
    'personal.soft.3.t': 'Teamwork',
    'personal.soft.3.d': 'Experienced working in cross-functional teams in prosecution, banking, and academic environments.',
    'personal.soft.4.t': 'Adaptive & Fast Learner',
    'personal.soft.4.d': 'Quickly grasping new regulations, institutional work systems, and different administrative procedures at each internship organization.',
    'personal.soft.5.t': 'Critical Thinking',
    'personal.soft.5.d': 'Able to identify legal issues, analyze root causes, and develop solutions based on applicable regulations.',
    'personal.soft.6.t': 'Proactive & Agile',
    'personal.soft.6.d': 'Quick in completing administrative tasks and supporting team operations independently and on own initiative.',

    // ── Contact Section
    'contact.label': 'CONTACT',
    'contact.title': 'Get in Touch',
    'contact.tagline': 'Law Graduate — Ready to Contribute in Law, Compliance & Administration',
    'contact.subtitle': 'Open to career opportunities in Law, Legal, Compliance, Banking, Government, and General Administration.',
    'contact.chatNow': 'Contact Now',
    'contact.direct': 'Direct Communication Channels',
    'contact.directSub': 'Reach out via the channels below:',
    'contact.openHours': 'Response Hours:',
    'contact.openVal': 'Monday — Saturday (08:00 — 17:00 WIB)',
    'contact.location': 'LOCATION',
    'contact.phone': 'PHONE / WHATSAPP',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

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
    'about.title': 'Sarjana Hukum. Universitas Islam Indonesia.',
    'about.ipk': 'IPK Sarjana',
    'about.toefl': 'Pengalaman Magang',
    'about.year': 'Publikasi Ilmiah',
    'about.bio1': 'Lulusan S1 Hukum Universitas Islam Indonesia dengan pengalaman magang di Bank Indonesia serta 2 Kejaksaan Negeri. Memiliki pemahaman mengenai proses penegakan hukum, administrasi perkara, penyusunan dokumen hukum, serta pengelolaan informasi dan dokumentasi secara sistematis. Didukung kemampuan analisis, ketelitian, dan pengolahan dokumen untuk menunjang pekerjaan yang membutuhkan akurasi dan kepatuhan terhadap prosedur. Berkomitmen mengembangkan karier di bidang Legal, Administrasi, Compliance, Perbankan, Operasional, serta terbuka untuk kesempatan karier lainnya.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Legal Research',
    'about.current.1.sub': 'Analisis Hukum & Penelaahan Berkas',
    'about.current.2.title': 'Administrasi Perkara',
    'about.current.2.sub': 'Berkas Perkara, Persidangan & Pengarsipan',
    'about.current.3.title': 'Kepatuhan & Data',
    'about.current.3.sub': 'Validasi Data, LIMS & Entry Data',

    // ── Trait Deck
    'trait.card.label': 'KARAKTER KERJA',
    'trait.change': 'Ganti',
    'trait.hint': 'Klik untuk melihat karakter kerja lainnya',
    'trait.1.title': 'Teliti',
    'trait.1.sub': 'Presisi & Zero Error',
    'trait.1.tag': 'Akurasi Dokumen',
    'trait.1.desc': 'Menjaga ketelitian dalam penelaahan berkas perkara, pengelolaan dokumen, serta pemeriksaan dan validasi data hukum.',
    'trait.2.title': 'Analitis',
    'trait.2.sub': 'Legal Analysis',
    'trait.2.tag': 'Riset Hukum',
    'trait.2.desc': 'Mampu menganalisis ketentuan hukum, melakukan legal research dasar, dan menelaah dokumen hukum secara terstruktur.',
    'trait.3.title': 'Kolaboratif',
    'trait.3.sub': 'Tim & Koordinasi',
    'trait.3.tag': 'Kerja Tim Lintas Fungsi',
    'trait.3.desc': 'Terbiasa bekerja sama dengan jaksa, staf hukum, dan tim di Bank Indonesia dalam lingkungan kerja profesional.',
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
    'metric.toefl': 'SERTIFIKAT',
    'metric.toefl.sub': 'Magang, Mahkamah Agung & Webinar FH UII',
    // ── Education Section
    'education.label': 'RIWAYAT AKADEMIK',
    'education.title': 'Pendidikan',
    'education.degreeLabel': 'Gelar',
    'education.highlights.label': 'Kompetensi & Aktivitas Utama',

    'education.1.institution': 'Universitas Islam Indonesia',
    'education.1.program': 'S1 Hukum',
    'education.1.degree': 'Sarjana Hukum (S.H.)',
    'education.1.period': '2022 — 2026',
    'education.1.gpa': '3.62 / 4.00',
    'education.1.status': 'Lulus',
    'education.1.desc': 'Menempuh studi S1 Hukum di Universitas Islam Indonesia (UII), Sleman, Yogyakarta dengan IPK 3.62/4.00. Selama studi menjalani magang di Bank Indonesia, Kejaksaan Negeri Sleman, dan Kejaksaan Negeri Banjarnegara, serta menulis artikel ilmiah (2026).',
    'education.1.tag': 'Pendidikan Sarjana',
    'education.1.caption': 'Wisuda Sarjana Hukum — Universitas Islam Indonesia',
    'education.1.h1': 'Magang di Bank Indonesia (Departemen Hukum, Divisi DPHPIH) — penyuntingan terjemahan PADG No. 14/2024, penyelarasan istilah dengan Glossarium Kumham, pembaruan metadata LIMS',
    'education.1.h2': 'Magang di Kejaksaan Negeri Sleman (Tipidnum, Datun & Tipidsus) — penelaahan dan administrasi berkas perkara, keadilan restoratif',
    'education.1.h3': 'Magang di Kejaksaan Negeri Banjarnegara (Tipidnum) — membantu JPU, mengamati persidangan, pengarsipan berkas perkara',
    'education.1.h4': 'Artikel ilmiah: "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy After Full Payment" (2026)',
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
    'work.1.desc': 'Mendukung penelaahan dan administrasi berkas perkara pada 3 bidang, yaitu Tindak Pidana Umum, Perdata dan Tata Usaha Negara, serta Tindak Pidana Khusus. Mempelajari penyusunan Surat Dakwaan dan Surat Tuntutan serta analisis penyertaan tindak pidana berdasarkan Pasal 55 ayat (1) KUHP. Membantu pengelolaan administrasi perkara, dokumentasi, dan berkas barang bukti sesuai arahan pembimbing, serta mengikuti Forum Konsultasi Publik dan mempelajari penerapan keadilan restoratif dalam proses penegakan hukum.',
    'work.2.role': 'Legal Intern — Departemen Hukum, Divisi DPHPIH',
    'work.2.inst': 'BANK INDONESIA',
    'work.2.loc': 'Jakarta Pusat, DKI Jakarta',
    'work.2.period': 'Februari 2025',
    'work.2.sub': 'Regulasi Perbankan, Validasi Data & Administrasi Hukum',
    'work.2.desc': 'Meninjau dan menyunting format terjemahan PADG No. 14 Tahun 2024 (struktur, tata letak, tata bahasa, dan konsistensi istilah hukum), menyelaraskan terminologi dengan Glossarium Kumham, serta menyusun daftar istilah penting beserta definisinya. Memeriksa dan memperbarui metadata Peraturan Bank Indonesia melalui aplikasi LIMS (Legal Information Management System), serta mencocokkan dan memvalidasi data peraturan antara sistem LIMS dan Sarah. Mengikuti workshop Pameran Kampung Hukum di Mahkamah Agung RI (18–19 Februari 2025).',
    'work.3.role': 'Legal Intern — Seksi Tindak Pidana Umum',
    'work.3.inst': 'KEJAKSAAN NEGERI BANJARNEGARA',
    'work.3.loc': 'Banjarnegara, Jawa Tengah',
    'work.3.period': 'Agustus 2024',
    'work.3.sub': 'Hukum Pidana Umum & Administrasi Perkara',
    'work.3.desc': 'Membantu Jaksa Penuntut Umum (JPU) dalam persiapan dan pengelolaan berkas perkara pidana umum. Mengamati dan mendampingi proses persidangan serta mencatat jalannya persidangan sesuai arahan pembimbing, membantu penyusunan laporan kegiatan dan administrasi perkara, dan mengelola pengarsipan dokumen serta berkas perkara secara sistematis. Mempelajari tahapan penanganan perkara pidana umum melalui observasi kegiatan kejaksaan dan persidangan.',
    // ── Organizations / Research Section (reused as Publications)
    'trainings.label': 'PUBLIKASI & PENCAPAIAN AKADEMIK',
    'trainings.title': 'Artikel Ilmiah & Pencapaian',
    'trainings.campus': 'UNIVERSITAS ISLAM INDONESIA',

    'org.1.role': 'Penulis Artikel Ilmiah',
    'org.1.inst': 'Universitas Islam Indonesia',
    'org.1.period': '2026',
    'org.1.loc': 'Sleman, DI Yogyakarta',
    'org.1.desc': 'Artikel ilmiah berjudul "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy After Full Payment: Case Study of the Sale and Purchase of the Malioboro Park View Apartment" (2026).',
    'org.2.role': 'Magang di Tiga Lembaga',
    'org.2.inst': 'Bank Indonesia & Kejaksaan Negeri',
    'org.2.period': '2024 — 2026',
    'org.2.loc': 'Jakarta, Sleman & Banjarnegara',
    'org.2.desc': 'Menyelesaikan magang di tiga lembaga secara berurutan: Kejaksaan Negeri Banjarnegara (Agustus 2024), Bank Indonesia Departemen Hukum (Februari 2025), dan Kejaksaan Negeri Sleman (November 2025 — Januari 2026). Memperoleh sertifikat atau surat keterangan dari setiap lembaga.',
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
    'award.2.desc': 'Surat keterangan resmi dari Bank Indonesia (Divisi Rekrutmen dan Kepatuhan SDM) yang menyatakan Farel Rayhan Saputra telah melaksanakan kegiatan magang di Kantor Pusat Bank Indonesia, Departemen Hukum, periode 3 Februari 2025 s.d. 28 Februari 2025.',
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
    'skills.desc': 'Menggabungkan kemampuan analisis hukum, penelaahan dan pengelolaan dokumen, serta validasi data berdasarkan pengalaman magang di Bank Indonesia dan Kejaksaan Negeri.',
    'skills.card1.tag': 'LEGAL SKILLS',
    'skills.card1.sub': 'Hukum & Analisis Yuridis',
    'skills.card1.desc': 'Penelaahan dokumen hukum dan berkas perkara, pemahaman dasar legal drafting, pengelolaan informasi hukum, keadilan restoratif, serta kepatuhan terhadap etika profesi hukum.',
    'skills.card2.tag': 'ADMINISTRATIVE SKILLS',
    'skills.card2.sub': 'Administrasi & Pengelolaan Dokumen',
    'skills.card2.desc': 'Pengelolaan dan pengarsipan dokumen secara sistematis, penyusunan dokumen fisik dan digital, pemeriksaan dan validasi data dokumen, entry data, serta administrasi perkara.',
    'skills.card3.tag': 'ANALYTICAL SKILLS',
    'skills.card3.sub': 'Riset & Pemikiran Kritis',
    'skills.card3.desc': 'Fundamental legal analysis, legal research dasar, kemampuan berpikir kritis dan problem solving, serta penyampaian informasi secara jelas.',
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

    'personal.soft.1.t': 'Teliti',
    'personal.soft.1.d': 'Menjaga akurasi dalam penelaahan dokumen hukum, administrasi perkara, serta pemeriksaan dan validasi data.',
    'personal.soft.2.t': 'Komunikatif',
    'personal.soft.2.d': 'Mampu menyampaikan informasi secara jelas dalam konteks profesional.',
    'personal.soft.3.t': 'Kerja Sama Tim',
    'personal.soft.3.d': 'Terbiasa bekerja sama dengan tim di lingkungan kejaksaan dan Bank Indonesia.',
    'personal.soft.4.t': 'Adaptif',
    'personal.soft.4.d': 'Mampu menyesuaikan diri dengan sistem kerja dan prosedur yang berbeda di setiap instansi magang.',
    'personal.soft.5.t': 'Berpikir Kritis & Problem Solving',
    'personal.soft.5.d': 'Mampu mengidentifikasi permasalahan, menganalisisnya secara kritis, dan mencari solusi.',
    'personal.soft.6.t': 'Cekatan',
    'personal.soft.6.d': 'Sigap menyelesaikan tugas administrasi dan mendukung kegiatan tim sesuai arahan pembimbing.',
    // ── Contact Section
    'contact.label': 'KONTAK',
    'contact.title': 'Hubungi Saya',
    'contact.tagline': 'Sarjana Hukum — Siap Berkontribusi di Bidang Hukum, Kepatuhan & Administrasi',
    'contact.subtitle': 'Terbuka untuk peluang karier di bidang Legal, Administrasi, Compliance, Perbankan, dan Operasional, serta kesempatan karier lainnya.',
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
    'about.title': 'Law Graduate. Universitas Islam Indonesia.',
    'about.ipk': 'Bachelor GPA',
    'about.toefl': 'Internship Experiences',
    'about.year': 'Scientific Publication',
    'about.bio1': 'Bachelor of Law graduate from Universitas Islam Indonesia with internship experience at Bank Indonesia and two District Prosecutors\' Offices. Understands law enforcement processes, case administration, legal document preparation, and systematic information and documentation management. Supported by analytical ability, accuracy, and document-handling skills for work that demands precision and procedural compliance. Committed to building a career in Legal, Administration, Compliance, Banking, and Operations, and open to other career opportunities.',
    'about.cv.prompt': 'Want to learn more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Legal Research',
    'about.current.1.sub': 'Legal Analysis & Case File Review',
    'about.current.2.title': 'Case Administration',
    'about.current.2.sub': 'Case Files, Hearings & Filing',
    'about.current.3.title': 'Compliance & Data',
    'about.current.3.sub': 'Data Validation, LIMS & Entry',

    // ── Trait Deck
    'trait.card.label': 'WORK TRAITS',
    'trait.change': 'Switch',
    'trait.hint': 'Click to view more work traits',
    'trait.1.title': 'Meticulous',
    'trait.1.sub': 'Precision & Zero Error',
    'trait.1.tag': 'Document Accuracy',
    'trait.1.desc': 'Maintaining accuracy in case file review, document management, and legal data checking and validation.',
    'trait.2.title': 'Analytical',
    'trait.2.sub': 'Legal Analysis',
    'trait.2.tag': 'Legal Research',
    'trait.2.desc': 'Able to analyze legal provisions, conduct basic legal research, and review legal documents in a structured way.',
    'trait.3.title': 'Collaborative',
    'trait.3.sub': 'Team & Coordination',
    'trait.3.tag': 'Cross-Functional Teams',
    'trait.3.desc': 'Used to working together with prosecutors, legal staff, and teams at Bank Indonesia in professional environments.',
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
    'metric.toefl': 'CERTIFICATES',
    'metric.toefl.sub': 'Internships, Supreme Court & FH UII Webinar',
    // ── Education Section
    'education.label': 'ACADEMIC BACKGROUND',
    'education.title': 'Education',
    'education.degreeLabel': 'Degree',
    'education.highlights.label': 'Key Competencies & Activities',

    'education.1.institution': 'Universitas Islam Indonesia',
    'education.1.program': 'Bachelor of Law',
    'education.1.degree': 'Bachelor of Law (S.H.)',
    'education.1.period': '2022 — 2026',
    'education.1.gpa': '3.62 / 4.00',
    'education.1.status': 'Graduated',
    'education.1.desc': 'Completed a Bachelor of Law at Universitas Islam Indonesia (UII), Sleman, Yogyakarta with a GPA of 3.62/4.00. During studies, completed internships at Bank Indonesia, Kejaksaan Negeri Sleman, and Kejaksaan Negeri Banjarnegara, and wrote a scientific article (2026).',
    'education.1.tag': 'Undergraduate Degree',
    'education.1.caption': 'Law Graduation Ceremony — Universitas Islam Indonesia',
    'education.1.h1': 'Internship at Bank Indonesia (Department of Law, DPHPIH Division) — editing the PADG No. 14/2024 translation, aligning terms with the Kumham Glossary, updating LIMS metadata',
    'education.1.h2': 'Internship at Kejaksaan Negeri Sleman (Tipidnum, Datun & Tipidsus) — case file review and administration, restorative justice',
    'education.1.h3': 'Internship at Kejaksaan Negeri Banjarnegara (Tipidnum) — assisting prosecutors, observing hearings, case file archiving',
    'education.1.h4': 'Scientific article: "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy After Full Payment" (2026)',
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
    'work.1.desc': 'Supported review and administration of case files across 3 areas: General Criminal Offenses, Civil and State Administrative Law, and Special Criminal Offenses. Studied the drafting of Indictments and Demand Letters and the analysis of criminal participation under Article 55(1) of the Criminal Code (KUHP). Helped manage case administration, documentation, and evidence files as directed by supervisors, joined a Public Consultation Forum, and studied the application of restorative justice in law enforcement.',
    'work.2.role': 'Legal Intern — Dept. of Law, DPHPIH Division',
    'work.2.inst': 'BANK INDONESIA',
    'work.2.loc': 'Central Jakarta, DKI Jakarta',
    'work.2.period': 'February 2025',
    'work.2.sub': 'Banking Regulation, Data Validation & Legal Administration',
    'work.2.desc': 'Reviewed and edited the format of the PADG No. 14 of 2024 translation (structure, layout, grammar, and legal term consistency), aligned terminology with the Kumham Glossary, and compiled a list of key terms with definitions. Checked and updated Bank Indonesia regulation metadata in the LIMS (Legal Information Management System) application, and cross-checked and validated regulation data between the LIMS and Sarah systems. Attended the Pameran Kampung Hukum workshop at the Supreme Court of Indonesia (18–19 February 2025).',
    'work.3.role': 'Legal Intern — General Criminal Section',
    'work.3.inst': 'KEJAKSAAN NEGERI BANJARNEGARA',
    'work.3.loc': 'Banjarnegara, Central Java',
    'work.3.period': 'August 2024',
    'work.3.sub': 'General Criminal Law & Case Administration',
    'work.3.desc': 'Assisted Public Prosecutors (JPU) in preparing and managing general criminal case files. Observed and accompanied court hearings and recorded the proceedings as directed by supervisors, helped prepare activity reports and case administration, and managed the filing of documents and case files systematically. Studied the stages of handling general criminal cases through observing prosecutor\'s office activities and hearings.',
    // ── Organizations / Research Section (reused as Publications)
    'trainings.label': 'PUBLICATIONS & ACADEMIC ACHIEVEMENTS',
    'trainings.title': 'Scientific Articles & Achievements',
    'trainings.campus': 'UNIVERSITAS ISLAM INDONESIA',

    'org.1.role': 'Author — Scientific Article',
    'org.1.inst': 'Universitas Islam Indonesia',
    'org.1.period': '2026',
    'org.1.loc': 'Sleman, DI Yogyakarta',
    'org.1.desc': 'Scientific article titled "Legal Protection for Borrowers Acting in Good Faith Against a Developer\'s Bankruptcy After Full Payment: Case Study of the Sale and Purchase of the Malioboro Park View Apartment" (2026).',
    'org.2.role': 'Internships at Three Institutions',
    'org.2.inst': 'Bank Indonesia & Kejaksaan Negeri',
    'org.2.period': '2024 — 2026',
    'org.2.loc': 'Jakarta, Sleman & Banjarnegara',
    'org.2.desc': 'Completed internships at three institutions in succession: Kejaksaan Negeri Banjarnegara (August 2024), Bank Indonesia Department of Law (February 2025), and Kejaksaan Negeri Sleman (November 2025 — January 2026). Received a certificate or letter of completion from each institution.',
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
    'award.2.desc': 'Official letter from Bank Indonesia (Recruitment and HR Compliance Division) confirming that Farel Rayhan Saputra completed an internship at Bank Indonesia Head Office, Department of Law, from 3 February 2025 to 28 February 2025.',
    'award.3.title': 'Pameran Kampung Hukum Participant Certificate',
    'award.3.issuer': 'Supreme Court of the Republic of Indonesia',
    'award.3.cat': 'PARTICIPATION CERTIFICATE',
    'award.3.desc': 'Certificate from the Supreme Court of Indonesia for participation in the Pameran Kampung Hukum Mahkamah Agung RI on 18–19 February 2025. Signed by the Head of the Bureau of Law and Public Relations of the Supreme Court.',
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
    'skills.desc': 'Combining legal analysis, document review and management, and data validation skills based on internship experience at Bank Indonesia and the Kejaksaan Negeri.',
    'skills.card1.tag': 'LEGAL SKILLS',
    'skills.card1.sub': 'Law & Legal Analysis',
    'skills.card1.desc': 'Review of legal documents and case files, basic legal drafting understanding, legal information management, restorative justice, and compliance with legal professional ethics.',
    'skills.card2.tag': 'ADMINISTRATIVE SKILLS',
    'skills.card2.sub': 'Administration & Document Management',
    'skills.card2.desc': 'Systematic document management and filing, preparation of physical and digital documents, document data checking and validation, data entry, and case administration.',
    'skills.card3.tag': 'ANALYTICAL SKILLS',
    'skills.card3.sub': 'Research & Critical Thinking',
    'skills.card3.desc': 'Fundamental legal analysis, basic legal research, critical thinking and problem solving, and clear communication of information.',
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

    'personal.soft.1.t': 'Meticulous',
    'personal.soft.1.d': 'Maintaining accuracy in legal document review, case administration, and data checking and validation.',
    'personal.soft.2.t': 'Communicative',
    'personal.soft.2.d': 'Able to convey information clearly in professional contexts.',
    'personal.soft.3.t': 'Teamwork',
    'personal.soft.3.d': 'Used to working together with teams at prosecutor\'s offices and Bank Indonesia.',
    'personal.soft.4.t': 'Adaptive',
    'personal.soft.4.d': 'Able to adjust to different work systems and procedures at each internship institution.',
    'personal.soft.5.t': 'Critical Thinking & Problem Solving',
    'personal.soft.5.d': 'Able to identify problems, analyze them critically, and look for solutions.',
    'personal.soft.6.t': 'Quick & Efficient',
    'personal.soft.6.d': 'Quick to complete administrative tasks and support team activities as directed by supervisors.',
    // ── Contact Section
    'contact.label': 'CONTACT',
    'contact.title': 'Get in Touch',
    'contact.tagline': 'Law Graduate — Ready to Contribute in Law, Compliance & Administration',
    'contact.subtitle': 'Open to career opportunities in Legal, Administration, Compliance, Banking, and Operations, as well as other career opportunities.',
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

'use client'

import { siteData } from '@/lib/data'

const techColors: Record<string, string> = {
  'Penelaahan Perkara': 'bg-emerald-600',
  'Administrasi Perkara': 'bg-teal-600',
  'Berkas Barang Bukti': 'bg-amber-700',
  'Surat Dakwaan': 'bg-indigo-600',
  'Surat Tuntutan': 'bg-sky-700',
  'Hukum Pidana': 'bg-rose-700',
  'Pasal 55 KUHP': 'bg-rose-600',
  'Penyertaan Pidana': 'bg-amber-600',
  'Analisis Yuridis': 'bg-purple-600',
  'Keadilan Restoratif': 'bg-green-700',
  'Forum Konsultasi': 'bg-cyan-600',
  'PADG BI': 'bg-fuchsia-600',
  'Penyuntingan Dokumen': 'bg-blue-600',
  'Hukum Perbankan': 'bg-sky-600',
  'Glossarium Hukum': 'bg-emerald-700',
  'Terminologi Hukum': 'bg-indigo-700',
  'Standarisasi': 'bg-teal-700',
  'LIMS': 'bg-pink-600',
  'Sistem Sarah': 'bg-amber-700',
  'Validasi Data': 'bg-violet-600',
  'Kampung Hukum': 'bg-cyan-700',
  'Mahkamah Agung': 'bg-violet-700',
  'Administrasi Persidangan': 'bg-red-600',
  'Pengarsipan Dokumen': 'bg-rose-700',
  'Tipidnum': 'bg-sky-700',
  'Artikel Ilmiah': 'bg-amber-700',
  'Kepailitan Pengembang': 'bg-orange-600',
  'Perlindungan Hukum': 'bg-blue-700',
}

export default function ProjectList() {
  const projects = siteData.technicalProjects

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PORTOFOLIO HUKUM & PENGALAMAN</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Praktik & Proyek Hukum</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rincian penugasan hukum di Kejaksaan Negeri Sleman, Bank Indonesia (Departemen Hukum), Kejaksaan Negeri Banjarnegara, serta karya ilmiah hukum.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColors[tech] || 'bg-gray-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

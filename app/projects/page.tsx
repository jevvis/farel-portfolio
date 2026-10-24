import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'

export const metadata = {
  title: 'Pengalaman & Portofolio | Farel Rayhan Saputra, S.H.',
  description: 'Pengalaman Magang Hukum di Bank Indonesia, Kejaksaan Negeri Sleman, dan Kejaksaan Negeri Banjarnegara',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Farel Rayhan Saputra, S.H. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

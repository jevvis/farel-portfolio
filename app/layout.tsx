import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Farel Rayhan Saputra, S.H. | Portfolio Sarjana Hukum',
  description: 'Sarjana Hukum UII | Legal Intern Bank Indonesia & Kejaksaan Negeri | Legal Research, Administrasi Perkara & Kepatuhan',
  keywords: ['Farel Rayhan Saputra', 'Sarjana Hukum', 'Legal Intern', 'Bank Indonesia', 'Kejaksaan Negeri Sleman', 'Universitas Islam Indonesia', 'Legal Research', 'Hukum Pidana', 'Administrasi Perkara', 'Portfolio Hukum'],
  openGraph: {
    title: 'Farel Rayhan Saputra, S.H. | Portfolio Sarjana Hukum',
    description: 'Sarjana Hukum UII | Legal Intern Bank Indonesia & Kejaksaan Negeri',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

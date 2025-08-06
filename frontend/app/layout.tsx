import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { CustomThemeProvider } from '../lib/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground' // adjust path as needed

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Will Chisholm | Full Stack Developer Portfolio',
  description:
    'A full stack web developer portfolio showcasing modern, performant applications built with Next.js, Flask, SQLAlchemy, Docker, and MSSQL. Explore my work, skills, and contact info.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          position: 'relative', // make sure body is a stacking context
          overflowX: 'hidden',
        }}
      >
        <CustomThemeProvider>
          <CssBaseline />
          <ParticlesBackground />
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  )
}

import '@/styles/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import BlankNavbar from '@/components/blanknavigationbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TutorPlus',
  description: 'Copyright. TutorPlus 2023.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <BlankNavbar />
        {children}
      </body>
    </html>
  )
}

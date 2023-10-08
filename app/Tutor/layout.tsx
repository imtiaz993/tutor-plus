import React, { ReactElement } from 'react'
import Navbar from '@/components/navigationbar'
import Footer from '@/components/footer'

export default function TutorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}

import '@/styles/globals.css'
import type { Metadata } from 'next'
import BlankNavbar from '@/components/blanknavigationbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TutorPlus',
    description: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <BlankNavbar showAvatar={true} />
                {children}
            </body>
        </html>
    )
}

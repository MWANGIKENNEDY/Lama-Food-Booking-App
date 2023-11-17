import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Notifications from '@/components/Notifications'
import Footer from '@/components/Footer'

import 'primeicons/primeicons.css';
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>

      </head>
      
      <body className={inter.className}>

        <AuthProvider>

          <QueryProvider>

        
        <Notifications/>

        <Navbar/>

        {children}

        <Footer/>

        </QueryProvider>

        </AuthProvider>
        
        </body>
    </html>
  )
}

`use client`;
import './globals.css'
import { Inter } from 'next/font/google';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jujutsu Kaisen',
  description: 'A fan made Jujutsu Kaisen website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
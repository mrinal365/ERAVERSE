import SquareButton from '@/components/squarebutton'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import './globals.css'
import Button from '@/components/button'
import Navbar from '@/components/navbar'

// import { usePathname } from 'next/navigation'



// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVAVERSE',
  description: 'Evaverse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  // const pathname = usePathname()

  return (
    <html lang="en">
      <body >
        {children}
        {/* <p>{pathname}</p> */}
        <Navbar/>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Climate Collab',
  description: 'My Climate Collaborator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-tl from-green-400 to-blue-200`}>
        
          {children}
        
        </body>
    </html>
  )
}

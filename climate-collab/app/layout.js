import { Inter } from 'next/font/google';
import './globals.css'; 
import { getServerSession } from 'next-auth';

import SessionProvider from '../helpers/auth/SessionProvider'; 
import authOptions from '@/helpers/auth/options';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Climate Collab',
  description: 'Climate Collaborator',
}


export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-tl from-green-400 to-blue-200`}> 
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
          
        </body>
    </html>
  )
}

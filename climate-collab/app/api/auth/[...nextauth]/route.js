import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from 'next-auth'; 
import GoogleProvider from 'next-auth/providers/google'; 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    adapter: PrismaAdapter(prisma), 
    callbacks: {
        async redirect({ url , baseUrl }){
            return `${baseUrl}/main`;
        }
    }
    
})

export { handler as GET, handler as POST }

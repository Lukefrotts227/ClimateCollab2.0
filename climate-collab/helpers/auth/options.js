import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'; 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    adapter: PrismaAdapter(prisma), 
    callbacks: {
        async redirect({ baseUrl }){
            return `${baseUrl}/main`;
        }
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    session: {
        strategy:"jwt",
    },
    jwt: {},
    
}

export default authOptions; 
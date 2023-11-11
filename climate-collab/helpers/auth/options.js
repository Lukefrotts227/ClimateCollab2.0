import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'; 
import DiscordProvider from "next-auth/providers/discord";
import prisma from "../prisma/prisma";

const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }), 
        DiscordProvider({
            clientId:  process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,

        }),
    ],
    adapter: PrismaAdapter(prisma), 
    callbacks: {
        async redirect({ baseUrl }){
            return `${baseUrl}/main`;
        },
        async jwt({ token, user }) {
            if (user) {
                token.userId = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.userId = token.userId;
            return session;
        }
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    session: {
        strategy:"jwt",
    },
    jwt: {},
    
}

export default authOptions; 
    
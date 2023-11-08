import { PrismaClient } from '@prisma/client'; 

let prisma = new PrismaClient(); 
prisma = global.prisma 


export default prisma; 
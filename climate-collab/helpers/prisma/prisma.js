// helpers/prisma/prisma.js
import { PrismaClient } from '@prisma/client';

// Add a global type to avoid TypeScript errors
global.prisma = global.prisma || null;

let prisma;

if (process.env.NODE_ENV === 'production') {
  // In production, always create a new Prisma Client
  prisma = new PrismaClient();
} else {
  // In development, use a global variable so the database connection
  // is preserved between hot reloads in Next.js
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

/**
 * Prisma Client Singleton
 * 
 * TODO:
 * - PrismaClient instanziieren (Singleton Pattern!)
 * - Development: globalThis caching gegen Hot-Reload
 * - Production: Direkte Instanz
 * 
 * Hinweise:
 * - Import: import { PrismaClient } from '@prisma/client'
 * - globalThis.prisma für Dev-Modus
 * - Export als default
 */

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

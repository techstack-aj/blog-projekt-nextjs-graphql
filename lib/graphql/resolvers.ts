/**
 * GraphQL Resolvers
 * 
 * TODO (Kapitel 6):
 * - Query Resolver implementieren (posts, post, comments)
 * - Mutation Resolver (optional: createPost, createComment)
 * - Prisma Client für DB-Zugriff nutzen
 * 
 * Hinweise:
 * - Import PrismaClient: import { PrismaClient } from '@prisma/client'
 * - Resolver-Signatur: (parent, args, context, info) => {}
 * - Async/Await für DB-Queries
 * - Fehlerbehandlung beachten!
 */

/**
 * Resolver implementieren die tatsächliche Logik:
 * - Query.posts → Holt alle Posts aus DB
 * - Query.post → Holt einen Post nach Slug
 * - Query.comments → Holt Kommentare zu einem Post
 */

import prisma from '@/lib/prisma'; // Singleton nutzen!

export const resolvers = {
  Query: {
    // Alle veröffentlichten Posts
    posts: async () => {
      return await prisma.post.findMany({ 
        where: { published: true },
        include: { comments: true }, // Kommentare mit laden
        orderBy: { createdAt: 'desc' }
      });
    },
    
    // Ein Post nach Slug (wie im Schema definiert!)
    post: async (_: any, args: { slug: string }) => {
      return await prisma.post.findUnique({ 
        where: { slug: args.slug },
        include: { comments: true }
      });
    },
    
    // Kommentare zu einem Post
    comments: async (_: any, args: { postId: number }) => {
      return await prisma.comment.findMany({ 
        where: { postId: args.postId },
        orderBy: { createdAt: 'asc' }
      });
    },
  },
};




/**
 * GraphQL Resolvers
 * 
 * Implementiert die Logik für:
 * - Query.posts: Alle veröffentlichten Posts
 * - Query.post: Einzelner Post nach Slug
 * - Query.comments: Kommentare zu einem Post
 * - Mutation: Auth-Mutations (login, register)
 */

import prisma from '@/lib/prisma'; // Singleton nutzen!
import { authResolvers } from './authResolvers';

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

  Mutation: {
    // Auth Mutations (login, register)
    ...authResolvers.Mutation,
  }
};


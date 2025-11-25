/**
 * Homepage - Blog Post Liste
 * 
 * Server Component mit SSR:
 * - Posts werden bei jedem Request aus der Datenbank geladen
 * - Async/Await für Prisma Queries
 * - PostsClient ist Client Component für interaktive Features (Favorites)
 */
import prisma from '@/lib/prisma';
import PostsClient from '@/components/PostsClient';
import LogoutButton from '@/components/LogoutButton';

export default async function Home() {
  // 1. Posts aus Datenbank laden (SSR - wird bei jedem Request ausgeführt)
  const posts = await prisma.post.findMany({ 
    where: { published: true },
    orderBy: { createdAt: 'desc' } // Neueste zuerst
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Blog Posts
          </h1>
          <LogoutButton />
        </div>
        <PostsClient posts={posts} />
      </main>
    </div>
  );
}


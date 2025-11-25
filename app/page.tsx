/**
 * Homepage - Blog Post Liste
 * 
 * TODO (Kapitel 8 - SSR):
 * - Server Component nutzen für SSR ✅ (ist bereits async)
 * - Posts aus Prisma laden ✅ (bereits gemacht)
 * - Posts-Liste rendern mit Link zu Detail-Seiten (DEINE AUFGABE)
 * 
 * Hinweise:
 * - Async Server Component möglich! ✅
 * - import prisma from '@/lib/prisma' ✅
 * - await prisma.post.findMany({ where: { published: true } }) ✅
 * - Link: import Link from 'next/link' ✅
 * 
 * WICHTIG für Next.js 13+ Links:
 * - KEIN <a> mehr in <Link> wrappen!
 * - Richtig: <Link href="/posts/slug">Text</Link>
 * - Falsch: <Link href="/posts/slug"><a>Text</a></Link>
 */
import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  // 1. Posts aus Datenbank laden (SSR - wird bei jedem Request ausgeführt)
  const posts = await prisma.post.findMany({ 
    where: { published: true },
    orderBy: { createdAt: 'desc' } // Neueste zuerst
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          Blog Posts
        </h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="border-b border-gray-200 dark:border-gray-800 pb-6"
            >
              <Link 
                href={`/posts/${post.slug}`}
                className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {new Date(post.createdAt).toLocaleDateString('de-DE')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}


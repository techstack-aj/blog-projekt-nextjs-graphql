/**
 * Homepage - Blog Post Liste
 * 
 * TODO (Kapitel 8 - SSR):
 * - Server Component nutzen für SSR
 * - Posts aus Prisma laden (oder via GraphQL Query)
 * - Posts-Liste rendern mit Link zu Detail-Seiten
 * 
 * Hinweise:
 * - Async Server Component möglich!
 * - import prisma from '@/lib/prisma'
 * - await prisma.post.findMany({ where: { published: true } })
 * - Link: import Link from 'next/link'
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          Blog Posts
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          📝 Hier implementierst du später die Posts-Liste mit SSR (Server-Side Rendering)
        </p>

        <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
          <p className="text-gray-500 dark:text-gray-500">
            Deine Implementierung kommt hier hin...
          </p>
        </div>
      </main>
    </div>
  );
}


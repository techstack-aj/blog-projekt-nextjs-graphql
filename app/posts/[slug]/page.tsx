/**
 * Blog Post Detail Seite (Dynamic Route)
 * 
 * SSG (Static Site Generation):
 * - generateStaticParams() läuft beim BUILD (npm run build)
 * - Generiert HTML für jeden Post ZUR BUILD-ZEIT
 * - Ergebnis: Mega schnelle Seiten, keine DB-Abfragen beim Besuch!
 */

import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// SCHRITT 1: Welche Seiten soll Next.js generieren?
// Diese Funktion läuft beim BUILD und sagt Next.js: "Generiere eine Seite für jeden dieser Slugs"
export async function generateStaticParams() {
  // Alle Posts aus der DB holen
  const posts = await prisma.post.findMany({
    where: { published: true },
  });

  // Nur die Slugs zurückgeben (Next.js braucht Array von { slug: 'wert' })
  return posts.map((post) => ({
    slug: post.slug, // z.B. { slug: 'getting-started-nextjs' }
  }));
}

// SCHRITT 2: Post-Daten laden und anzeigen
// Diese Funktion wird für JEDEN Slug aus generateStaticParams() aufgerufen
export default async function PostPage({
  params, // Next.js gibt uns automatisch { slug: 'der-slug-aus-url' }
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 15+: params ist eine Promise
  const { slug } = await params;

  // Post aus DB laden (mit Kommentaren)
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { comments: true }, // Kommentare auch laden
  });

  // Wenn Post nicht existiert → 404 Seite
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto py-16 px-4">
        {/* Zurück-Link */}
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Zurück zur Übersicht
        </Link>

        {/* Post Titel */}
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          {post.title}
        </h1>

        {/* Datum */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
          Veröffentlicht am {new Date(post.createdAt).toLocaleDateString('de-DE')}
        </p>

        {/* Post Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {post.content}
          </p>
        </div>

        {/* Kommentare Sektion */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            Kommentare ({post.comments.length})
          </h2>

          {post.comments.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-500">
              Noch keine Kommentare vorhanden.
            </p>
          ) : (
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div 
                  key={comment.id}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
                >
                  <p className="font-semibold text-black dark:text-white">
                    {comment.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(comment.createdAt).toLocaleDateString('de-DE')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

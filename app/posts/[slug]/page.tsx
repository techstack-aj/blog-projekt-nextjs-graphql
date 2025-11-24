/**
 * Blog Post Detail Seite (Dynamic Route)
 * 
 * TODO (Kapitel 8 - SSG):
 * - generateStaticParams() implementieren für alle Posts
 * - Post-Daten via Prisma laden (oder GraphQL)
 * - Post-Content + Kommentare anzeigen
 * 
 * Hinweise:
 * - export async function generateStaticParams() { return [...] }
 * - params: { slug: string }
 * - await prisma.post.findUnique({ where: { slug }, include: { comments: true } })
 * - notFound() bei fehlendem Post
 */

export default function PostPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          Post Titel
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          📄 Hier implementierst du später die Post-Detail-Seite mit SSG (Static Site Generation)
        </p>

        <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
          <p className="text-gray-500 dark:text-gray-500">
            Post-Content kommt hier hin...
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
            Kommentare
          </h2>
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8">
            <p className="text-gray-500 dark:text-gray-500">
              Kommentare kommen hier hin...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

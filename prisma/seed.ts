import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Alte Daten löschen
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();

  // 5 Beispiel-Posts erstellen
  const posts = [
    {
      title: 'Getting Started with Next.js',
      slug: 'getting-started-nextjs',
      excerpt: 'Learn the basics of Next.js and React Server Components.',
      content: 'Next.js is a powerful React framework that enables server-side rendering and static site generation. In this post, we will explore the fundamentals...',
      published: true,
    },
    {
      title: 'Introduction to GraphQL',
      slug: 'introduction-graphql',
      excerpt: 'Understanding GraphQL and its advantages over REST APIs.',
      content: 'GraphQL is a query language for APIs that provides a complete and understandable description of the data in your API...',
      published: true,
    },
    {
      title: 'Apollo Client Best Practices',
      slug: 'apollo-client-best-practices',
      excerpt: 'Tips and tricks for using Apollo Client effectively.',
      content: 'Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL...',
      published: true,
    },
    {
      title: 'Server-Side Rendering with Next.js',
      slug: 'ssr-nextjs',
      excerpt: 'Deep dive into SSR and its benefits for performance and SEO.',
      content: 'Server-Side Rendering (SSR) is a technique that renders pages on the server before sending them to the client...',
      published: true,
    },
    {
      title: 'Static Site Generation Explained',
      slug: 'ssg-explained',
      excerpt: 'Learn when and how to use Static Site Generation.',
      content: 'Static Site Generation (SSG) is a method of pre-rendering pages at build time, which can significantly improve performance...',
      published: true,
    },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: {
        ...post,
        comments: {
          create: [
            {
              content: 'Great article! Very helpful.',
              author: 'Max Mustermann',
            },
            {
              content: 'Thanks for sharing this information.',
              author: 'Anna Schmidt',
            },
          ],
        },
      },
    });
  }

  console.log('✅ Seed erfolgreich: 5 Posts mit Kommentaren erstellt!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

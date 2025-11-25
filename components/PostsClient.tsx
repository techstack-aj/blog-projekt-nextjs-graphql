'use client';

/**
 * Client Wrapper für Homepage
 * 
 * WARUM: app/page.tsx ist ein Server Component (async)
 * FavoriteButton und FavoritesList sind Client Components
 * → Wir brauchen einen Client-Wrapper dazwischen
 */

import FavoriteButton from '@/components/FavoriteButton';
import FavoritesList from '@/components/FavoritesList';
import { loadFavoritesFromLocalStorage } from '@/lib/graphql/localState';
import { useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: Date;
}

interface PostsClientProps {
  posts: Post[];
}

export default function PostsClient({ posts }: PostsClientProps) {
  // Favoriten beim Start aus localStorage laden
  useEffect(() => {
    loadFavoritesFromLocalStorage();
  }, []);

  return (
    <>
      <FavoritesList />

      <div className="space-y-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="border-b border-gray-200 dark:border-gray-800 pb-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
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
              </div>
              <FavoriteButton postId={post.id} postTitle={post.title} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

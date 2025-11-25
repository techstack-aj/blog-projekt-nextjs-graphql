'use client';

import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import ApolloProviderWrapper from '@/lib/graphql/ApolloProviderWrapper';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      slug
      excerpt
      published
      createdAt
    }
  }
`;

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published: boolean;
  createdAt: string;
}

function PostsList() {
  const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS);

  if (loading) return <p className="text-black dark:text-white">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <>
      <div className="space-y-4">
        {data?.posts.map((post: Post) => (
          <div 
            key={post.id} 
            className="border border-gray-200 dark:border-gray-800 p-4 rounded"
          >
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {post.excerpt}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Slug: {post.slug} | Published: {post.published ? '✅' : '❌'}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-green-600 font-semibold">
        ✅ Apollo Client funktioniert!
      </p>
    </>
  );
}

export default function TestApolloPage() {
  return (
    <ApolloProviderWrapper>
      <div className="min-h-screen bg-white dark:bg-black p-8">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Apollo Client Test
        </h1>
        <PostsList />
      </div>
    </ApolloProviderWrapper>
  );
}


'use client';

/**
 * Favoriten-Liste Komponente
 * 
 * LERNZIEL (Kapitel 6.3):
 * - Reactive Variables für Listen nutzen
 * - Automatisches Re-Rendering bei Änderungen
 * - Kombination mit GraphQL Queries (optional)
 */

import { useReactiveVar } from '@apollo/client/react';
import { favoritesVar, removeFavorite } from '@/lib/graphql/localState';

export default function FavoritesList() {
  const favorites: number[] = useReactiveVar(favoritesVar);

  if (favorites.length === 0) {
    return (
      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Noch keine Favoriten. Markiere Posts mit dem ⭐ Button!
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Deine Favoriten ({favorites.length})
      </h2>

      <ul className="space-y-2">
        {favorites.map((postId) => (
          <li 
            key={postId}
            className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded"
          >
            <span className="text-gray-700 dark:text-gray-300">
              Post ID: {postId}
            </span>
            
            <button
              onClick={() => removeFavorite(postId)}
              className="text-red-600 hover:text-red-800 dark:text-red-400"
            >
              Entfernen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

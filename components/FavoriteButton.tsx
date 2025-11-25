'use client';

/**
 * Favorite Button Komponente
 * 
 * LERNZIEL (Kapitel 6.3):
 * - useReactiveVar() Hook nutzen
 * - Reactive Variables in React Components verwenden
 * - UI automatisch bei State-Änderungen updaten
 */

import { useReactiveVar } from '@apollo/client/react';
import { favoritesVar, addFavorite, removeFavorite } from '@/lib/graphql/localState';

interface FavoriteButtonProps {
  postId: number;
  postTitle: string;
}

export default function FavoriteButton({ postId, postTitle }: FavoriteButtonProps) {
  const favorites = useReactiveVar(favoritesVar);
  const isFavorite = favorites.includes(postId);

  const handleToggle = () => {
    if (isFavorite) {
      removeFavorite(postId);
    } else {
      addFavorite(postId);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded-lg border-2 transition-colors"
      aria-label={`Toggle favorite for ${postTitle}`}
    >
      {isFavorite ? '⭐ Favorit entfernen' : '☆ Als Favorit markieren'}
    </button>
  );
}

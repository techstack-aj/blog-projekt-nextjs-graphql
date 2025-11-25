/**
 * Apollo Local State Management (Kapitel 6.3)
 * 
 * Reactive Variables für lokalen State ohne Server
 */

import { makeVar } from '@apollo/client';

export const favoritesVar = makeVar<number[]>([]);

export const addFavorite = (postId: number) => {
    const current = favoritesVar(); // Aktuellen Wert lesen
    if (!current.includes(postId)) {
      favoritesVar([...current, postId]); // Neuen Wert setzen
      saveFavoritesToLocalStorage(); // In localStorage speichern
    }
  };

export const removeFavorite = (postId: number) => {
    const current = favoritesVar();
    favoritesVar(current.filter(id => id !== postId));
    saveFavoritesToLocalStorage(); // In localStorage speichern
  };

export const isFavorite = (postId: number): boolean => {
    return favoritesVar().includes(postId);
  };

export const loadFavoritesFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites');
        if (stored) {
            favoritesVar(JSON.parse(stored));
        }
    }
};

// Speichert die aktuellen Favoriten in den localStorage
export const saveFavoritesToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const favorites = favoritesVar();
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

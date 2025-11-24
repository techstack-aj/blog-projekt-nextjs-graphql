/**
 * Apollo Client Konfiguration
 * 
 * Der Client ermöglicht React-Komponenten, GraphQL-Queries zu senden.
 * 
 * Was passiert hier:
 * 1. HttpLink = Verbindung zum GraphQL Server
 * 2. InMemoryCache = Caching der Daten (Performance!)
 * 3. ApolloClient = Kombiniert Link + Cache
 */

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Singleton Pattern: Client nur einmal erstellen
let client: ApolloClient | null = null;

export function getApolloClient() {
  // Wenn Client schon existiert, wiederverw
  if (client) {
    return client;
  }

  // HttpLink = Verbindung zum Server
  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/api/graphql', // Dein GraphQL Endpoint
    credentials: 'same-origin', // Cookies mitsenden
  });

  // Client erstellen
  client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    // Für SSR: Cache nicht im Browser speichern
    ssrMode: typeof window === 'undefined',
  });

  return client;
}

// Default Export für einfache Nutzung
export default getApolloClient();


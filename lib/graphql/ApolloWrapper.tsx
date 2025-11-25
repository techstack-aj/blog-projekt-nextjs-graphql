'use client';

/**
 * Apollo Provider Wrapper (Kapitel 6)
 * 
 * Stellt Apollo Client für alle Komponenten bereit
 */

import { ApolloProvider } from '@apollo/client/react';
import { getApolloClient } from './apollo-client';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const client = getApolloClient();
  
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

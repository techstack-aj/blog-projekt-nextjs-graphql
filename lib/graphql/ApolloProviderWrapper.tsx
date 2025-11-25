'use client';

import { ApolloProvider } from '@apollo/client/react';
import { getApolloClient } from '@/lib/graphql/apollo-client';

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = getApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

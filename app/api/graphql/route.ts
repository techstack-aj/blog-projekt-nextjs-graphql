/**
 * Apollo Server API Route
 * 
 * TODO (Kapitel 6):
 * - ApolloServer mit Schema + Resolvers konfigurieren
 * - startServerAndCreateNextHandler() nutzen
 * - POST + GET Handler exportieren
 * 
 * Hinweise:
 * - Import: import { ApolloServer } from '@apollo/server'
 * - Import: import { startServerAndCreateNextHandler } from '@apollo/server/integrations/next'
 * - Schema und Resolvers aus lib/graphql/* importieren
 * - Beide HTTP-Methoden exportieren: export async function GET/POST
 */

// DEINE IMPLEMENTIERUNG HIER

export async function GET() {
  return Response.json({ message: 'Apollo Server noch nicht konfiguriert' });
}

export async function POST() {
  return Response.json({ message: 'Apollo Server noch nicht konfiguriert' });
}

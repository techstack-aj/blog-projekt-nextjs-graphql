/**
 * Apollo Server API Route (Next.js App Router)
 * 
 * Einfacher Ansatz ohne @as-integrations/next
 * Apollo Server startet bei jedem Request neu (für Entwicklung OK)
 */

import { ApolloServer } from '@apollo/server';
import { combinedTypeDefs } from '@/lib/graphql/schema';
import { resolvers } from '@/lib/graphql/resolvers';

// Server erstellen
const server = new ApolloServer({
  typeDefs: combinedTypeDefs,
  resolvers,
  introspection: true, // GraphQL Playground aktivieren
});

// Server nur einmal starten
let serverStarted = false;

// Handler für Next.js
async function handler(request: Request) {
  // Server starten (nur beim ersten Aufruf)
  if (!serverStarted) {
    await server.start();
    serverStarted = true;
  }
  
  // Request parsen
  const body = await request.json();
  
  // Apollo Server ausführen
  const response = await server.executeOperation({
    query: body.query,
    variables: body.variables,
  });

  // Response zurückgeben (body.singleResult enthält die Daten)
  if (response.body.kind === 'single') {
    return Response.json(response.body.singleResult);
  }

  return Response.json({ errors: [{ message: 'Invalid response format' }] });
}

export async function GET(request: Request) {
  // GraphQL Playground HTML
  return new Response(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>GraphQL Playground</title>
      </head>
      <body style="margin:0;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;">
        <h1>GraphQL Server läuft! ✅</h1>
        <p>Nutze POST /api/graphql für Queries</p>
        <p>Oder nutze ein Tool wie Apollo Studio oder Postman</p>
        <pre style="background:#f5f5f5;padding:20px;border-radius:8px;">
{
  "query": "{ posts { id title slug } }"
}
        </pre>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
}

export async function POST(request: Request) {
  return handler(request);
}

/**
 * GraphQL Resolvers für Authentifizierung (Kapitel 6.4)
 * 
 * Features:
 * - login Resolver: Validiert Credentials, generiert JWT Token
 * - register Resolver: Gibt Demo User zurück
 * - Hardcoded Demo-User für Schulungszwecke (test@test.de / 123456)
 * 
 * WICHTIG: In Production würde man Prisma + bcrypt nutzen!
 */

import jwt from 'jsonwebtoken';

const DEMO_USER = {
  id: 1,
  username: 'Demo User',
  email: 'test@test.de',
  password: '123456',
};

const SECRET_KEY = 'dein-super-geheimer-schluessel';

// Auth Resolvers
export const authResolvers = {
  Mutation: {
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      // 1. User prüfen
      // 2. Passwort prüfen
        if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
          throw new Error('Ungültige Anmeldedaten');
        }
      // 3. Token generieren
        const token = jwt.sign({ userId: DEMO_USER.id }, SECRET_KEY, { expiresIn: '7d' });
      
      // 4. { token, user } zurückgeben
        return { token, user: { id: DEMO_USER.id, username: DEMO_USER.username, email: DEMO_USER.email } };
    },
    
    register: async (_: any, { username, email, password }: any) => {
      // Für Demo: Nutze einfach den DEMO_USER
        const token = jwt.sign({ userId: DEMO_USER.id }, SECRET_KEY, { expiresIn: '7d' });
      // In echt: Neuen User in DB anlegen
        return { token, user: { id: DEMO_USER.id, username, email } };
    },
  },
};

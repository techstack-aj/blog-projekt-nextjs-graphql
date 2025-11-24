# Next.js Blog - GraphQL + SSR Übungsprojekt

Minimales Setup für Kapitel 6 (GraphQL) und Kapitel 8 (Server-Side Rendering) Schulung.

## 🎯 Projektziel

Du implementierst **SELBST** alle GraphQL- und SSR-Features. Dieses Setup bietet nur die Struktur!

## ✅ Was ist fertig

- ✅ Next.js 14 TypeScript Projekt
- ✅ Dependencies installiert (@apollo/client, @apollo/server, graphql, prisma)
- ✅ Prisma Schema (Post + Comment Models)
- ✅ Seed-Datei mit 5 Beispiel-Posts (läuft!)
- ✅ Leere Struktur-Dateien mit TODO-Kommentaren
- ✅ Basis-Pages mit Platzhaltern

## 📂 Projektstruktur

```
blog-projekt/
├── app/
│   ├── api/
│   │   └── graphql/
│   │       └── route.ts          # TODO: Apollo Server Setup
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx          # TODO: SSG Detail-Seite
│   ├── layout.tsx                # ✅ Fertig
│   └── page.tsx                  # TODO: SSR Homepage
├── lib/
│   ├── graphql/
│   │   ├── apollo-client.ts      # TODO: Client Config
│   │   ├── schema.ts             # TODO: GraphQL Schema
│   │   └── resolvers.ts          # TODO: Resolvers
│   └── prisma.ts                 # ✅ Fertig (Singleton)
├── prisma/
│   ├── schema.prisma             # ✅ Fertig (Post + Comment)
│   ├── seed.ts                   # ✅ Fertig (5 Posts)
│   └── dev.db                    # ✅ SQLite DB
└── package.json
```

## 🚀 Starten

```bash
npm run dev
# Öffne: http://localhost:3000
```

## 📝 Deine Aufgaben (Schritt für Schritt)

### Kapitel 6: GraphQL mit Apollo

1. **GraphQL Schema erstellen** (`lib/graphql/schema.ts`)
   - Type Definitions für Post + Comment
   - Queries + Mutations definieren

2. **Resolvers implementieren** (`lib/graphql/resolvers.ts`)
   - Posts laden via Prisma
   - Post by Slug finden
   - Kommentare laden

3. **Apollo Server einrichten** (`app/api/graphql/route.ts`)
   - Server mit Schema + Resolvers
   - Next.js Handler konfigurieren

4. **Apollo Client konfigurieren** (`lib/graphql/apollo-client.ts`)
   - InMemoryCache + HttpLink
   - SSR-fähiger Client

### Kapitel 8: Server-Side Rendering

5. **Homepage mit SSR** (`app/page.tsx`)
   - Server Component (async)
   - Posts aus Prisma laden
   - Liste rendern

6. **Detail-Seite mit SSG** (`app/posts/[slug]/page.tsx`)
   - generateStaticParams implementieren
   - Post + Kommentare laden
   - Content anzeigen

## 🗄️ Datenbank

**Befehle:**
```bash
# Migration erstellen
npm run prisma:migrate

# Datenbank seeden (5 Posts)
npm run prisma:seed

# Prisma Studio öffnen
npx prisma studio
```

**Models:**
- `Post`: id, title, slug, content, excerpt, published, createdAt, updatedAt
- `Comment`: id, content, author, postId, createdAt

## 💡 Hilfreiche Tipps

- **Prisma Client importieren:** `import prisma from '@/lib/prisma'`
- **GraphQL Playground:** http://localhost:3000/api/graphql (nach Server-Setup)
- **Server Components:** Können direkt `await prisma.post.findMany()` nutzen
- **generateStaticParams:** Gibt Array mit `{ slug: string }[]` zurück

## 🧪 Testing

1. GraphQL Endpoint testen: http://localhost:3000/api/graphql
2. Homepage testen: http://localhost:3000
3. Post-Detail testen: http://localhost:3000/posts/getting-started-nextjs

## 📚 Nächste Schritte

Frage mich nach jedem Schritt, was als nächstes zu tun ist! 🚀

---

**Viel Erfolg beim Üben! 💪**


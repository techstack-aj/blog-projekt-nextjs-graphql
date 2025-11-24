# 🎯 NÄCHSTE SCHRITTE - Blog-Projekt Übung

## ✅ Setup abgeschlossen!

Der Dev-Server läuft auf: **http://localhost:3000**

---

## 📋 Was du jetzt tun solltest

### 1️⃣ **Starte mit Kapitel 6: GraphQL**

**Reihenfolge:**

#### Schritt 1: GraphQL Schema definieren
📁 Datei: `lib/graphql/schema.ts`

**Aufgabe:**
- Type Definitions mit `gql` erstellen
- Post + Comment Typen definieren
- Queries definieren: `posts`, `post(slug: String!)`, `comments(postId: Int!)`

**Frag mich:** "Wie erstelle ich das GraphQL Schema?"

---

#### Schritt 2: Resolvers implementieren
📁 Datei: `lib/graphql/resolvers.ts`

**Aufgabe:**
- Query Resolver schreiben
- Prisma Client für DB-Zugriff nutzen
- Posts + Kommentare laden

**Frag mich:** "Wie implementiere ich die Resolvers?"

---

#### Schritt 3: Apollo Server einrichten
📁 Datei: `app/api/graphql/route.ts`

**Aufgabe:**
- ApolloServer instanziieren
- Schema + Resolvers verbinden
- Next.js Handler exportieren (GET + POST)

**Frag mich:** "Wie richte ich den Apollo Server ein?"

---

#### Schritt 4: Apollo Client konfigurieren
📁 Datei: `lib/graphql/apollo-client.ts`

**Aufgabe:**
- ApolloClient mit InMemoryCache
- HttpLink auf `/api/graphql` zeigen lassen
- SSR-fähig machen

**Frag mich:** "Wie konfiguriere ich den Apollo Client?"

---

### 2️⃣ **Dann: Kapitel 8: Server-Side Rendering**

#### Schritt 5: Homepage mit SSR
📁 Datei: `app/page.tsx`

**Aufgabe:**
- Async Server Component
- Posts aus Prisma laden
- Liste mit Links zu Detail-Seiten

**Frag mich:** "Wie implementiere ich SSR auf der Homepage?"

---

#### Schritt 6: Detail-Seite mit SSG
📁 Datei: `app/posts/[slug]/page.tsx`

**Aufgabe:**
- `generateStaticParams()` für alle Posts
- Post + Kommentare laden
- Content anzeigen

**Frag mich:** "Wie implementiere ich SSG für die Detail-Seiten?"

---

## 💡 Wichtige Befehle

```bash
# Dev Server starten
npm run dev

# Datenbank anschauen
npx prisma studio

# Neue Posts seeden
npm run prisma:seed

# Migration erstellen (bei Schema-Änderungen)
npm run prisma:migrate
```

---

## 🚀 Starte jetzt!

**Frage mich einfach:**
> "Was ist der erste Schritt für das GraphQL Schema?"

oder

> "Zeig mir, wie ich mit Schritt 1 anfange"

---

## 📦 Alle Dateien mit TODOs

- ✅ `lib/prisma.ts` (Fertig!)
- ❌ `lib/graphql/schema.ts`
- ❌ `lib/graphql/resolvers.ts`
- ❌ `lib/graphql/apollo-client.ts`
- ❌ `app/api/graphql/route.ts`
- ❌ `app/page.tsx`
- ❌ `app/posts/[slug]/page.tsx`

**Viel Erfolg! 💪**

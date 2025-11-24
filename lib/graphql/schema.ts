/**
 * GraphQL Schema Definition
 * 
 * Das Schema definiert:
 * 1. Welche Datentypen existieren (Post, Comment)
 * 2. Welche Queries möglich sind (Daten abfragen)
 * 3. Welche Felder jeder Type hat
 */

import { gql } from 'graphql-tag';

// Type Definitions = Die Struktur deiner API
export const typeDefs = gql`
  # Post Type - entspricht dem Prisma Model
  type Post {
    id: Int!              # ! = Pflichtfeld (nie null)
    title: String!
    slug: String!
    content: String!
    excerpt: String!
    published: Boolean!
    createdAt: String!    # DateTime als String
    updatedAt: String!
    comments: [Comment!]! # Array von Comments
  }

  # Comment Type - entspricht dem Prisma Model
  type Comment {
    id: Int!
    content: String!
    author: String!
    postId: Int!
    post: Post!           # Relation zum Post
    createdAt: String!
  }

  # Query Type - Welche Abfragen sind möglich?
  type Query {
    posts: [Post!]!                    # Alle Posts (Array, nie null)
    post(slug: String!): Post          # Ein Post (kann null sein, wenn nicht gefunden)
    comments(postId: Int!): [Comment!]! # Alle Comments eines Posts
  }
`;


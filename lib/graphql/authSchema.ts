/**
 * GraphQL Schema Erweiterung für Authentifizierung (Kapitel 6.4)
 * 
 * Definiert:
 * - User Type (id, username, email)
 * - AuthPayload Type (token + user)
 * - Mutation Types (login, register)
 */

import { gql } from 'graphql-tag';

export const authTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    register(username: String!, email: String!, password: String!): AuthPayload!
  }
`;
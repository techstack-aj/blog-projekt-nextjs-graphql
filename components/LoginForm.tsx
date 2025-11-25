'use client';

/**
 * Login Komponente (Kapitel 6.4)
 * 
 * Features:
 * - GraphQL Login Mutation mit useMutation Hook
 * - Auth Context Integration (speichert Token + User)
 * - Weiterleitung zur Homepage nach erfolgreichem Login
 * - Demo-Zugangsdaten: test@test.de / 123456
 */

import { useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
          id
          username
          email
        }
    }
  }
`;

interface LoginData {
  login: {
    token: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
  };
}

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login: authLogin } = useAuth();
    const router = useRouter();
    const [login, { loading, error }] = useMutation<LoginData>(LOGIN_MUTATION);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await login({ variables: { email, password } });
            // Token + User im Context speichern
            if (data?.login) {
                authLogin(data.login.token, data.login.user);
                // Weiterleitung zur Homepage
                router.push('/');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Login</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded"
                disabled={loading}
                onClick={handleSubmit}
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && (
            <p className="mt-4 text-sm text-red-500">{error.message}</p>
            )}
            {loading && (
                <p className="mt-4 text-sm text-gray-500">Logging in...</p>
            )}
        
        <p className="mt-4 text-sm text-gray-500">
            Demo: test@test.de / 123456
        </p>
        </form>
    );
}

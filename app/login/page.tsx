'use client';

/**
 * Login Page (Kapitel 6.4)
 * 
 * Einfache zentrierte Login-Seite mit LoginForm Komponente
 */

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <LoginForm />
    </div>
  );
}

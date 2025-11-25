'use client';

/**
 * Logout Button
 * 
 * Features:
 * - Nutzt Auth Context zum Ausloggen
 * - Löscht Token aus localStorage
 * - Weiterleitung zur Login-Page
 */

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/login'); // Optional: Weiterleitung
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}

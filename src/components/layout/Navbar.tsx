import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              FarmersMarket
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/products" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Products
              </Link>
              {session?.user.role === 'farmer' && (
                <Link href="/dashboard" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span>{session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link href="/auth/signin" className="hover:bg-green-700 px-3 py-2 rounded-md">
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Connect Directly with Farmers
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Buy fresh produce directly from farmers. Support local agriculture and get the best prices
          without intermediaries.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/products"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
          >
            Browse Products
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Register as Farmer <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature Cards */}
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Direct Sales</h3>
          <p className="mt-2 text-gray-600">
            Sell your produce directly to consumers and get better prices
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p className="mt-2 text-gray-600">
            Safe and secure payment processing for all transactions
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold">Price Negotiation</h3>
          <p className="mt-2 text-gray-600">
            Negotiate prices directly with buyers in real-time
          </p>
        </div>
      </div>
    </div>
  );
} 
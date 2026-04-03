import { ChevronDown, ShoppingCart, Bell } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                Hi <Link to="/signin" className="text-blue-600 hover:text-blue-700">Sign in</Link> or{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-700">register</Link>
              </span>
              <Link to="/search" className="text-gray-700 hover:text-gray-900 hidden sm:inline">Daily Deals</Link>
              <button className="text-gray-700 hover:text-gray-900 hidden sm:inline">Brand Outlet</button>
              <button className="text-gray-700 hover:text-gray-900 hidden sm:inline">Help & Contact</button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-gray-900 hidden sm:inline">Ship to</button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                <span className="hidden sm:inline">English</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <Link to="/sell" className="text-gray-700 hover:text-gray-900 hidden sm:inline">Sell</Link>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                <span className="hidden sm:inline">Watchlist</span>
                <ChevronDown className="w-3 h-3 hidden sm:inline" />
              </button>
              <Link to="/account" className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                <span className="hidden sm:inline">My eBay</span>
                <Bell className="w-4 h-4 sm:hidden" />
              </Link>
              <Link to="/checkout" className="flex items-center text-gray-700 hover:text-gray-900">
                <ShoppingCart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
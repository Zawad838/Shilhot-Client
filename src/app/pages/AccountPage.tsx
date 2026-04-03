import { Link } from 'react-router';
import { Star, Package, TrendingUp, MessageSquare, Plus } from 'lucide-react';
import accountImage from 'figma:asset/f4e60e9fbe45365b5204006c667b774800a6b3bc.png';

export function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <Link to="/sell" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Sell</Link>
              <Link to="/account" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Account</Link>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <img src="https://i.pravatar.cc/40?img=12" alt="Profile" className="w-full h-full rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Alex Rivera"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
                <span className="absolute bottom-0 right-0 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                  PRO
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Alex Rivera</h1>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">4.9</span>
                    <span className="text-sm text-gray-600">(124 reviews)</span>
                  </div>
                </div>
                <p className="text-gray-600">MEMBER SINCE 2021</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">BUYER RATING</p>
                <p className="text-2xl font-bold text-gray-900">100%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">ACTIVE SALES</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">ACTIVE BIDS</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button className="px-1 py-4 text-blue-600 font-semibold border-b-2 border-blue-600">
              ACTIVITY
            </button>
            <button className="px-1 py-4 text-gray-600 hover:text-gray-900 font-semibold border-b-2 border-transparent">
              MESSAGES
            </button>
            <button className="px-1 py-4 text-gray-600 hover:text-gray-900 font-semibold border-b-2 border-transparent">
              SELLING
            </button>
            <button className="px-1 py-4 text-gray-600 hover:text-gray-900 font-semibold border-b-2 border-transparent">
              ACCOUNT SETTINGS
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Bids */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  ACTIVE BIDS
                </h2>
                <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=100"
                    alt="Product"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Chronos Series 4 Silver Edition</h3>
                    <p className="text-sm text-gray-600">Ending in <span className="text-red-600 font-semibold">02h 45m</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">$1,240.00</p>
                    <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                      Winning
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1767440557855-79d85bd685ac?w=100"
                    alt="Product"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Velocity Max Pro - Limited Red</h3>
                    <p className="text-sm text-gray-600">Ending in <span className="text-red-600 font-semibold">14h 12m</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">$345.00</p>
                    <span className="inline-block mt-1 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                      Outbid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Purchases */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  RECENT PURCHASES
                </h2>
                <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Full History
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1588693951525-7b0be0fc710f?w=100"
                      alt="Product"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Elite Noise-Cancelling Headphones</h3>
                    <p className="text-sm text-gray-600">$289.00</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">DELIVERED OCT 12</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold">
                      Track Order
                    </button>
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                      Leave Review
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1575998256834-2d841f0d7ede?w=100"
                      alt="Product"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Vintage 35mm Film Camera</h3>
                    <p className="text-sm text-gray-600">$150.00</p>
                    <p className="text-xs text-blue-600 font-semibold mt-1">SHIPPED OCT 14</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Selling Overview */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <h3 className="text-sm font-semibold mb-2 opacity-90">SELLING OVERVIEW</h3>
              <div className="text-4xl font-bold mb-4">$4,820.50</div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-90">Current Balance</span>
                  <span className="font-semibold">$1,420.00</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '65%' }}></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="opacity-75">PAYOUT PROGRESS</span>
                  <span className="font-semibold">65%</span>
                </div>
              </div>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-colors">
                Withdraw Funds
              </button>
            </div>

            {/* Current Listings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">CURRENT LISTINGS (12)</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    8
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Bids on "Pro Workstation"</p>
                    <p className="text-xs text-gray-600">High Bid: $2,400</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    24
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Watchers on "L-Desk"</p>
                    <p className="text-xs text-gray-600">List Price: $450</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-2 -mx-2">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">NEW</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Organic Coffee Set</p>
                    <p className="text-xs text-gray-600">Awaiting first bid</p>
                  </div>
                </div>
              </div>
              <Link
                to="/sell"
                className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                CREATE NEW LISTING
              </Link>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">RECENT MESSAGES</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="Sarah"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="font-semibold text-sm text-gray-900">Sarah J.</p>
                      <span className="text-xs text-gray-500">2m ago</span>
                    </div>
                    <p className="text-sm text-gray-600">Is the item still available for local pickup?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src="https://i.pravatar.cc/40?img=8"
                    alt="Marcus"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="font-semibold text-sm text-gray-900">Marcus T.</p>
                      <span className="text-xs text-gray-500">1h ago</span>
                    </div>
                    <p className="text-sm text-gray-600">Thanks! Looking forward to receiving the package.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Precision Exchange</h3>
              <p className="text-sm text-gray-600">© 2024 PRECISION EXCHANGE. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <Link to="#" className="hover:text-blue-600">POLICIES</Link>
              <Link to="#" className="hover:text-blue-600">TERMS OF USE</Link>
              <Link to="#" className="hover:text-blue-600">HELP & CONTACT</Link>
              <Link to="#" className="hover:text-blue-600">SITE MAP</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

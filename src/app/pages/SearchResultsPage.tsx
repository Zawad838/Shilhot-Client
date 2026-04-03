import { Link } from 'react-router';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import searchImage from 'figma:asset/d35517da48c2ca9377eec290fa64d6f33163af85.png';

export function SearchResultsPage() {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?w=400',
      title: 'HHKB Professional Hybrid Type-S - Snow Edition',
      price: '$285.00',
      originalPrice: '$340',
      badge: '< 3H LEFT',
      badgeColor: 'bg-red-100 text-red-600',
      condition: 'MINT',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=400',
      title: 'Minimalist Precision Series 04 Chronograph',
      price: '$549.99',
      originalPrice: '$611 BUY IT NOW',
      badge: 'BUY LATER SAVE',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      condition: 'NEW',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1692246427978-e9b094f6fa8c?w=400',
      title: 'Reference Grade Studio Monitor Set (Pair)',
      price: '$1,240.00',
      originalPrice: '$1,899',
      badge: '+ $25 LEFT',
      badgeColor: 'bg-blue-100 text-blue-600',
      condition: 'USED',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1767440557855-79d85bd685ac?w=400',
      title: 'Elite Velocity Pro Performance Trainers',
      price: '$185.00',
      originalPrice: 'BUY IT NOW',
      badge: 'FREE SHIPPING',
      badgeColor: 'bg-green-100 text-green-700',
      condition: 'NEW',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1575998256834-2d841f0d7ede?w=400',
      title: "Collector's Edition Retro Instant Camera",
      price: '$112.50',
      originalPrice: '8 BIDS',
      badge: '< 1D LEFT',
      badgeColor: 'bg-red-100 text-red-600',
      condition: 'MINT',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=400',
      title: 'Heritage Leather Field Watch - Brown/Brass',
      price: '$325.00',
      originalPrice: 'BUY IT NOW',
      badge: 'FREE SHIPPING',
      badgeColor: 'bg-green-100 text-green-700',
      condition: 'USED',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/search" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Explore</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Bidding</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Categories</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Deals</Link>
              </nav>
              <div className="flex items-center gap-3">
                <div className="relative hidden lg:block">
                  <input
                    type="text"
                    placeholder="Search for high-precision assets..."
                    className="w-96 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
            <span className="text-gray-400">FILTER RESULTS</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Link to="/" className="hover:text-blue-600">HOME</Link>
            <span>/</span>
            <Link to="/search" className="hover:text-blue-600">MARKETPLACE</Link>
            <span>/</span>
            <span className="font-semibold">SEARCH RESULTS</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700">Clear all</button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Mechanical Keyboards', count: 124 },
                    { name: 'Vintage Horology', count: 86 },
                    { name: 'Audio Equipment', count: 215 },
                  ].map((cat) => (
                    <label key={cat.name} className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                      <span className="flex-1">{cat.name}</span>
                      <span className="text-gray-500">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Price Range</h4>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <span className="text-gray-400">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Condition</h4>
                <div className="space-y-2">
                  {['New', 'Mint', 'Used'].map((condition, index) => (
                    <label key={condition} className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                      <input
                        type="radio"
                        name="condition"
                        defaultChecked={index === 0}
                        className="w-4 h-4 text-blue-600 border-gray-300"
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buying Format */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Buying Format</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                    <input type="radio" name="format" className="w-4 h-4 text-blue-600 border-gray-300" />
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <span>Auction</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                    <input type="radio" name="format" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300" />
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Buy It Now</span>
                  </label>
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Shipping</h4>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                  <span>Free Shipping Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Showing 1,429 Results</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                    Most Relevant
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <span className={`absolute top-3 left-3 ${product.badgeColor} text-xs font-bold px-2 py-1 rounded z-10`}>
                      {product.badge}
                    </span>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-gray-500">{product.condition}</span>
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2 h-10">
                      {product.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-xs text-gray-500">{product.originalPrice}</span>
                    </div>
                    {product.id === 1 && (
                      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm">
                        Place Bid
                      </button>
                    )}
                    {product.id === 2 && (
                      <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 rounded-lg text-sm">
                        Add to Cart
                      </button>
                    )}
                    {product.id === 3 && (
                      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm">
                        Bid Now
                      </button>
                    )}
                    {product.id === 4 && (
                      <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 rounded-lg text-sm">
                        Add to Cart
                      </button>
                    )}
                    {product.id === 5 && (
                      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm">
                        Place Bid
                      </button>
                    )}
                    {product.id === 6 && (
                      <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 rounded-lg text-sm">
                        Add to Cart
                      </button>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">48</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Precision Exchange</h3>
              <p className="text-xs text-gray-600">THE AUTHORITATIVE HIGH-DENSITY MARKETPLACE</p>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <Link to="#" className="hover:text-blue-600">POLICIES</Link>
              <Link to="#" className="hover:text-blue-600">TERMS OF USE</Link>
              <Link to="#" className="hover:text-blue-600">HELP & CONTACT</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-600">© 2024 PRECISION EXCHANGE. ALL RIGHTS RESERVED.</p>
            <Link to="#" className="text-xs text-gray-600 hover:text-blue-600 mt-2 inline-block">SITE MAP</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

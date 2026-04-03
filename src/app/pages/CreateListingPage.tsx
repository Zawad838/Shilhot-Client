import { Link } from 'react-router';
import { Upload, Image as ImageIcon, AlertCircle, ChevronDown } from 'lucide-react';
// import listingImage from 'figma:asset/d0126bcd20212bda4f7e754bc3f799438439f58c.png';

export function CreateListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Explore</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Bidding</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Categories</Link>
                <Link to="/search" className="text-gray-700 hover:text-blue-600">Deals</Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link to="/sell" className="text-blue-600 font-semibold text-sm border-b-2 border-blue-600 pb-1">Sell</Link>
                <Link to="/account" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Account</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-2">
                1
              </div>
              <span className="text-sm font-semibold text-blue-600">IDENTITY</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold mb-2">
                2
              </div>
              <span className="text-sm font-medium text-gray-600">MEDIA</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold mb-2">
                3
              </div>
              <span className="text-sm font-medium text-gray-600">DETAILS</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold mb-2">
                4
              </div>
              <span className="text-sm font-medium text-gray-600">MARKET</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Item Identity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Item Identity</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">ITEM TITLE</label>
                  <input
                    type="text"
                    placeholder="e.g. Vintage 1970s Chronograph Watch"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Include brand, model, size, color & key features for best results</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">PRIMARY CATEGORY</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none">
                        <option>Timepieces & Watches</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">SUB-CATEGORY</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none">
                        <option>Vintage Chronographs</option>
                        <option>Dress Watches</option>
                        <option>Sport Watches</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Assets */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">2. Visual Assets</h2>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Request AI Photos
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-dashed border-blue-300 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors">
                  <Upload className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-xs font-semibold text-blue-600">PRIMARY</span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-600">Add quality imagery (ideal size up to 40%). Professional photos increase bids by 3x.</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Specifications</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">CONDITION</label>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 border-2 border-blue-600 bg-blue-50 text-blue-600 rounded-lg font-semibold text-sm">
                      New
                    </button>
                    <button className="flex-1 px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-lg font-semibold text-sm hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
                      Pre-owned
                    </button>
                    <button className="flex-1 px-4 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-lg font-semibold text-sm hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
                      Refurbished
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">BRAND</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none">
                      <option>Select Brand</option>
                      <option>Rolex</option>
                      <option>Omega</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">CONDITION NARRATIVE</label>
                  <textarea
                    placeholder="Describe any wear, scratches, or mechanical issues..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Pricing</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-blue-600 rounded-lg p-4 bg-blue-50 cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <span className="font-bold text-blue-600">Auction Style</span>
                    </div>
                    <p className="text-xs text-gray-600">Let the market decide the value through competitive bidding.</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">STARTING BID</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">$</span>
                        <input
                          type="number"
                          defaultValue="0.99"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">DURATION</span>
                      </div>
                      <div className="relative">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none">
                          <option>7 Days</option>
                          <option>5 Days</option>
                          <option>3 Days</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-300 rounded-lg p-4 bg-white cursor-pointer hover:border-blue-600 hover:bg-blue-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-gray-600">Fixed Price</span>
                    </div>
                    <p className="text-xs text-gray-600">Set a minimum price you're willing to accept (if you decline offers).</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">BUY-IT-NOW</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">$</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Shipping</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-3 p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
                    <input type="radio" name="shipping" defaultChecked className="w-5 h-5 text-blue-600" />
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-bold text-blue-600">Calculated Shipping</p>
                        <p className="text-xs text-gray-600">We calculate exact shipping based on buyer's address</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 bg-white rounded-lg cursor-pointer hover:border-blue-600 hover:bg-blue-50">
                    <input type="radio" name="shipping" className="w-5 h-5 text-blue-600" />
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <p className="font-bold text-gray-600">Flat Rate</p>
                        <p className="text-xs text-gray-600">You charge a fixed amount for all shipments</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors">
                Review & Publish Listing
              </button>
              <button className="px-6 py-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold">
                Save as Draft
              </button>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Listing Intelligence Alert */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-yellow-900 text-sm mb-1">LISTING INTELLIGENCE</h3>
                    <p className="text-xs text-yellow-800">
                      Items in this category list 45% faster when including high-quality lifestyle photography. Selling as $0.99 auction? Our data shows 68% higher final bids.
                    </p>
                  </div>
                </div>
              </div>

              {/* Preview Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-bold text-sm">PREVIEW CARD</h3>
                </div>
                <div className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">Your primary photo</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 h-3 rounded w-3/4"></div>
                    <div className="bg-gray-100 h-3 rounded w-1/2"></div>
                    <div className="bg-gray-200 h-6 rounded w-1/3 mt-3"></div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xs text-gray-600 mb-2">LIST PRICE / BID</div>
                  <div className="text-2xl font-bold text-gray-900">$0.99</div>
                  <button className="w-full mt-3 bg-gray-900 text-white font-semibold py-2 rounded-lg text-sm opacity-50 cursor-not-allowed">
                    PREVIEW ONLY
                  </button>
                </div>
              </div>

              {/* Seller Resources */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-sm mb-3">SELLER RESOURCES</h3>
                <div className="space-y-2 text-xs">
                  <Link to="#" className="text-blue-600 hover:text-blue-700 block">
                    → Fees & Charges
                  </Link>
                  <Link to="#" className="text-blue-600 hover:text-blue-700 block">
                    → Shipping Guide
                  </Link>
                  <Link to="#" className="text-blue-600 hover:text-blue-700 block">
                    → Safety Standards
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Precision Exchange</h3>
              <p className="text-xs">POLICIES</p>
            </div>
            <div className="flex items-center gap-8">
              <Link to="#" className="hover:text-blue-600">TERMS OF USE</Link>
              <Link to="#" className="hover:text-blue-600">HELP & CONTACT</Link>
              <Link to="#" className="hover:text-blue-600">SITE MAP</Link>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">© 2024 PRECISION EXCHANGE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

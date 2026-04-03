import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Heart, Share2, Flag, Shield, Truck, ChevronRight, Star } from 'lucide-react';
// import productImage from 'figma:asset/8dbb295ab1a2d095ac504b8369e7365c75d3a856.png';

export function ProductDetailPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 4, minutes: 12, seconds: 55 });
  const [selectedImage, setSelectedImage] = useState(0);
  const [bidAmount, setBidAmount] = useState('1,460.00');

  const thumbnails = [
    'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=150',
    'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=150',
    'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=150',
    'https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=150',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/search" className="text-gray-700 hover:text-blue-600">Explore</Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600">Bidding</Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600">Categories</Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600">Deals</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <Link to="/sell" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Sell</Link>
              <Link to="/account" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Account</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">HOME</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/search" className="hover:text-blue-600">WATCHES</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">LUXURY CHRONOGRAPHS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div>
            <div className="bg-gradient-to-br from-teal-900 to-gray-900 rounded-2xl overflow-hidden mb-4 relative aspect-square">
              <button className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 flex items-center gap-1 text-sm font-semibold z-10">
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                248
              </button>
              <img src={productImage} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-4 mb-4">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <button className="w-20 h-20 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-gray-50 hover:bg-gray-100">
                <span className="text-xs text-gray-600">+12 MORE</span>
              </button>
            </div>

            {/* Item Description */}
            <div className="bg-white rounded-lg p-6 mb-4">
              <h3 className="font-bold text-lg mb-4">ITEM DESCRIPTION</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                This limited edition timepiece represents the pinnacle of precision engineering. Featuring a hand-assembled mechanical movement and a scratch-resistant sapphire crystal. The minimalist aesthetic is complemented by a premium Italian calfskin leather strap, making it a versatile choice for both professional and casual environments.
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">SPECIFICATIONS</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Movement</span>
                  <span className="font-medium text-sm">Swiss Automatic</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Case Diameter</span>
                  <span className="font-medium text-sm">41mm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Water Resistance</span>
                  <span className="font-medium text-sm">50 Meters</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Materials</span>
                  <span className="font-medium text-sm">316L Stainless Steel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bidding */}
          <div>
            <div className="bg-white rounded-lg p-6 mb-4">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded mb-4">
                ENDING SOON
              </span>
              <div className="flex items-start justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  Heritage Precision Chronograph: Obsidian Edition
                </h1>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Flag className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Item ID: PX-9920344 • Condition: Pristine / Box & Papers
              </p>

              {/* Bidding Section */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">CURRENT BID</p>
                    <p className="text-4xl font-bold text-gray-900">$1,450.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-red-600 font-semibold mb-1">TIME LEFT</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {String(timeLeft.days).padStart(2, '0')}d {String(timeLeft.hours).padStart(2, '0')}h{' '}
                      {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={`$ ${bidAmount} or more`}
                    onChange={(e) => setBidAmount(e.target.value.replace(/[^0-9.,]/g, ''))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm mb-2"
                  />
                  <p className="text-xs text-gray-600">18 bids placed • Reserve price met</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors mb-2">
                  Place Bid
                </button>
              </div>

              {/* Buy It Now */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-600 mb-2">BUY IT NOW</p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold text-gray-900">$2,100.00</p>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors">
                    Buy It Now
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">White-Glove Shipping</p>
                    <p className="text-xs text-gray-600">Fully insured express delivery via FedEx Priority. Ships within 24 hours of payment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Authenticity Guaranteed</p>
                    <p className="text-xs text-gray-600">Verified by our in-house horology experts. Certificate of Authenticity included.</p>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      CE
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">ChronosElite_Vault</p>
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">4.9</span>
                        <span>(1,244 sales)</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    CONTACT SELLER
                  </button>
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
    </div>
  );
}

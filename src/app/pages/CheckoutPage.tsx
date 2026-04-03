import { Link } from 'react-router';
import { ArrowRight, ShieldCheck, Lock, Globe, CheckCircle2 } from 'lucide-react';
import checkoutImage from 'figma:asset/a929348e439617b4f6efdbb5b0fd64fe2b2d2033.png';

export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="w-4 h-4" />
              <span className="font-semibold">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">1. Shipping Address</h2>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Add New
                </button>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-blue-600 bg-blue-50 rounded-lg p-4 relative">
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900 mb-1">Office Headquarters</p>
                  <p className="text-sm text-gray-700">3422 Precision Way</p>
                  <p className="text-sm text-gray-700">Suite 100, Financial District</p>
                  <p className="text-sm text-gray-700">New York, NY 10004</p>
                  <span className="inline-block mt-3 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                    DEFAULT ADDRESS
                  </span>
                </div>

                <div className="border-2 border-gray-200 bg-white rounded-lg p-4 hover:border-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                  <p className="font-bold text-gray-900 mb-1">Residential Residence</p>
                  <p className="text-sm text-gray-700">128 Hudson Street</p>
                  <p className="text-sm text-gray-700">Apt 4B</p>
                  <p className="text-sm text-gray-700">New York, NY 10013</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">2. Payment Method</h2>

              <div className="space-y-3">
                <div className="border-2 border-blue-600 bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-blue-600" />
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center gap-2 bg-white px-3 py-1 rounded">
                        <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Visa ending in 4242</p>
                        <p className="text-xs text-gray-600">Expires 12/26</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <span className="ml-1 text-gray-600 font-mono">4242</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 bg-white rounded-lg p-4 hover:border-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.72-4.458z" fill="#003087"/>
                        <path d="M6.538 7.917c.062-.365.312-.648.644-.648h4.546c.732 0 1.434.047 2.084.138a13.45 13.45 0 0 1 .98.194c.37.09.718.205 1.05.345.165.07.323.144.475.223.152.08.297.165.435.257a3.35 3.35 0 0 1 .607.54c.896 1.071 1.08 2.612.72 4.46-.86 4.418-3.805 5.946-7.565 5.946h-.58a.932.932 0 0 0-.922.788s-.7 4.592-.76 4.852c-.072.454-.462.788-.922.788H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81a5.764 5.764 0 0 1 1.012 4.287 9.4 9.4 0 0 1-.077.437 9.4 9.4 0 0 1-.607 2.127c-.23.523-.516 1.01-.854 1.46a6.61 6.61 0 0 1-1.246 1.222 8.336 8.336 0 0 1-1.898 1.028c-.697.268-1.45.476-2.243.62-.407.073-.826.132-1.256.176-.107.01-.215.02-.323.027L6.538 7.917z" fill="#0070BA"/>
                      </svg>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">PayPal</p>
                        <p className="text-xs text-gray-600">j.doe@precision.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 bg-white rounded-lg p-4 hover:border-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                    <div className="flex items-center gap-3 flex-1">
                      <svg className="w-8 h-6" viewBox="0 0 48 30" fill="none">
                        <rect width="48" height="30" rx="4" fill="white"/>
                        <path d="M17.5 9.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" fill="#EA4335"/>
                        <path d="M30.5 9.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" fill="#FBBC04"/>
                        <path d="M24 12.5c1.381-1.381 3.277-2.236 5.5-2.236-2.223 0-4.119.855-5.5 2.236-1.381 1.381-2.236 3.277-2.236 5.5 0-2.223.855-4.119 2.236-5.5z" fill="#4285F4"/>
                      </svg>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Google Pay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Items */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">3. Review Items</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1773414753648-3d84b187664a?w=100"
                    alt="Product"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Horizon Chronograph X-1</h3>
                    <p className="text-sm text-gray-600 mb-2">Silver / 42mm / Leather Strap</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">QTY: 1</span>
                      <button className="text-red-600 hover:text-red-700 font-semibold">Remove</button>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$1,240.00</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-green-700">SAFE</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Sonic-X Studio Pro</h3>
                    <p className="text-sm text-gray-600 mb-2">Matte Black / Wireless / ANC</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">QTY: 1</span>
                      <button className="text-red-600 hover:text-red-700 font-semibold">Remove</button>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$349.99</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Subtotal (2 items)</span>
                    <span className="font-semibold text-gray-900">$1,589.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Shipping (Express)</span>
                    <span className="font-semibold text-gray-900">$25.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span className="font-semibold text-gray-900">$127.20</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">Total Amount</span>
                    <span className="text-3xl font-bold text-gray-900">$1,742.19</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4">
                  Confirm and Pay
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-center text-gray-600">
                  By clicking "Confirm and Pay", you agree to Precision Exchange's{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-700">Terms of Use</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>.
                </p>
              </div>

              {/* Security Badges */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <ShieldCheck className="w-8 h-8 text-gray-400" />
                  <Lock className="w-8 h-8 text-gray-400" />
                  <Globe className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-center text-xs font-semibold text-gray-700">
                  AES-256 BIT ENCRYPTION SECURE PAYMENT
                </p>
              </div>

              {/* Help */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-sm text-gray-900 mb-2">Need help with your order?</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Our concierge team is available 24/7 for premium assistance.
                </p>
                <Link to="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                  Contact Support
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
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
              <p className="text-xs text-gray-600">© 2024 PRECISION EXCHANGE. ALL RIGHTS RESERVED.</p>
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

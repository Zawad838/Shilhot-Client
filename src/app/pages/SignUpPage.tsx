import { Link } from 'react-router';
import { Eye, ShieldCheck, Lock, Globe } from 'lucide-react';
// import signupImage from '../../assets/658bd8b5bfddd506a0ba15a31f717f7ebbafaa84.png';

export function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Image */}
        <div className="hidden lg:block relative bg-gray-100">
          {/* <img
            src={signupImage}
            alt="Signup"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1.5 rounded mb-6">
              INSTITUTIONAL GRADE
            </span>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              The Professional Standard in Asset Exchange.
            </h1>
            <p className="text-white/90 text-lg mb-12 max-w-md">
              Join over 50,000 verified traders accessing real-time bidding, secure escrow, and editorial-grade market insights.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-bold text-white mb-1">$4.2B+</p>
                <p className="text-white/80 text-sm">VOLUME TRADED</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">99.9%</p>
                <p className="text-white/80 text-sm">UPTIME</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="text-2xl font-bold tracking-tight">SHILOH</Link>
                <div className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Sign In
                  </Link>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-600">Enter your details to start bidding today.</p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR WITH EMAIL</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">FIRST NAME</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">LAST NAME</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="jane.doe@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">PASSWORD</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Eye className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <input type="checkbox" id="business" className="mt-1" />
                <div>
                  <label htmlFor="business" className="flex items-center gap-2 font-semibold text-sm text-gray-900 cursor-pointer">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Register as business
                  </label>
                  <p className="text-xs text-gray-600 mt-1">Tax-exempt bidding & multi-user access</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Create Professional Account
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SSL ENCRYPTED</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  <span>GDPR COMPLIANT</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>CERTIFIED ESCROW</span>
                </div>
              </div>

              <p className="text-xs text-center text-gray-600">
                By creating an account, you agree to our{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>© 2024 PRECISION EXCHANGE. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-8">
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

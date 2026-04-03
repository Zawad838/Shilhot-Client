import { Link } from 'react-router';
import { Eye, Building2, Globe } from 'lucide-react';
import signinImage from 'figma:asset/658bd8b5bfddd506a0ba15a31f717f7ebbafaa84.png';

export function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-md mx-auto px-4 text-center">
          <Link to="/" className="text-2xl font-bold tracking-tight inline-block mb-2">
            SHILOH
          </Link>
          <p className="text-sm text-gray-600">Access the professional trading floor</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign in to your account</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  EMAIL OR USERNAME
                </label>
                <input
                  type="text"
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-gray-700">PASSWORD</label>
                  <Link to="#" className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Eye className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Stay logged in for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">SSO</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">GLOBAL</span>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              New to the exchange?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>© 2024 PRECISION EXCHANGE</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-blue-600">PRIVACY</Link>
              <Link to="#" className="hover:text-blue-600">TERMS</Link>
              <Link to="#" className="hover:text-blue-600">SUPPORT</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

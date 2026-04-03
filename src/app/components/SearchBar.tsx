import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import logo from "../../assets/Logo.png"

export function SearchBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src ={logo}/>
            </Link>
          </div>

          {/* Search Section */}
          <div className="flex-1 flex items-stretch gap-0 max-w-4xl">
            {/* Category Dropdown */}
            <button className="hidden sm:flex items-center gap-2 px-4 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50 whitespace-nowrap text-sm">
              Shop by category
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Search Input */}
            <div className="flex-1 relative flex items-center">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full h-10 sm:h-full px-4 border-y border-l sm:border-l-0 sm:border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:rounded-none rounded-l-md"
              />
            </div>

            {/* Category Select */}
            <select className="hidden lg:block px-4 border-y border-l border-gray-300 bg-white hover:bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
            </select>

            {/* Search Button */}
            <button className="px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md flex items-center justify-center gap-2 transition-colors">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-sm font-medium">Search</span>
            </button>
          </div>

          {/* Advanced Link */}
          <button className="hidden lg:inline text-blue-600 hover:text-blue-700 text-sm whitespace-nowrap">
            Advanced
          </button>
        </div>
      </div>
    </div>
  );
}
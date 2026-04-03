export function NavigationMenu() {
  const categories = [
    'Home',
    'Saved',
    'Electronics',
    'Motors',
    'Fashion',
    'Collectibles and Art',
    'Sports',
    'Health & Beauty',
    'Industrial equipment',
    'Home & Garden',
    'Deals',
    'Sell',
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide py-3">
          {categories.map((category) => (
            <button
              key={category}
              className="text-sm text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

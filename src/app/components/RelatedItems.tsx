export function RelatedItems() {
  const items = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1616757857818-5c6eea38ee17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Samsung Odyssey G9 49" Curved Gaming...',
      price: '$1,199.99',
      condition: 'Used - Great condition',
      watchers: '25+ watchers',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Logitech G915 TKL Wireless Mechanical...',
      price: '$189.00',
      shipping: 'Free shipping',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1770393698717-fbbebdeccd5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Logitech MX Master 3S Wireless Performance...',
      price: '$94.00',
      badge: 'Buy it Now',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'LG C3 65" 4K Smart OLED evo TV (2023) -...',
      price: '$1,496.00',
      shipping: 'Free shipping',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Bose SoundLink Revolve+ II Bluetooth...',
      price: '$229.00',
      shipping: 'Free 2-day shipping',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1628866971124-5d506bf12915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Apple iPad Pro 12.9" 6th Gen 256GB Wi-Fi -...',
      price: '$999.00',
      badge: 'Open box',
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Related to items you viewed</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
            See all
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group border border-gray-200"
            >
              <div className="relative aspect-square bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                  {item.title}
                </h3>
                <div className="mb-1">
                  <span className="text-base sm:text-lg font-bold text-gray-900">{item.price}</span>
                </div>
                {item.condition && (
                  <p className="text-xs text-gray-600 mb-1">{item.condition}</p>
                )}
                {item.shipping && (
                  <p className="text-xs text-gray-600">{item.shipping}</p>
                )}
                {item.watchers && (
                  <p className="text-xs text-gray-600">{item.watchers}</p>
                )}
                {item.badge && (
                  <span className="inline-block mt-2 text-xs text-gray-600">{item.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

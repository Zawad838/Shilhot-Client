import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function DailyDeals() {
  const deals = [
    {
      id: 1,
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1602454252462-3fe9e21cc149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Apple MacBook Pro 14" M2 Chip 512GB SSD Space...',
      price: '$1,299.00',
      originalPrice: '$1,599.00',
      shipping: 'Free shipping',
      badge: 'EBAY REFURBISHED',
    },
    {
      id: 2,
      discount: '15% OFF',
      image: 'https://images.unsplash.com/photo-1773414753648-3d84b187664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'New Luxury Designer Chronograph Watch - Wat...',
      price: '$145.00',
      originalPrice: '$199.00',
      shipping: 'Free 3-day shipping',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Sony WH-1000XM4 Wireless Noise-Canceling...',
      price: '$248.00',
      shipping: 'Free shipping',
      badge: 'Almost gone',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Nike Air Jordan 1 Low - Men\'s Basketball Shoes -...',
      price: '$110.00',
      shipping: '+$12.50 shipping',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1692246427978-e9b094f6fa8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Professional Studio Monitor Headphones for Music...',
      price: '$89.99',
      shipping: 'Free shipping',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1669910543384-f33373614393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Fujifilm X100V Digital Camera - Silver - Brand...',
      price: '$1,399.00',
      shipping: 'Free shipping',
    },
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Daily Deals</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
              See all deals
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              to={`/product/${deal.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative aspect-square bg-gray-100">
                {deal.discount && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    {deal.discount}
                  </div>
                )}
                {deal.badge && !deal.discount && (
                  <div className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded z-10 border border-gray-200">
                    {deal.badge}
                  </div>
                )}
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                  {deal.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-lg font-bold text-gray-900">{deal.price}</span>
                  {deal.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                  )}
                </div>
                <p className="text-xs text-gray-600">{deal.shipping}</p>
                {deal.badge === 'EBAY REFURBISHED' && (
                  <span className="inline-block mt-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {deal.badge}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
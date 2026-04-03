export function Footer() {
  const footerSections = [
    {
      title: 'Buy',
      links: ['Registration', 'eBay Money Back Guarantee', 'Bidding & buying help', 'Stores'],
    },
    {
      title: 'Sell',
      links: ['Start selling', 'How to sell', 'Business sellers', 'Affiliates'],
    },
    {
      title: 'Stay connected',
      links: ["eBay's Blogs", 'Facebook', 'Twitter'],
    },
    {
      title: 'About eBay',
      links: ['Company info', 'News', 'Investors', 'Careers', 'Policies'],
    },
    {
      title: 'Help & Contact',
      links: ['Seller Center', 'Contact Us', 'eBay Returns'],
    },
  ];

  const bottomLinks = [
    'Accessibility',
    'User Agreement',
    'Privacy',
    'Payments Terms of Use',
    'Cookies',
    'CA Privacy Notice',
    'Your Ad Choices',
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 text-center sm:text-left">
              Copyright © 1995-2024 eBay Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>🌐</span>
              <button className="hover:text-blue-600">United States</button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
            {bottomLinks.map((link, index) => (
              <span key={link} className="flex items-center gap-3 sm:gap-4">
                <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors">
                  {link}
                </button>
                {index < bottomLinks.length - 1 && (
                  <span className="text-gray-300 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Visit',
      links: [
        { href: '/aalayam', label: 'Temple' },
        { href: '/aashramam', label: 'Aashramam' },
        { href: '/contact', label: 'Location & Timings' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { href: '/guru-parampara', label: 'Our Lineage' },
        { href: '/mahapadayatra', label: 'Join the Yatra' },
        { href: '/feedback', label: 'Share Feedback' },
      ],
    },
    {
      title: 'Support',
      links: [
        { href: '/donate', label: 'Make a Donation' },
        { href: '/mahapadayatra', label: 'Support Renovation' },
        { href: '/contact', label: 'Volunteer' },
      ],
    },
  ];

  return (
    <footer className={`bg-zinc-50 border-t border-gray-200 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-zinc-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 hover:text-orange-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-zinc-600 text-center">
            © {currentYear} Bhuvaneshwari Peetham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
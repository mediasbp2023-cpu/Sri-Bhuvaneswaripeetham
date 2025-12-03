import Link from 'next/link';
import { Facebook, Youtube } from 'lucide-react';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

    const sections = [
    {
      title: 'About',
      links: [
        { href: '/aalayam', label: 'Aalayam' },
        { href: '/aashramam', label: 'Aashramam' },
        { href: '/guru-parampara', label: 'Guru Parampara' },
        { href: '/media', label: 'Media' },
        { href: '/contact', label: 'Contact Us' },
      ],
    },
    {
      title: 'Engage',
      links: [
        { href: '/volunteer', label: 'Volunteer' },
        { href: '/arjita-sevas', label: 'Arjita Sevas' },
        { href: '/donate', label: 'Donate' },
      ],
    },
    {
      title: 'Others',
      links: [
        { href: '/temple-renovation', label: 'Temple Renovation' },
        { href: '/mahapadayatra', label: 'Mahapadayatra' },
        { href: '/anugraham', label: 'Anugraham' },
      ],
    },
  ];

  return (
    <footer className={`bg-[#FDF3E7] text-black ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-orange-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/hinduaalayam/?ref=embed_page#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-orange-600 transition-colors" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 hover:text-orange-600 transition-colors" />
              </a>
            </div>
            {/* Placeholder for Google Translate */}
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#F07E2D] text-white py-4">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center text-sm">
          <p>Copyright©{currentYear} by Sri Bhuvaneswari Peetham. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
          </div>
          <p>Powered By <a href="#" className="font-bold">B</a></p>
        </div>
      </div>
    </footer>
  );
}

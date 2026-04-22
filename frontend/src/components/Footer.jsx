import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    help: false,
    policy: false,
    social: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const footerSections = {
    about: {
      title: 'ABOUT',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Flipkart Stories', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Corporate Information', href: '#' }
      ]
    },
    help: {
      title: 'HELP',
      links: [
        { name: 'Payments', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Cancellation & Returns', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Report Infringement', href: '#' }
      ]
    },
    policy: {
      title: 'CONSUMER POLICY',
      links: [
        { name: 'Return Policy', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Sitemap', href: '#' },
        { name: 'Grievance Redressal', href: '#' }
      ]
    },
    social: {
      title: 'SOCIAL',
      links: [
        { name: 'Facebook', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'YouTube', href: '#' }
      ]
    }
  }

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Desktop Footer */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer - Accordion */}
        <div className="lg:hidden space-y-4">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="border-b border-gray-800 pb-4">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <h4 className="text-lg font-semibold text-gray-200">{section.title}</h4>
                {openSections[key] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openSections[key] && (
                <ul className="mt-4 space-y-2 animate-fade-in-up">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 hover:underline block py-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2007-2025 Flipkart Clone - Made with <span className="text-red-500">{'\u2764\ufe0f'}</span> for demo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

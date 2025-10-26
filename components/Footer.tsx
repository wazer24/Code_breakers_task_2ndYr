import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Solutions: [
      { name: 'Cross-Chain Access', href: '/features#cross-chain' },
      { name: 'Decentralized Identity', href: '/features#identity' },
      { name: 'Smart Contracts', href: '/features#smart-contracts' },
      { name: 'Asset Tokenization', href: '/features#tokenization' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Use Cases', href: '/use-cases' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Get Started', href: '/signup' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '/contact', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-lime-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold font-display gradient-text">
                VETRIC
              </span>
            </Link>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} VETRIC. All rights reserved.
          </p>

          <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-lime-500 hover:to-lime-700 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


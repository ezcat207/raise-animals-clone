'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/animals', label: 'Animals', icon: '🦁' },
    { href: '/lassos', label: 'Lassos', icon: '🪢' },
    { href: '/guides', label: 'Guides', icon: '📚' },
    { href: '/codes', label: 'Codes', icon: '🎮' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🐾</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Raise Animals
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <a
            href="https://www.roblox.com/games/122826953758426/Raise-Animals"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Play Now
          </a>

          <div className="md:hidden flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-2xl transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-blue-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

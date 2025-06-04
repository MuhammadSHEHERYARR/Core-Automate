'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 shadow-lg"
      style={{ background: 'rgba(0,0,0,0.7)' }}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-red-500 drop-shadow-glow-red tracking-wider">
          Core Automate
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-red-500 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-red-500 text-white px-5 py-1.5 rounded-full font-semibold shadow-glow-red hover:bg-red-600 transition-colors text-sm"
            style={{ borderRadius: '999px', fontSize: '1rem', padding: '10px 24px' }}
          >
            Book Consultation
          </Link>
        </div>
      </nav>
    </motion.header>
  )
} 
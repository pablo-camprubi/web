"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="font-display text-lg font-semibold text-zinc-100">
          Datrash
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://chat.datrash.com"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-zinc-100 hover:text-zinc-300 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-50 bg-zinc-900/95 border border-zinc-800/50 backdrop-blur-md rounded-2xl shadow-xl">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 text-sm rounded-lg transition-colors text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://chat.datrash.com"
              onClick={closeMenu}
              className="mt-2 px-4 py-3 text-sm rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-black/50 z-30"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

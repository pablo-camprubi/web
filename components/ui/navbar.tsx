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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex max-w-5xl mx-auto items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="font-display text-lg font-semibold text-zinc-100">
          Datrash
        </Link>
        <div className="flex items-center gap-1">
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
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between h-12 px-4 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="font-display text-lg font-semibold text-zinc-100">
          Datrash
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-zinc-900/95 border border-zinc-800/50 backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm rounded-xl transition-colors text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://chat.datrash.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 text-sm text-center rounded-xl bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

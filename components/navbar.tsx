"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const programs = [
  { name: "Islamic Banking", href: "/programs/islamic-banking" },
  { name: "Halal Finance", href: "/programs/halal-finance" },
  { name: "Shariah Compliance", href: "/programs/shariah-compliance" },
]

const languages = [
  { code: "en", name: "ENG", flag: "🇬🇧" },
  { code: "uz", name: "UZB", flag: "🇺🇿" },
  { code: "ru", name: "RUS", flag: "🇷🇺" },
]

export function Navbar() {
  const [currentLang, setCurrentLang] = useState(languages[0])

  return (
    <header className="w-full">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path
                    d="M20 4L4 16V36H16V24H24V36H36V16L20 4Z"
                    fill="none"
                    stroke="#0D9488"
                    strokeWidth="2"
                  />
                  <circle cx="20" cy="18" r="4" fill="#0D9488" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-teal-600">
                AL MUAMALAT
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium transition-colors outline-none">
                  Programs
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {programs.map((program) => (
                    <DropdownMenuItem key={program.href} asChild>
                      <Link href={program.href}>{program.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/finance-tools"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Finance tools
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Right Side - Language & Sign In */}
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-teal-600 font-medium transition-colors outline-none">
                  <span className="text-lg">{currentLang.flag}</span>
                  <span>{currentLang.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang)}
                      className="flex items-center gap-2"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                asChild
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-md px-6"
              >
                <Link href="/sing-in">Sign in</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Teal accent line at bottom */}
        <div className="h-1 bg-teal-600" />
      </nav>
    </header>
  )
}

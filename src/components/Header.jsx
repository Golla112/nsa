import React from 'react'
import DarkToggle from './DarkToggle'
import Logo from '../assets/logo.svg?raw'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div dangerouslySetInnerHTML={{ __html: Logo }} style={{ width: 36, height: 36 }} />
          <span className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">BrandName</span>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <DarkToggle />
          <a className="hidden md:inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md" href="#trial">Start free</a>
          <button className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300" aria-label="Apri menu">≡</button>
        </div>
      </div>
    </header>
  )
}

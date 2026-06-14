import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} BrandName. Tutti i diritti riservati.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}

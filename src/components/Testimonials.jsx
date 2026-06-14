import React from 'react'

export default function Testimonials() {
  const items = [
    { quote: 'Strumento fantastico, ha migliorato il nostro funnel.', author: 'Luca, CTO' },
    { quote: 'Supporto eccellente e onboarding veloce.', author: 'Maria, Head of Growth' },
    { quote: 'Miglior ROI in 3 mesi.', author: 'Marco, CEO' }
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Cosa dicono i clienti</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <blockquote key={t.author} className="p-6 border rounded bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-gray-500 dark:text-gray-400">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

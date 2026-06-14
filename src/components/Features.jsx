import React from 'react'

const items = [
  { title: 'Automazione', desc: 'Workflow drag & drop per processi ripetibili' },
  { title: 'Analytics', desc: 'Dashboard realtime per KPI e trend' },
  { title: 'Sicurezza', desc: 'Crittografia e compliance per i dati sensibili' }
]

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Caratteristiche principali</h2>
      <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
        {items.map((i) => (
          <article key={i.title} className="p-6 border rounded-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{i.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

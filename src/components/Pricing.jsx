import React from 'react'

const plans = [
  { name: 'Starter', price: '€19', features: ['1 progetto', '5 utenti', 'Supporto email'] },
  { name: 'Pro', price: '€49', features: ['Progetti illimitati', 'Utenti illimitati', 'Supporto prioritario'] },
  { name: 'Enterprise', price: 'Contattaci', features: ['SLA', 'Onboarding', 'Sicurezza avanzata'] }
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Prezzi</h2>
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="text-3xl font-extrabold mt-4">{p.price}
                <span className="text-base font-medium">/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded">Scegli</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

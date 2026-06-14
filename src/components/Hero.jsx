import React from 'react'
import HeroIllu from '../assets/hero-illustration.svg?raw'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 dark:from-transparent to-white dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Il software giusto per far crescere il tuo business
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Automatizza i processi, acquisisci più clienti e scala senza complicazioni. Provalo gratis per 14 giorni — nessuna carta di credito richiesta.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#trial" className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow">Inizia gratis</a>
            <a href="#features" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md">Vedi le features</a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Affidato da startup e PMI — +1,200 clienti</p>
        </div>
        <div className="mx-auto">
          <div dangerouslySetInnerHTML={{ __html: HeroIllu }} />
        </div>
      </div>
    </section>
  )
}

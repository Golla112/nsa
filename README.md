# SaaS Landing Template (React + Vite + Tailwind)

Descrizione
Questo template è una landing page per SaaS, responsive, accessibile e facilmente personalizzabile. Include Hero, Features, Pricing, Testimonials, CTA, footer e dark mode toggle.

Prerequisiti
- Node.js 18+ / npm 8+
- Git (opzionale)

Installazione locale
1. npm install
2. npm run dev
3. Apri http://localhost:5173

Build produzione
1. npm run build
2. npm run preview

Personalizzazione rapida
- Colori: modifica la palette nel file `tailwind.config.cjs`.
- Font: sostituisci il link Google Fonts in `index.html`.
- Logo: sostituisci `src/assets/logo.svg`.
- Immagini: sostituisci gli SVG in `src/assets/`.

Form di contatto
Il template include un semplice form che può inviare dati a Formspree o Netlify Forms. Aggiorna l'endpoint nel componente del form (es. action di <form>).

Packaging per Gumroad (consigliato)
1. npm run build
2. npm run package:zip
3. Nel file `release/saas-landing-template.zip` trovi:
   - dist/ (build pronta)
   - src/ (sorgenti)
   - README.md, LICENSE

Suggerimenti per la pagina Gumroad
- Titolo: SaaS Landing Template — React + Vite + Tailwind
- Descrizione: elenco features, cosa è incluso, link demo
- Screenshot: 5 screenshot + 1 GIF (90–120s loop) che mostra lo scroll e il hero
- Files da includere nello zip: dist (obbligatorio), src (opzionale), README, LICENSE, screenshots

Note legali e asset
- Assicurati che tutte le immagini siano con licenza commerciale.
- Google Fonts (Inter) è ok per uso commerciale.
- Fornisci istruzioni chiare ai clienti su come personalizzare.

Supporto & aggiornamenti
Offri aggiornamenti per X mesi come valore aggiunto nella descrizione del prodotto su Gumroad.

Se vuoi posso:
- Generare lo zip pronto da scaricare direttamente.
- Creare un repo GitHub con questi file (fornisci owner/repo e autorizzazione).
- Personalizzare brand (nome, palette, testi, immagini).

# Brightmark Consulting Ltd website

Next.js 14 (App Router). Pages: Home, About, Contact.

## Replace the placeholder images (important)
Put your real files in `public/` using these exact names:
- `brightmark_logo.jpeg`
- `1.jpg` ... `10.jpg` (client logos)
- `uche.jpg`, `chi.jpg` (team photos)
- `training/training-group.jpeg`, `training/performance-indices-session.jpeg`, `training/facilitator-presenting.jpeg`, `training/facilitator-session.jpeg`, `training/facilitator-with-participants.jpeg`, `training/integrated-project-session.jpeg`, `training/facilitator-portrait.jpeg`

## Edit contact details, services and social links
`lib/site.js`

## Contact form
Set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel (Project Settings > Environment Variables), for example a Formspree form URL.
Without it, the form opens the visitor's email app addressed to the email in `lib/site.js`.

## Run locally
npm install
npm run dev

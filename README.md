# Mobile Cairns Mechanic website

Complete source code for the Mobile Cairns Mechanic website.

## What is included

- Mobile-first responsive website
- English, Spanish and French pages
- Services and individual service pages
- Google review link
- Phone, WhatsApp and email contact buttons
- Local SEO metadata and structured business data
- Mobile Cairns Mechanic logo

## Easiest way to put it on GitHub

1. Download and unzip the project ZIP.
2. Go to https://github.com/new and create a new empty repository.
3. Do not add a README, .gitignore or licence on GitHub.
4. Open Terminal in this project folder.
5. Run the commands below, replacing YOUR-USERNAME and YOUR-REPOSITORY:

    git init
    git add .
    git commit -m "Initial Mobile Cairns Mechanic website"
    git branch -M main
    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
    git push -u origin main

GitHub may ask you to sign in during the final command.

## Run the website locally

Requirements:

- Node.js 22.13 or newer
- pnpm

Then run:

    corepack enable
    pnpm install
    pnpm dev

Open the local address shown in Terminal.

## Build check

    pnpm build

## Main files to edit

- lib/site-data.ts - phone, email, WhatsApp, services and service areas
- components/home-page.tsx - homepage wording
- components/site-shell.tsx - navigation, footer and contact buttons
- app/globals.css - colours, layout and mobile styling
- public/mobile-cairns-mechanic-logo.png - business logo

## Important

The project contains no passwords or API keys. The previous ChatGPT Sites project identifier has been removed from this export.

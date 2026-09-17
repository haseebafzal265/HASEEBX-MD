# HASEEB-MD

HASEEB-MD is an original, AI-free WhatsApp Multi-Device bot inspired by the modular deployment experience of public projects such as FeeMd/FEE-XMD. It uses Baileys, Express, QR login, pairing-code login, persistent multi-file auth, a plugin loader, owner checks, group checks, status controls, a dashboard and Railway/Docker support.

## Important use notice

Baileys is an unofficial WhatsApp Web library. Use this project only with accounts and contacts you control, respect WhatsApp rules, and do not use it for spam, harassment, scraping, bulk messaging or deceptive automation. The public FeeMd project contains AI features; this project intentionally does not install or use AI libraries or APIs.

## Local setup

1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Set `OWNER_NUMBER` to the owner’s international number without `+`, and set a strong `WEB_PASSWORD` or `DASHBOARD_TOKEN`.
4. Run `npm install`.
5. Run `npm start`.
6. Open `http://localhost:3000/pairing`, authenticate with the configured Basic Auth credentials, and use either QR or pairing code.

Do not commit `.env` or `auth_info/`. The authentication directory is sensitive. Railway’s filesystem may be ephemeral between redeployments; use a persistent volume or external storage strategy before relying on long-term sessions.

## Deployment on Railway

Upload this folder to a private GitHub repository, create a Railway service from the repository, and add the variables from `.env.example` in Railway Variables. Railway supplies `PORT`; the app binds to `0.0.0.0`. Deploy using the included `Dockerfile` or `railway.json`, then open the generated public URL and visit `/pairing`.

## Commands included

General: `.ping`, `.alive`, `.menu`, `.help`, `.runtime`, `.uptime`, `.info`, `.botstatus`, `.owner`.

Group: `.admins`, `.groupinfo`, `.tagall`, `.kick`, `.promote`, `.demote`, `.open`, `.close` with admin and bot-admin checks.

Owner/system: `.plugins`, `.reload`, `.statusconfig`, `.health`, `.stats`, `.sessions`.

Utility/fun/reactions: `.calc`, `.qrcode`, `.readmore`, `.joke`, `.fact`, `.quote`, `.8ball`, `.like`, `.love`, `.laugh`, `.random`.

Downloader, media, search, games and sticker plugins are included as explicit safe fallbacks. They refuse to pretend a provider is available; connect an approved provider in the service layer before enabling those features.

## Project structure

See `docs/installation.md`, `docs/commands.md`, `docs/plugins.md`, `docs/railway.md` and `docs/troubleshooting.md` for beginner-friendly guidance.

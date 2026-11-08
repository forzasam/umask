# umask — static website

Minimal, responsive website for the umask Discord bot, designed for Cloudflare Pages. No build step, framework, server, database, or JavaScript dependencies. The branding and graphics are based on assets supplied by the project owner.

## What is inside

- `index.html`: landing page, installation and support CTAs, role setup and workflow, FAQ.
- `terms.html`, `privacy.html`: **draft** legal pages, suitable for editing before launch.
- `config.js`: the *one* place to add your Discord installation link, support invitation, and legal contact details.
- `style.css` and `site.js`: theme and small progressive UI helpers.
- `assets/`: optimised image assets, including the supplied brand mark and two infographics.
- `_headers`: HTTP response headers for Cloudflare Pages.
- `404.html`, `robots.txt`: basic supporting files.

## 1. Set your links (required before public launch)

Open `config.js` and edit:

```js
window.UMASK_CONFIG = Object.freeze({
  botInstallUrl: "https://discord.com/oauth2/authorize?...", // paste your real link
  supportInviteUrl: "https://discord.gg/...",              // paste your real invite
  contactEmail: "privacy@yourdomain.example",              // replace
  operatorName: "Your real operator or organisation",       // replace
  legalReady: false
});
```

Get the bot invitation URL from **Discord Developer Portal → your Umask app → Installation → Install Link**. It must be **Guild Install**, not User Install. The actual app needs `bot` + `applications.commands`, `Manage Roles`, and the permissions contained in the elevated role it will assign. Do not request Administrator. **Never put your Discord bot token or any other secret into the website.** `config.js` is publicly downloadable by visitors.

Until configured, install/support buttons are visibly disabled with a gentle “coming soon” message; there are no fake links.

## 2. Review legal pages before launch

The included pages are drafts based on the current **Umask v0.7** implementation and its threat model, not final legal advice.

You must confirm: operator name, contact email, actual bot hosting and storage arrangements, jurisdiction and legal basis, data-retention schedule (session history currently has no automatic TTL), data deletion workflow, backup retention, third-party providers, liability wording and an effective date. **After completing that review**, set `legalReady: true` in `config.js`; this removes the draft warning banner. Both legal pages need direct public URLs for Discord's App Directory / app information.

Do not claim that elevated roles expire *while the bot is offline*. The site intentionally explains that missed expirations are reconciled after an outage.

## 3. Preview locally

From the folder containing `index.html`, run:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 . This is just a preview; the actual bot runs separately.

## 4. Deploy with Cloudflare Pages

### Option A: direct upload — fastest

1. Open Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Drag and drop your files**.
2. Upload the **contents** of this folder (or the provided ZIP, whose root contains `index.html`).
3. Choose a project name such as `umask`, then deploy.
4. Cloudflare gives you a `*.pages.dev` URL immediately.
5. When you've purchased your domain, open the Pages project → **Custom domains** → **Set up a domain**. Follow Cloudflare's DNS/nameserver prompts.

Note: Cloudflare does **not** let you switch a Pages project created using Direct Upload to Git integration later. If you'll want auto-deployment from GitHub, choose Option B now.

### Option B: Git integration — easiest for future updates

1. Push these site files to a GitHub repo (separate from the bot's private secrets).
2. In Cloudflare Pages, **Connect to Git** and select the repository.
3. There is no build command, and the output directory is the repository root (`.`). If the interface asks for a command, use `exit 0`.
4. Deploy. Future pushes redeploy automatically.
5. Add `umask.tech` or `umask.app` later through **Custom domains**.

Cloudflare Pages only hosts the **website**, not your continuously running Discord bot process. Run the bot on a separate always-on host with persistent database storage.

## Site design notes

- Responsive layout for phone and desktop.
- Locally hosted images, system fonts; no cookie banner required *for tracking on this site as delivered* (check your actual deployment/legal requirements).
- No external scripts, fonts, or analytics.
- CSP and baseline security headers in `_headers`.
- Avoid editing the original, included graphics without checking the security claims. The marketing copy includes important scope and downtime disclaimers.

# umask — minimalist website update

A static, Cloudflare Pages-ready website for the umask Discord bot.

## What changed

- Headline: **Elevated permissions, only when they're needed.**
- **Add to Discord** and **Join support server** are both prominent in the header, hero and final CTA.
- Removed decorative hero logomark, glowing rings, floating labels, feature cards and other ornamental UI.
- More restrained dark/lavender style, with a transparent wordmark asset.
- The site introduces the service in three steps, explains minimum role requirements, and links to the two original illustrated guides within expandable sections.
- Terms, Privacy and Cloudflare deployment support preserved.

## Deploy to Cloudflare Pages

1. Unzip this archive and update **config.js** with your official Discord application install URL and support-server invite URL. If you have already configured these links on your live site, **carry over that existing config.js** before deployment. The included version has placeholders.
2. Review `terms.html` and `privacy.html` and add operator/contact details. They are drafts and need to reflect your real service operations and data policies before public launch.
3. Deploy the contents of the folder (with `index.html` at the root) to Cloudflare Pages as a new Direct Upload deployment or commit them to the linked Git repo. You can upload the ZIP for Direct Upload.
4. Confirm both header/hero buttons open the intended URLs, and review the legal pages on your domain.

**Never include a Discord bot token or any authentication secrets in these website files.** `config.js` is public browser-side JavaScript.

## Files

- `index.html` — main landing page
- `style.css` — all layout and visual styling, including mobile styles
- `config.js` — public install/support links and legal contact settings
- `site.js` — link activation, missing-link messages and legal-page contact display
- `terms.html` and `privacy.html` — existing draft legal pages
- `assets/` — wordmark, favicon and guides

No build tools, external fonts or client frameworks are required.

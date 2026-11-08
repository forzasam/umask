# umask — simplified homepage

A static HTML/CSS/JavaScript site ready for Cloudflare Pages.

## What's changed

The homepage now explains the product without diagrams, oversized cards, flow arrows, or repeated banners:

- **How it works**: three steps covering `/setup`, `/issue`, `/receive`, `/authenticate` and `/signout`.
- **Role setup**: one concise list of the bot's requirements (`Manage Roles`, matching role permissions, role hierarchy).
- **Security limits**: one understated note rather than a full marketing section.
- **Install + Support**: both remain prominent in the header and hero; no repeated closing call-to-action.

The existing wordmark, Privacy Policy, Terms and `config.js` integration are preserved.

## Deploy to Cloudflare Pages

1. If your live site has working bot-install and support URLs, **copy its existing `config.js` into this directory** before deploying. This archive contains placeholder link settings.
2. Review `terms.html` and `privacy.html` before a public release. Fill in the operator name, contact and legal details.
3. Upload the ZIP contents to your Cloudflare Pages project (or push the updated files to your connected Git repository). `index.html` must be at the web root.
4. Check links, mobile layout and privacy/terms pages after deployment.

No build step or external frontend dependencies. Never upload a bot token or an encryption key to a static site.

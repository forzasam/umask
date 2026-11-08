# umask — simplified homepage

A static HTML/CSS/JavaScript site ready for Cloudflare Pages.

## What's changed

The homepage now explains the product without diagrams, oversized cards, flow arrows, or repeated banners:

- **How it works**: three steps covering `/setup`, `/issue`, `/receive`, `/authenticate` and `/signout`.
- **Role setup**: one concise list of the bot's requirements (`Manage Roles` and role hierarchy only).
- **Security limits**: one understated note rather than a full marketing section.
- **Install + Support**: both remain prominent in the header and hero; no repeated closing call-to-action.

The existing wordmark, Privacy Policy, Terms and `config.js` integration are preserved.

## Deploy to Cloudflare Pages

1. If your live site has working bot-install and support URLs, **copy its existing `config.js` into this directory** before deploying. This archive contains placeholder link settings.
2. Review `terms.html` and `privacy.html` before a public release. Fill in the operator name, contact and legal details.
3. Upload the ZIP contents to your Cloudflare Pages project (or push the updated files to your connected Git repository). `index.html` must be at the web root.
4. Check links, mobile layout and privacy/terms pages after deployment.

No build step or external frontend dependencies. Never upload a bot token or an encryption key to a static site.

## Data requests (new)

`data-request.html` offers a concise privacy-request form linked from the
Privacy Policy and footer. It prepares an email addressed to
`support@umask.app`. **The form does not send data directly.** Visitors must
send the draft from their own email client. There is a copy-text fallback,
and users can alternatively open a **private** ticket in the support server.

This choice avoids adding a new backend and sensitive form-submission storage
to a static Cloudflare Pages website. The form is not an identity-verification
system and must never trigger automatic data deletion.

Before deploying:

- Preserve your LIVE `config.js` with install and support links. The packaged
  example has placeholders; `contactEmail` is already `support@umask.app`.
- Verify you can receive mail through Cloudflare Email Routing at
  `support@umask.app`, and that the support server actually has private tickets.
- **Deploy the bot update first**, and check daily cleanup and local snapshots
  before publishing a Privacy Policy that describes them as implemented.
- Confirm operator identity, effective dates, lawful basis, provider regions,
  provider log retention and international transfer information. `legalReady`
  stays false until these matters are reviewed. See `LEGAL_NOTES.md`.

No sensitive credentials or bot/database files belong in Cloudflare Pages.

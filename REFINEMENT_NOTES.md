# Site refinement — November 2026

This is a static, Cloudflare Pages-ready website update. It starts from the site version with `data-request.html`, Privacy Policy and Terms of Service.

## What changed

- Made the homepage headline explicitly about **Discord staff**, removed forced line breaks, and used balanced wrapping.
- Made the hero larger while maintaining the two primary actions: **Add to Discord** and **Join support server**.
- Removed uppercase eyebrow labels, numbered section labels, decorative badges, and redundant section headings.
- Kept monospace for actual Discord commands and code, rather than decorative labels.
- Made the setup explanation two concrete requirements: `Manage Roles` and bot role hierarchy.
- Preserved a direct statement that Umask does **not** guarantee protection against compromise or immediate revocation during an outage.
- Consistent CTA arrow icon treatment and subtle action feedback; privacy form now confirms that preparing an email is not sending one.
- Simplified legal-page navigation while preserving the **substantive legal wording** and contact configuration.
- Respects `prefers-reduced-motion` for transitions.

## Deploy

1. Unzip and upload the **contents** to your existing Cloudflare Pages project, or deploy this ZIP directly.
2. **Preserve your live `config.js`** (installation URL, support invite, operator details, legal readiness). The ZIP includes an example config with blank install and support links.
3. No Python bot, server database or Discord command changes are required.
4. Test both external links, the form's mailto draft, and copy feedback on mobile and desktop.

Do not place Discord tokens or other secrets in `config.js` or static website files.

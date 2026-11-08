# Operator checklist — do not delete before public release

The updated HTML is a **draft** pending review. Before setting `legalReady: true` in `config.js`:

- Verify the new bot release is actually deployed and that daily housekeeping and snapshots have succeeded.
- Confirm the operator's identity and privacy contact details, data-hosting country/region, intended lawful basis, any international transfer arrangements, the support-ticket system's data handling, and the email-forwarding destination.
- Check the service provider's log retention (PebbleHost, Cloudflare and any mailbox provider).
- Set the policy's publication/effective date and have it legally reviewed for the operator's jurisdiction.
- Set `contactEmail: "support@umask.app"` and test Cloudflare Email Routing.
- Before advertising support tickets, ensure a private ticket channel and a trusted person to handle them.
- Confirm backups include the independent `private/erasure-ledger.jsonl`, and test a restore without restarting bot sessions unsafely.
- Do not promise a 30-day offsite retention period unless an actual encrypted offsite archive and deletion routine have been set up.

The request form opens the visitor's email client. It **does not submit to Cloudflare or the bot**, and displays this clearly. The visitor must send their email. This was chosen to avoid a web backend handling personal information or publicly exposing a destructive deletion endpoint.

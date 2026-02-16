# WebFinger

This file lets `@jg@jg.dev` resolve to the Mastodon account `@jg@indieweb.social`.
Mastodon instances query `/.well-known/webfinger?resource=acct:jg@jg.dev` to discover the profile.
Static hosting can't match on query parameters. I need a rewrite rule on my host (vercel) to serve this file.
The rewrite ensures Vercel serves the static file regardless of query parameters, and the headers set the correct MIME
type and CORS (Mastodon instances need CORS to do the lookup). This is a single-account setup. It hardcodes the response
regardless of what resource parameter is passed. That's fine since I am the only user on jg.dev. If someone queries
`?resource=acct:anyone@jg.dev`, they'll get my profile back, but that's harmless.

See: https://webfinger.net/

# security.txt

Added February 2026. Located at `/.well-known/security.txt`, this follows the RFC 9116 spec. The file is PGP-signed and
references both the armored key at `/pgp.asc` and the WKD binary key in `/.well-known/openpgp/hu/`. It expires, so I'll
need to re-sign and update before then. The empty `openpgp/policy` file is required by the WKD spec. It can contain
flags but works fine empty for my use case.

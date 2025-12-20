# Lab1

## Security headers (Cloudflare Pages)

SecurityHeaders.com checks **HTTP response headers**, not HTML `<meta http-equiv>` tags.

This project configures headers using Cloudflare Pages’ [`_headers`](./_headers:1) file, including:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `Permissions-Policy`

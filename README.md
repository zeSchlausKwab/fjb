# Nostr Cron Bot

A simple bot that posts scheduled messages to Nostr.

## What it does

- Posts "GM" messages on weekdays (once daily at 9 AM)
- Posts "GFY" messages on weekends (once daily at 11 AM)
- Uses NDK (Nostr Development Kit) to interact with the Nostr network
- Connects to major relays like nos.lol, nostr.land, nostr.wine, etc.

## Bot's Public Key

npub1q88d5kwa2gpsjpp2twpp8jegque8cwv69muzgrl37rgq5k5slaysklsj5w

## Installation

```bash
# Install dependencies
pnpm i
```

## Development

```bash
# Run development server
pnpm dev
```

The server will start at http://localhost:3000

## Technologies

- Node.js
- Hono
- TypeScript

## License

MIT

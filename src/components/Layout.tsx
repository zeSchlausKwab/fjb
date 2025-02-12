import { html } from "hono/html";

export const Layout = () => html`
  <html>
    <head>
      <title>fiatjabBuzz Bot</title>
    </head>
    <body>
      <h1>fiatjabBuzz (fjb) - Nostr Cron Bot</h1>
      <p>A simple bot that posts scheduled messages to Nostr.</p>

      <h2>Schedule</h2>
      <ul>
        <li>Weekdays (Mon-Fri): Posts "GM" at 9:00 AM</li>
        <li>Weekends (Sat-Sun): Posts "GFY" at 11:00 AM</li>
      </ul>

      <h2>Bot's Public Key</h2>
      <pre>
        npub1q88d5kwa2gpsjpp2twpp8jegque8cwv69muzgrl37rgq5k5slaysklsj5w
      </pre
      >

      <h2>Connected Relays</h2>
      <ul>
        <li>wss://nos.lol</li>
        <li>wss://nostr.land</li>
        <li>wss://nostr.wine</li>
        <li>wss://purplerelay.com</li>
        <li>wss://relay.damus.io</li>
        <li>wss://relay.snort.social</li>
      </ul>

      <p>Server status: Running</p>
    </body>
  </html>
`;

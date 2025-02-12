import { serve } from "@hono/node-server";
import { Hono } from "hono";
import cron from "node-cron";
import { Layout } from "./components/Layout";
import { ndkService } from "./services/ndk";
import { publishService } from "./services/publish";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Layout());
});

const handleWeekday = async () => {
  console.log("Running weekday task:", new Date().toISOString());
  await publishService.publishText(
    "GM nostr:npub180cvv07tjdrrgpa0j7j7tmnyl2yr6yr7l8j4s3evf6u64th6gkwsyjh6w6"
  );
};

const handleWeekend = async () => {
  console.log("Running weekend task:", new Date().toISOString());
  await publishService.publishText(
    "gfy nostr:npub180cvv07tjdrrgpa0j7j7tmnyl2yr6yr7l8j4s3evf6u64th6gkwsyjh6w6"
  );
};

await ndkService.ndk.connect();
console.log("NDK connected");

cron.schedule("*/10 * * * * *", () => {
  console.log("Testing schedule:", new Date().toISOString());
  // handleWeekday();
});

cron.schedule("0 9 * * 1-5", () => {
  handleWeekday();
});

cron.schedule("0 11 * * 0,6", () => {
  handleWeekend();
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

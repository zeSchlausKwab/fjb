import { serve } from "@hono/node-server";
import { Hono } from "hono";
import cron from "node-cron";
import { ndkService } from "./services/ndk";
import { publishService } from "./services/publish";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const handleWeekday = async () => {
  console.log("Running weekday task:", new Date().toISOString());
  await publishService.publishText("It's a weekday! 🏢");
};

const handleWeekend = async () => {
  console.log("Running weekend task:", new Date().toISOString());
  await publishService.publishText("Weekend time! 🎉");
};

await ndkService.ndk.connect();
console.log("NDK connected");

cron.schedule("*/10 * * * * *", () => {
  console.log("Testing schedule:", new Date().toISOString());
  // handleWeekday();
});

cron.schedule("0 * * * 1-5", () => {
  handleWeekday();
});

cron.schedule("0 * * * 0,6", () => {
  handleWeekend();
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import cron from "node-cron";
import { ndkService } from "./services/ndk";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const handleWeekday = async () => {
  console.log("Running weekday task:", new Date().toISOString());
  await ndkService.ndk.connect();
};

const handleWeekend = async () => {
  console.log("Running weekend task:", new Date().toISOString());
  await ndkService.ndk.connect();
};

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

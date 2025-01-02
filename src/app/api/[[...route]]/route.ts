import { Hono } from "hono";
import { cors } from "hono/cors";

export const runtime = "edge";

const app = new Hono().basePath("/api");
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);

app.get("/hello", (c) => {
  return c.text("Hello World");
});

export default app;

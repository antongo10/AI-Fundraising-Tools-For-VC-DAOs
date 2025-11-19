import "dotenv/config";
import express from "express";
import cors from "cors";
import campaignsRouter from "./routes/campaigns";
import investorsRouter from "./routes/investors";
import metricsRouter from "./routes/metrics";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/campaigns", campaignsRouter);
app.use("/api/investors", investorsRouter);
app.use("/api/metrics", metricsRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
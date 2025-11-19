import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_req, res) => {
  const investors = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  res.json(investors);
});

router.post("/", async (req, res) => {
  const { email, walletAddress, role } = req.body as {
    email: string;
    walletAddress?: string;
    role?: "ADMIN" | "OWNER" | "INVESTOR";
  };
  const created = await prisma.user.create({
    data: { email, walletAddress, role: role ?? "INVESTOR" },
  });
  res.status(201).json(created);
});

export default router;
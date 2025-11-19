import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_req, res) => {
  const [campaignCount, investorCount, transactionCount, amountRaisedAgg] = await Promise.all([
    prisma.campaign.count(),
    prisma.user.count(),
    prisma.transaction.count(),
    prisma.transaction.aggregate({ _sum: { amountUsd: true } }),
  ]);

  const amountRaised = amountRaisedAgg._sum.amountUsd ?? 0;

  res.json({
    campaignCount,
    investorCount,
    transactionCount,
    amountRaised,
    vestingProgress: 0,
  });
});

export default router;
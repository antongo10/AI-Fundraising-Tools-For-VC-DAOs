import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_req, res) => {
  const campaigns = await prisma.campaign.findMany({ orderBy: { createdAt: "desc" } });
  res.json(campaigns);
});

router.post("/", async (req, res) => {
  const { name, network, tokenType } = req.body as {
    name: string;
    network: "ETHEREUM" | "SOLANA";
    tokenType: "ERC20" | "ERC721" | "NFT";
  };
  const created = await prisma.campaign.create({
    data: { name, network, tokenType },
  });
  res.status(201).json(created);
});

export default router;
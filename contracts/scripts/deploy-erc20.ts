import { ethers } from "hardhat";

async function main() {
  const name = process.env.TOKEN_NAME || "FundraisingToken";
  const symbol = process.env.TOKEN_SYMBOL || "FUND";
  const initialSupply = Number(process.env.INITIAL_SUPPLY || 1000000);

  const [deployer] = await ethers.getSigners();
  console.log("Deploying ERC20 with account:", deployer.address);

  const ERC20Factory = await ethers.getContractFactory("ERC20Token");
  const erc20 = await ERC20Factory.deploy(name, symbol, initialSupply);
  await erc20.waitForDeployment();

  const address = await erc20.getAddress();
  console.log("ERC20 deployed at:", address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
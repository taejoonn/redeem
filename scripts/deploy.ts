const hre = require("hardhat");


async function main() {
  let signers = await hre.ethers.getSigners();
  let owner = signers[0];

  const DummyFactory = await hre.ethers.getContractFactory("Dummy", owner);
  const Dummy = await DummyFactory.deploy();

  const RedeemableFactory = await hre.ethers.getContractFactory('Redeemable', owner);
  const Redeemable = await RedeemableFactory.deploy("TestToken", "TST", 10000000, Dummy.address);
  console.log("Redeemable deployed at: " + Redeemable.address)
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

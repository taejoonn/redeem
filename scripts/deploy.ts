const hre = require("hardhat");


async function main() {
  let signers = await hre.ethers.getSigners();
  let owner = signers[0];

  // const GeneratorFactory = await hre.ethers.getContractFactory("GeneratorCopyright", owner)
  // const Generator = await GeneratorFactory.deploy("0.8.0");

  const RedeemableFactory = await hre.ethers.getContractFactory('Redeemable', owner);
  const Redeemable = await RedeemableFactory.deploy("TestToken", "TST", 10000000, '0x0000000000000000000000000000000000000000');
  console.log("Redeemable deployed at: " + Redeemable.address)
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

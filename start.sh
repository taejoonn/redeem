npx hardhat node --hostname 0.0.0.0 &
sleep 10
npx hardhat run --network localhost scripts/deploy.ts
while true; do  sleep 1; done

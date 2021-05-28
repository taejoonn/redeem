const _chai = require('chai');
const _mocha = require('mocha');
const waffle = require('ethereum-waffle');
const solidity = require('ethereum-waffle').solidity;
// import {Redeemable} from '../typechain/Redeemable';

_chai.use(solidity);
const { expect } = _chai;

describe('Redeemable', () => {
    let signers;
    let redeemable;
    let owner;

    beforeEach(async () => {
        signers = await hre.ethers.getSigners();
        owner = signers[0];


        redeemable = await hre.ethers.getContractFactory('Redeemable', signers[0]);
    
    })
    function findEvent(logs, eventName) {
        for (let i = 0; i < logs.length; i++) {
          if (logs[i].event === eventName) {
            return logs[i];
          }
        }
    
        return null;
      }

      it('Ensure onlyOwner modifier prohibits all users but the owner to transact with the function', async function () {
          
      })
    
      it('The encryptionKey should belong to the user that provided it', async function () {
          
      })
    
      it('Users encrypted data is accepted by the redeem function', async function () {
          
      })
    
      it('The encryptionKey string is a valid encryption key', async function () {
          
      })
})

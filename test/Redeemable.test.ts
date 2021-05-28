import { ethers } from 'hardhat';
import { solidity } from 'ethereum-waffle';
import chai from 'chai';
import mocha from 'mocha';

import { Redeemable } from '../typechain/ERC20Redeemable';

chai.use(solidity);
const { expect } = chai;

describe('Redeemable', () => {
    let signers: any;
    let redeemable: Redeemable;
    let owner: any;

    beforeEach(async () => {
        signers = await ethers.getSigners();
        owner = signers[0];


        redeemable = await ethers.getContractFactory('ERC20Redeemable', signers[0]);
    
    })
    function findEvent(logs: any, eventName: string) {
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
    
    import { ethers } from 'hardhat';
import { solidity } from 'ethereum-waffle';
import chai from 'chai';
import mocha from 'mocha';

import { Redeemable } from '../typechain/ERC20Redeemable';

chai.use(solidity);
const { expect } = chai;

describe('Redeemable', () => {
    let signers: any;
    let redeemable: Redeemable;
    let owner: any;

    beforeEach(async () => {
        signers = await ethers.getSigners();
        owner = signers[0];


        redeemable = await ethers.getContractFactory('ERC20Redeemable', signers[0]);
    
    })
    function findEvent(logs: any, eventName: string) {
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

})

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

      it('Test Case 1: TODO', async function () {
          
      })
})
import { Block, BlockData } from './block';
import { cryptoHash } from './crypto-hash';

export class Blockchain {
  chain: BlockData[];

  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data: string[] | string) {
    const newBlock = Block.mine(data, this.chain[this.chain.length - 1]);
    this.chain.push(newBlock);
  }
  static isValidChain(chain: BlockData[]) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];

      const actualLastHash = chain[i - 1].hash;

      if (block.lastHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(
        block.data,
        block.timestamp,
        block.lastHash
      );

      if (validatedHash !== block.hash) return false;
    }

    return true;
  }
}

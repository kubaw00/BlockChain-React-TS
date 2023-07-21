import { Block, BlockData } from './block';

export class Blockchain {
  chain: BlockData[];

  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data: string[] | string) {
    const newBlock = Block.mine(data, this.chain[this.chain.length - 1]);
    this.chain.push(newBlock);
  }
}

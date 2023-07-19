import { GENESIS_DATA } from './config';

export interface Block {
  timestamp: string;
  data: string[];
  hash: string;
  lastHash: string;
}

export class Block {
  constructor({ timestamp, data, hash, lastHash }: Block) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
  static genesis() {
    return new Block(GENESIS_DATA);
  }
}

console.log(Block.genesis());

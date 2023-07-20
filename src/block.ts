import { GENESIS_DATA } from './config';

export interface BlockData {
  timestamp: string | Date;
  data: string[];
  hash: string;
  lastHash: string;
}

export class Block {
  timestamp: string | Date;
  data: string[];
  hash: string;
  lastHash: string;

  constructor({ timestamp, data, hash, lastHash }: BlockData) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
  static genesis(): BlockData {
    return new this(GENESIS_DATA);
  }
  static mine(data: string[], lastBlock: BlockData) {
    return new this({
      data,
      lastHash: lastBlock.hash,
      timestamp: new Date(),
      hash: 'dfd',
    });
  }
}

console.log(Block.genesis());

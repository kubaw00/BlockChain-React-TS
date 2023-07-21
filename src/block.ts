import { GENESIS_DATA } from './config';
import { cryptoHash } from './crypto-hash';

export interface BlockData {
  timestamp: number;
  data: string[] | string;
  hash: string;
  lastHash: string;
}

export class Block {
  timestamp: number;
  data: string[] | string;
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
  static mine(data: string[] | string, lastBlock: BlockData) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;

    return new this({
      data,
      lastHash: lastBlock.hash,
      timestamp,
      hash: cryptoHash(data, timestamp, lastHash),
    });
  }
}

console.log(Block.genesis());

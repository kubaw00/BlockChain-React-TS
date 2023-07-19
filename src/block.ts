export interface Block {
  timestamp: string;
  data: string;
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
}

console.log(
  new Block({
    timestamp: '01/01/01',
    data: 'one',
    hash: 'fo-hash',
    lastHash: 'last-fo-hash',
  })
);

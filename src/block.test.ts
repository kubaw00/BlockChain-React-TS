import { Block } from './block';
import { GENESIS_DATA } from './config';
import { cryptoHash } from './crypto-hash';

describe('Block', () => {
  const timestamp = 234234234234;
  const lastHash = 'last-hash';
  const hash = 'bar-hash';
  const data = ['data'];
  const block = new Block({ timestamp, data, hash, lastHash });

  test('if block has data, timestamp, hash and lastHash', () => {
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.data).toBe(data);
    expect(block.timestamp).toBe(timestamp);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();
    test('returns instance of Block', () => {
      expect(Block.genesis() instanceof Block).toBe(true);
    });
    test('equals GENESIS_DATA', () => {
      expect(Block.genesis()).toEqual(GENESIS_DATA);
    });
  });

  describe('mine()', () => {
    const lastBlock = Block.genesis();
    const data = ['piece of data'];
    const lastHash = lastBlock.hash;

    const mineBlock = Block.mine(data, lastBlock);
    const timestamp = mineBlock.timestamp;
    test('lastHash of mineBlock equals hash genesis', () => {
      expect(mineBlock.lastHash).toEqual(lastHash);
    });
    test('mineBlock is instanceof genesisBlock', () => {
      expect(mineBlock instanceof Block);
    });
    test('data equals mineBlock.data', () => {
      expect(data).toEqual(mineBlock.data);
    });
    test('timestamp is not undefined', () => {
      expect(mineBlock.timestamp).not.toBe(undefined);
    });
    test('mine block has sha-256 hash', () => {
      expect(mineBlock.hash).toEqual(cryptoHash(data, timestamp, lastHash));
    });
  });
});

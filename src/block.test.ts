import { Block } from './block';
import { GENESIS_DATA } from './config';

describe('Block', () => {
  const timestamp = 'a-date';
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
});

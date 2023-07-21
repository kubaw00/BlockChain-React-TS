import { Blockchain } from './blockchain';
import { Block } from './block';

describe('Blockchain', () => {
  const blockchain = new Blockchain();
  test('contains poroperty `chain` instanceof Array', () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });
  test('first block of chain property is genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });
  test('add new block to chain', () => {
    const newData = 'new data';
    blockchain.addBlock(newData);
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });
});

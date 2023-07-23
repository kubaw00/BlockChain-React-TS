import { Blockchain } from './blockchain';
import { Block } from './block';

describe('Blockchain', () => {
  let blockchain: Blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

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
  describe('isValidChain()', () => {
    describe('when the chain does not start with the geneis block', () => {
      test('returns false', () => {
        //@ts-ignore
        blockchain.chain[0] = { data: 'fake -genesis' };
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });
    describe('when the chaind starts with the gensis block and has multiple blocks', () => {
      beforeEach(() => {
        blockchain.addBlock({ data: 'Bears' });
        blockchain.addBlock({ data: 'Dogs' });
        blockchain.addBlock({ data: 'Cats' });
      });
      describe('and a last hash reference has changed', () => {
        test('return false', () => {
          blockchain.chain[2].lastHash = 'broken-lastHash';

          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe('and the chain contains a block with an invalid field', () => {
        test('return false', () => {
          blockchain.chain[2].data = 'broken-data';

          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe('and the chain does not contain aby invalid blocks', () => {
        test('return true', () => {
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
        });
      });
    });
  });
});

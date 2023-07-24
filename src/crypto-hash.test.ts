//@ts-nocheck
import { cryptoHash } from './crypto-hash';

describe('cryptoHash()', () => {
  test('generates sha-256 hashed output', () => {
    expect(cryptoHash('foo')).toBe(
      '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
    );
  });
  test('generates the same output with the same input in any order', () => {
    expect(cryptoHash('foo', 'boo', 'goo')).toBe(
      cryptoHash('boo', 'goo', 'foo')
    );
  });
});

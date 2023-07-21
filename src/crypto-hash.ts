import crypto from 'crypto';

type CryptoInput = any[];
// | [string[], number, string]
// | [number, string, string[]]
// | [number, string[], string]
// | [string[], string, number]
// | [string | number | string[]]
// | [string | string[] | string]
// | string[];

export const cryptoHash = (...inputs: CryptoInput) => {
  const hash = crypto
    .createHash('sha-256')
    .update(inputs.sort().join(' '))
    .digest('hex');
  return hash;
};

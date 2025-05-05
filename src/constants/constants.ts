export const PHONE_WHITELIST = process.env.PHONE_WHILELIST?.split(',') ?? [];

// export const categoryNameMap: Record<string, string> = {
//   development: '개발',
//   daily: '일상',
//   blockchain: '블록체인',
// };

export const categoryLabelMap = [
  { key: 'daily', label: 'Daily' },
  { key: 'travel', label: 'Travel' },
  { key: 'development', label: 'Development' },
  { key: 'devops', label: 'DevOps' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'crypto', label: 'Crypto Currency' },
  { key: 'web3', label: 'Web3' },
];

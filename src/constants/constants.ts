export const PHONE_WHITELIST = process.env.PHONE_WHILELIST?.split(',') ?? [];

// export const categoryNameMap: Record<string, string> = {
//   development: '개발',
//   daily: '일상',
//   blockchain: '블록체인',
// };

interface CategoryInfo {
  key: string;
  label: string;
  parent?: string;
  icon?: string;
  description?: string;
}

export const categoryOverrides: Record<string, Partial<CategoryInfo>> = {
  daily: { label: 'Daily' },
  travel: { label: 'Travel' },
  development: { label: 'Development' },
  devops: { label: 'DevOps' },
  blockchain: { label: 'DevOps' },
  crypto: { label: 'Crypto Currency' },
  web3: { label: 'Web3' },
};

export const categoryLabelMap = [
  { key: 'daily', label: 'Daily' },
  { key: 'travel', label: 'Travel' },
  { key: 'development', label: 'Development' },
  { key: 'devops', label: 'DevOps' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'crypto', label: 'Crypto Currency' },
  { key: 'web3', label: 'Web3' },
];

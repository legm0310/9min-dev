import { CategoryInfo } from '@/types/types';

export const PHONE_WHITELIST = process.env.PHONE_WHILELIST?.split(',') ?? [];

export const categoryOverrides: Record<string, Partial<CategoryInfo>> = {
  daily: { label: 'Daily' },
  travel: { label: 'Travel' },
  development: { label: 'Development' },
  devops: { label: 'DevOps' },
  blockchain: { label: 'Blockchain' },
  crypto: { label: 'Crypto Currency' },
  web3: { label: 'Web3' },
};

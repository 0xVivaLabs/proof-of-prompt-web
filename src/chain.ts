import { defineChain } from 'viem'

export const galadrielDevnet = defineChain({
  id: 696969,
  name: 'Galadriel Devnet',
  nativeCurrency: { name: 'GAL', symbol: 'GAL', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://devnet.galadriel.com'] },
  },
  blockExplorers: {
    default: { name: 'galadriel', url: 'https://explorer.galadriel.com' },
  },
  contracts: {},
})
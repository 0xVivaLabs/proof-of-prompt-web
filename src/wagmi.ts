import { http, createConfig } from 'wagmi'
import { anvil } from 'wagmi/chains'
import { galadrielDevnet } from './chain'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [galadrielDevnet, anvil],
  connectors: [
    injected(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [galadrielDevnet.id]: http(),
    [anvil.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    foundry({
      project: '../contract',
      deployments: { 
        Agent: { 
          31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', 
          696969: '0x37CC59105D764aadf3b7a9C4aAA67062dF6cB666'
        }, 
        ChatOracle: {
          31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
          696969: '0x2A54624dBD1bdCB6e3a6d37991F9Fbce26EF9850'
        }
      },
      forge: {
        clean: false,  
        build: false,
        rebuild: false,
      }
    }),
  ],
})

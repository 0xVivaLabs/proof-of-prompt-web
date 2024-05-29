import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "../contract",
      deployments: {
        Agent: {
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          696969: "0x89Ae3F49c95785D29513aAD96Ed4d6d0613f42f1",
        },
        ChatOracle: {
          31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          696969: "0xEcdeb01037C848515e12158Dae412dc2b86EB066",
        },
      },
      forge: {
        clean: false,
        build: false,
        rebuild: false,
      },
    }),
  ],
});

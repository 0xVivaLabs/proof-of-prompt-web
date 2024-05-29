import { http, createConfig } from "wagmi";
import { anvil } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { galadrielDevnet } from "./chain";

export const config = createConfig({
  chains: [galadrielDevnet, anvil],
  connectors: [injected()],
  transports: {
    [galadrielDevnet.id]: http(),
    [anvil.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

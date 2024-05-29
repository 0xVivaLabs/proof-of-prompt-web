import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { formatEther } from "viem";
import { useAccount, useChainId } from "wagmi";
import { readContract } from "wagmi/actions";

import "./index.css";

import { coinBalanceAtom, isShowClaimAtom } from "./atom.ts";
import Account from "./components/Account.tsx";
import Claim from "./components/Claim.tsx";
import Connect from "./components/Connect.tsx";
import Mining from "./components/Mining.tsx";
import Streaming from "./components/Streaming.tsx";
import { agentConfig } from "./generated.ts";
import Logo from "./logo.png";
import { config } from "./wagmi.ts";

function App() {
  const { address } = useAccount();
  const chainId = useChainId();

  const isShowClaim = useAtomValue(isShowClaimAtom);
  const [coinBalance, setCoinBalance] = useAtom(coinBalanceAtom);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address) return;
      try {
        const balance = await readContract(config, {
          abi: agentConfig.abi,
          address: agentConfig.address[chainId],
          functionName: "balanceOf",
          args: [address],
        });
        setCoinBalance(balance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, [address, setCoinBalance, chainId]);

  return (
    <div className="bg-light min-h-screen flex flex-col px-12 justify-between">
      <header className="flex items-center gap-x-2 mt-8">
        <div className="flex-1">
          <img src={Logo} alt="Logo" className="h-24 w-auto" />
        </div>
        {address && <div className="text-2xl font-sans mr-8">$PoP: {formatEther(coinBalance)}</div>}
        <div>
          <button className="btn" onClick={() => window.open("https://docs.galadriel.com/faucet")} type="button">
            Faucet
          </button>
        </div>
        <div>{address ? <Account /> : <Connect />}</div>
      </header>

      <div className="flex-1 flex flex-col">
        {isShowClaim && <Claim />}
        <Mining />
        <Streaming />
      </div>

      <footer className="flex justify-center mb-8">
        <p className="font-mono text-sm text-gray-500">© 2024 Prove Of Prompt</p>
      </footer>
    </div>
  );
}

export default App;

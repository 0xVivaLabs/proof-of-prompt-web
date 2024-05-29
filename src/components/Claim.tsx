import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useChainId, useReadContract, useWriteContract } from "wagmi";

import { isShowClaimAtom, latestUserRunAtom } from "../atom";
import { agentConfig } from "../generated";

function Claim() {
  const setIsShowClaim = useSetAtom(isShowClaimAtom);
  const latestRun = useAtomValue(latestUserRunAtom);
  const chainId = useChainId();

  const target = "PoP";

  const [isClaiming, setIsClaiming] = useState(false);

  const { data } = useReadContract({
    abi: agentConfig.abi,
    address: agentConfig.address[chainId],
    functionName: "getMessageHistory",
    // biome-ignore lint/style/noNonNullAssertion: RunId is always defined
    args: [latestRun.runId!],
  });

  const { writeContract, isIdle, isPending, isError, error, isSuccess } = useWriteContract();

  useEffect(() => {
    if (data && data.length > 0) {
      console.log("last message: ", data);
    }
  }, [data]);

  const handleClaim = async () => {
    setIsClaiming(true);
    writeContract({
      abi: agentConfig.abi,
      address: agentConfig.address[chainId],
      functionName: "claim",
      // biome-ignore lint/style/noNonNullAssertion: RunId is always defined
      args: [latestRun.runId!],
    });
    setIsClaiming(false);
  };

  useEffect(() => {
    if (isError) {
      alert(error.message);
    }
  }, [isError, error]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-light p-6 rounded-custom shadow-box">
        <button
          className="absolute top-2 right-2 text-2xl font-bold btn"
          onClick={() => setIsShowClaim(false)}
          type="reset"
        >
          &times;
        </button>
        {data && data.length >= 1 && (
          <div className="flex min-h-[240px] min-w-[320px]">
            {data[1].content[0].value === target ? (
              <div className="flex flex-col items-center font-mono pt-8">
                <p>Q: {data[0].content[0].value}</p>
                <p>A: {data[1].content[0].value}</p>
                <button className="btn" onClick={handleClaim} disabled={isClaiming} type="button">
                  Claim
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center font-mono pt-8">
                <p className="text-accent">Not PoP</p>
                <p>Q: {data[0].content[0].value}</p>
                <p>A: {data[1].content[0].value}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Claim;

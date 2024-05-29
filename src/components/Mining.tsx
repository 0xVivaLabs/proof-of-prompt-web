import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useChainId, useWriteContract } from "wagmi";

import { isShowClaimAtom, userRunsAtom } from "../atom";
import { agentConfig } from "../generated";

const inputValueAtom = atom("");

function Mining() {
  // When the App is launched, isIdle will be triggered once and set to true
  // When the wallet is invoking, isPending will be triggered once and set to true
  // When the transaction is sent, isSuccess will be set to true
  // Then the events can be obtained
  // TODO: save data to lastRunId atom
  const { writeContract, isIdle, isPending, isError, error, isSuccess } = useWriteContract();

  useEffect(() => {
    if (isError) {
      alert(error.message);
    }
  }, [isError, error]);

  const inputRef = useRef<HTMLInputElement>(null);

  const chainId = useChainId();
  const userRuns = useAtomValue(userRunsAtom);
  const setShowClaim = useSetAtom(isShowClaimAtom);
  const [inputValue, setInputValue] = useAtom(inputValueAtom);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        {userRuns.length > 0 && (
          <div>
            {userRuns.length > 0 && <h3 className="font-mono italic">Your last run</h3>}
            {userRuns.slice(-1).map((run) => {
              return (
                <div className="data-row box" key={run.runId}>
                  <p>{run.runId?.toString()}</p>
                  <p>{run.query}</p>
                  <button className="btn" type="button" onClick={() => setShowClaim(true)}>
                    Claim
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="font-mono text-8 m-4">
        Target: <span className="text-accent text-12">PoP</span>
      </div>
      <div className="flex w-full items-center justify-center">
        <input
          className="box min-w-1/2 min-h-[40px] -mr-20 focus:outline-none"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Write user prompt which can generate 'PoP'"
        />
        <button
          className="btn z-10 min-w-12 w-16"
          type="button"
          disabled={!inputValue || isPending}
          onClick={() =>
            writeContract({
              abi: agentConfig.abi,
              address: agentConfig.address[chainId],
              functionName: "runAgent",
              args: [inputValue || ""],
            })
          }
        >
          {!isPending ? "Send" : "..."}
        </button>
      </div>
    </div>
  );
}

export default Mining;

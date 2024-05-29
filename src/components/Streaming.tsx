import { atom, useAtom } from "jotai";
import { useAccount, useChainId, useWatchContractEvent } from "wagmi";

import { agentRunsAtom, isShowStreamingAtom, userRunsAtom } from "../atom";
import { agentConfig } from "../generated";

const isFirstLoadingAtom = atom(true);

const Streaming = () => {
  const [runs, setRuns] = useAtom(agentRunsAtom);
  const [, setUserRuns] = useAtom(userRunsAtom);

  const { address } = useAccount();

  const [isShowStreaming, setIsShowStreaming] = useAtom(isShowStreamingAtom);
  const [isFirstLoading, setIsFirstLoading] = useAtom(isFirstLoadingAtom);

  const chainId = useChainId();

  useWatchContractEvent({
    address: agentConfig.address[chainId],
    abi: agentConfig.abi,
    eventName: "AgentRunCreated",
    onLogs(logs) {
      if (!logs || logs.length === 0) return;
      // biome-ignore lint/style/noNonNullAssertion: log.args is always defined
      const newRuns = logs.map((log) => log.args!);
      setRuns(newRuns);
      setUserRuns(newRuns.filter((run) => run.owner === address));
      if (isFirstLoading) setIsFirstLoading(false);
    },
    onError(error) {
      console.error("Error watching AgentRunCreated logs", error);
    },
    pollingInterval: 60_000,
  });

  return (
    <div className="flex justify-center mt-8">
      {!isFirstLoading &&
        <>
          {isShowStreaming ? (
            <div className="box w-2/3 m-2">
              {runs.length > 0 ? (
                runs.reverse().map((run) => {
                  return (
                    <div className="data-row" key={run.runId}>
                      <p>{run.runId?.toString()}</p>
                      <p>{run.query}</p>
                      <p>{run.owner}</p>
                    </div>
                  );
                })
              ) : (
                <p>No data</p>
              )}
            </div>
          ) : (
            <button className="btn" onClick={() => setIsShowStreaming(true)} type="button">
              Show All
            </button>
          )}
        </>
      }
    </div>
  );
};

export default Streaming;

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
    const [isFirstLoading, setIsFirstLoading]= useAtom(isFirstLoadingAtom);

    const chainId = useChainId();

    useWatchContractEvent({
        address: agentConfig.address[chainId],
        abi: agentConfig.abi,
        eventName: 'AgentRunCreated',
        onLogs(logs) {
            // Only add new runs to the list
            const newRuns = logs.map(log => log.args!);
            console.log('newRuns:', newRuns.map(run => run.runId ?? undefined));
            setRuns(newRuns);
            setUserRuns(newRuns.filter(run => run.owner === address));
            if(isFirstLoading) setIsFirstLoading(false)
        },
        onError(error) {
            console.error('Error watching AgentRunCreated logs', error);
        },
    });

    return (
        <>
            <h1>Streaming</h1>

            {isFirstLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {isShowStreaming ? (
                        <div>
                            {runs.length > 0 ? (
                                runs.reverse().map((run, index) => {
                                    return (
                                        <div key={index}>
                                            <p>runId: {run.runId?.toString()}</p>
                                            <p>prompt: {run.query}</p>
                                            <p>owner: {run.owner}</p>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No data</p>
                            )}
                        </div>
                    ) : (
                        <button onClick={() => setIsShowStreaming(true)}>
                            Show Streaming
                        </button>
                    )}
                </>
            )}
        </>
    );
};

export default Streaming;
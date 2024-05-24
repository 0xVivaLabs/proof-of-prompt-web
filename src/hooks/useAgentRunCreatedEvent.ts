import { useChainId, useWatchContractEvent } from "wagmi";
import { useAtom } from "jotai";

import { agentConfig } from "../generated";
import { agentRunsAtom } from "../atom";

const useAgentRunCreatedEvent = (setAgentRunCreated: (created: boolean) => void) => {
    const [runs, setRuns] = useAtom(agentRunsAtom);
    const chainId = useChainId();

    useWatchContractEvent({
        address: agentConfig.address[chainId],
        abi: agentConfig.abi,
        eventName: 'AgentRunCreated',
        onLogs(logs) {
            // Only add new runs to the list
            const newRuns = logs.map(log => log.args!);
            const updatedRuns = new Map(runs.map(run => [run.runId, run]));
            newRuns.forEach(run => {
                updatedRuns.set(run.runId, run);
            });
            setRuns(Array.from(updatedRuns.values()));
            setAgentRunCreated(true);
        },
        onError(error) {
            console.error('Error watching AgentRunCreated logs', error);
        },
    });
};

export default useAgentRunCreatedEvent;
import { atom, useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

import useAgentRunCreatedEvent from "../hooks/useAgentRunCreatedEvent";
import { agentRunCreatedAtom, agentRunsAtom } from "../atom";

const isLoadingAtom = atom(true);

const QueryStreaming = () => {
    const runs = useAtomValue(agentRunsAtom);
    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
    const [agentRunCreated, setAgentRunCreated] = useAtom(agentRunCreatedAtom);

    useAgentRunCreatedEvent(setAgentRunCreated);

    useEffect(() => {
        if (agentRunCreated && runs.length > 0) {
            setIsLoading(false);
        }
    }, [agentRunCreated, runs]);

    return (
        <div>
            <h1>Query Streaming</h1>
            {!isLoading ? (
                runs.map((run, index) => {
                    return (
                        <div key={index}>
                            <p>runId: {run.runId?.toString()}</p>
                            <p>prompt: {run.query}</p>
                            <p>owner: {run.owner}</p>
                        </div>
                    );
                })
            ) : (
                'loading...'
            )}
        </div>
    );
};

export default QueryStreaming;
import { type Address } from "viem";

export interface AgentRunCreatedArgs  {
    owner?: Address | undefined;
    runId?: bigint | undefined;
    query?: string | undefined;
}
import { atom } from "jotai";
import type { Address } from "viem";

export interface AgentRunCreatedArgs {
  owner?: Address | undefined;
  runId?: bigint | undefined;
  query?: string | undefined;
}

export const agentRunsAtom = atom<AgentRunCreatedArgs[]>([]);
export const userRunsAtom = atom<AgentRunCreatedArgs[]>([]);
export const latestUserRunAtom = atom((get) => {
  const userRuns = get(userRunsAtom);
  return userRuns[userRuns.length - 1];
});
export const lastRunId = atom(0n);

export const isShowClaimAtom = atom(false);
export const isShowQueryHistoryAtom = atom(false);
export const isShowMiningAtom = atom(false);
export const isShowStreamingAtom = atom(false);

export const coinBalanceAtom = atom(0n);

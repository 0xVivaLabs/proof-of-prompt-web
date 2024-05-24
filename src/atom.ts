import { atom } from "jotai";

import { AgentRunCreatedArgs } from "./interfaces";

export const agentRunsAtom = atom<AgentRunCreatedArgs[]>([])
export const userRunsAtom = atom<AgentRunCreatedArgs[]>([])
export const latestUserRunAtom = atom((get) => {
    const userRuns = get(userRunsAtom);
    return userRuns[userRuns.length - 1];
});

export const isShowClaimAtom = atom(false);
export const isShowQueryHistoryAtom = atom(false);
export const isShowMiningAtom = atom(false);
export const isShowStreamingAtom = atom(false)

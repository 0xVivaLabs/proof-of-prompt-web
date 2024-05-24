import { atom } from "jotai";
import { AgentRunCreatedArgs } from "./interfaces";

export const agentRunsAtom = atom<AgentRunCreatedArgs[]>([])
export const agentRunCreatedAtom = atom(false);
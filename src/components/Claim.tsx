import { useAtomValue, useSetAtom } from "jotai";
import { useChainId, useReadContract, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";

import { isShowClaimAtom, latestUserRunAtom } from "../atom";
import { agentConfig } from "../generated";

function Claim() {
    const setIsShowClaim = useSetAtom(isShowClaimAtom);
    const latestRun = useAtomValue(latestUserRunAtom);
    const chainId = useChainId();

    const target = 'PoP'

    const [isClaiming, setIsClaiming] = useState(false);


    const { data } = useReadContract({
        abi: agentConfig.abi,
        address: agentConfig.address[chainId],
        functionName: "getMessageHistory",
        args: [latestRun.runId!],
    });

    const { writeContract, isIdle, isPending, isError, isSuccess } = useWriteContract()

    useEffect(() => {
        if (data && data.length > 0) {
            console.log("last message: ", data);
        }
    }, [data]);

    const handleClaim = async () => {
        setIsClaiming(true);
        try {
            writeContract({
                abi: agentConfig.abi,
                address: agentConfig.address[chainId],
                functionName: "claim",
                args: [
                    latestRun.runId!
                ],
            })
        } catch (error) {
            console.error("Claim failed:", error);
        }
        setIsClaiming(false);
    };

    return (
        <div>
            <>
                <button onClick={() => setIsShowClaim(false)}>
                    &times;
                </button>
                {data && data.length >= 1 &&
                <> {data[1].content[0].value == target ?
                    <button onClick={handleClaim} disabled={isClaiming}>
                        Claim
                    </button>: 
                    <>
                        <p>Not PoP</p>
                        <p>Q: {data[0].content[0].value}</p>
                        <p>A: {data[1].content[0].value}</p>
                    </>}
                </>}
            </>
        </div>
    );
}

export default Claim;
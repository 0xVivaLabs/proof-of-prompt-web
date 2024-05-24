import { useEffect, useRef } from "react"
import { useChainId, useWriteContract } from "wagmi"
import { useAtomValue, useSetAtom } from "jotai"

import { agentConfig } from "../generated"
import { isShowClaimAtom, userRunsAtom } from "../atom"

function Mining() {
    // When the App is launched, isIdle will be triggered once and set to true
    // When the wallet is invoking, isPending will be triggered once and set to true
    // When the transaction is sent, isSuccess will be set to true
    // Then the events can be obtained
    const { writeContract, isIdle, isPending, isError, isSuccess, error } = useWriteContract()

    const inputRef = useRef<HTMLInputElement>(null)
    
    const chainId = useChainId()
    const userRuns = useAtomValue(userRunsAtom)
    const setShowClaim = useSetAtom(isShowClaimAtom)

    useEffect(() => {
        if (isError) {
            // TODO: handle ContractFunctionRevertedError
            console.error('Transaction error', error)
        }
    }
    , [isError])
    
    return (
        <div>
        <h2>Mine</h2>
        <div>
            {userRuns.length > 0 && 
            <div>
                <h3>Your runs</h3>
                {userRuns.slice(-1).map((run, index) => {
                    return (
                        <div key={index}>
                            <p>runId: {run.runId?.toString()}</p>
                            <p>prompt: {run.query}</p>
                            <p>owner: {run.owner}</p>
                            <button type="button" onClick={()=>setShowClaim(true)}>Claim</button>
                        </div>
                    );
                })}
            </div>
            }
        </div>
        <div>Target: PoP</div>
        <input type="text" ref={inputRef} placeholder="Write user prompt which can generate 'PoP'"/>
        <button type="button"
          onClick={() => 
            writeContract({
              abi: agentConfig.abi,
              address: agentConfig.address[chainId],
              functionName: 'runAgent',
              args: [
                inputRef.current?.value || '',
              ],
            })
          }>Send</button>
      </div>
    )
}

export default Mining
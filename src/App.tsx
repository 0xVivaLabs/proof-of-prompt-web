import { useAccount, useChainId, useConnect, useDisconnect } from 'wagmi'
import { useWriteContract } from 'wagmi'
import { useEffect, useRef } from 'react'

import { agentConfig } from './generated'
import QueryStreaming from './components/QueryStreaming'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()

  const { writeContract, isIdle, isPending, isError, isSuccess } = useWriteContract()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log('chainId', chainId)
  },[])

  useEffect(() => {
    // @dev 刚启动App时，会触发一次isIdle，为true
    // 点击弹出钱包时，会触发一次isPending，为true
    // 交易发出去时，isSuccess为true
    // 然后又才能获取到事件
    // 获取事件后如果有新的runId，应该让这个useWriteContract重置
    console.log( {isIdle, isPending, isError, isSuccess} )
  }, [isIdle, isPending, isError, isSuccess])


  // TODO: 首先要监听AgentRunCreated的事件，如果成功返回了chatId，就去 ChatOracle 读取结果并展示在页面上。
  // 如果满足条件，就去 Agent 调用Claim方法，去获取奖励。

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <div>
        <h2>Mine</h2>
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

      <QueryStreaming />
    </>
  )
}

export default App

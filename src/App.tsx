import { useAtomValue } from 'jotai'

import { isShowClaimAtom } from './atom.ts'
import Account from './components/Account.tsx'
import Connect from './components/Connect.tsx'
import Mining from './components/Mining.tsx'
import Streaming from './components/Streaming.tsx'
import Claim from './components/Claim.tsx'


function App() {
  const isShowClaim = useAtomValue(isShowClaimAtom)

  return (
    <>
      <Account />
      <Connect />
      {isShowClaim && <Claim />}
      <Mining />
      <Streaming />
    </>
  )
}

export default App

import { useAccount, useDisconnect } from "wagmi";

function Account() {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="connect">
      {account.status === "connected" && (
        <button className="btn" type="button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
    </div>
  );
}

export default Account;

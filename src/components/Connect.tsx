import { useConnect } from "wagmi";

function Connect() {
  const { connectors, connect } = useConnect();

  return (
    <div className="connect">
      {connectors.map((connector) => (
        <button className="btn" key={connector.uid} onClick={() => connect({ connector })} type="button">
          {connector.name}
        </button>
      ))}
    </div>
  );
}

export default Connect;

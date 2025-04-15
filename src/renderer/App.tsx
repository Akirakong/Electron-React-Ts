import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Electron + React + TypeScript</h1>
      <p>アプリケーション開発環境のサンプル</p>

      <div style={{ marginTop: "20px" }}>
        <p>カウンター: {count}</p>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: "0 10px", padding: "5px 10px" }}
        >
          減らす
        </button>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: "0 10px", padding: "5px 10px" }}
        >
          増やす
        </button>
      </div>

      <p style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
        Electron v{process.versions.electron} - Chrome v
        {process.versions.chrome} - Node v{process.versions.node}
      </p>
    </div>
  );
};

export default App;

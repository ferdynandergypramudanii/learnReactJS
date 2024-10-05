import { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);

  function clickHandle() {
    setCounter(counter + 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Button onClick</h3>
        <button onClick={clickHandle}>Saya di klik {counter} kali </button>
        <button style={{ marginTop: "10px" }} onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Button;

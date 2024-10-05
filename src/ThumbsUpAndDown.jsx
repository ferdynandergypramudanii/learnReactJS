// useState, useEffect, onClick

import { useState, useEffect } from "react";

function ThumbsUpAndDown() {
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);

  useEffect(() => {
    console.log(`thumbsUp: ${thumbsUp} | thumbsDown: ${thumbsDown}`);
  }, [thumbsUp, thumbsDown]);

  function handleReset() {
    setThumbsUp(0);
    setThumbsDown(0);
    console.log("reset");
  }

  return (
    <>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>thumbs up and thumbs down</h3>
        <div style={{ marginTop: "5px" }}>
          <button onClick={() => setThumbsUp(thumbsUp + 1)}>
            Thumbs Up 👍 ({thumbsUp})
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setThumbsDown(thumbsDown + 1)}
          >
            Thumbs Down 👍 ({thumbsDown})
          </button>
        </div>
        <button style={{ marginTop: "15px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default ThumbsUpAndDown;

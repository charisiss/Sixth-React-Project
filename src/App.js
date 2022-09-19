import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <p style={{ textAlign: "center", color: "white" }}>
        This is just a simple counter, to practice on custom hooks
      </p>

      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;

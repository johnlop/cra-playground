import React, { useState } from "react";

function Child() {
  console.log("Child render");
  return <p>Child</p>;
}

const MemChild = React.memo(Child);

function App() {
  const [title, setTitle] = useState("Welcome");
  console.log("App render");
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Title " + Math.random() * 100)}>
        Change title
      </button>
      <Child></Child>
    </div>
  );
}

export default App;

/*

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/

//https://zenn.dev/kaishuu0123/articles/68fcec232713145b050a

import React, { useState } from "react";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log("count = " + count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>press button</button>
    </div>
  );
}

export default App;

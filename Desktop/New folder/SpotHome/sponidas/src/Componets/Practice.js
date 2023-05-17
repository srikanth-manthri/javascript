import React, { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isvisiable, setIsVisiable] = useState(false);
  const Increment = () => {
    setCount(count + 1);
    };
    const Visiblities = () => {
        setIsVisiable(! isvisiable);
        setName("sreekanth")
    }

  return (
    <div>
      <header>hello</header>
          <h1>{count}</h1>
          <h1>{name}</h1>

      {isvisiable ? <h1> visiblity </h1> : <h1> not visiblity</h1>}
          <button onClick={Increment}> Increement the button </button>
          
      <button onClick={Visiblities}>visiblity check</button>
    </div>
  );
};
export default Practice;

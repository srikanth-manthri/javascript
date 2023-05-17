import React, { useState } from "react";
import Child from "./Child";


const Parent = () => {
    const [name, setName] = useState("nishiant");
    const ChangeName = () => {
        setName("uday");  
    }

    return (
        <div>
            <Child valueOfProps={name} ChangeName={ChangeName} />
            <h1>parent</h1>
            <button onClick= {() => setName("Uday")} > Change Name</button>
      </div>
    );
};
export default Parent;

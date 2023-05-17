import React, { useEffect } from "react";

const Condinatinal = () => {
  useEffect(() => {
    let age = 26;
    let name = "Srikanth";
    // if (age > 26) {
    //   console.log("You are know Old");
    // } else if (name === "Srikanth" && age === 26) {
    //   console.log("I am a 26 years old ");
    //   console.log("Srikanth is my Name");
    // } else {
    //   console.log("Nishanth is my Name");
    //   console.log("Iam a Lessthan A 26 years old");
    // }
    age > 26
      ? console.log("You are a 26 years old")
        : name === "Srikanth" && age === 26 ? (
            <>
                {console.log("I am a 26 years old")}
                {console.log("Srikanth is my Name")}
            </>
        ) : (
                
                <>
                    {console.log("Nishanth is my Name")}
                    {console.log("Iam a Lessthan A 26 years old")}
                </>
      )
  }, []);

  return (
    <div>
      <h1>Condinatinal</h1>
    </div>
  );
};
export default Condinatinal;

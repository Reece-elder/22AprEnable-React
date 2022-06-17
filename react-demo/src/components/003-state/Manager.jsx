import { useState } from "react";
import Display from "./Display";
import Setter from "./Setter";

const Manager = () => {

    // My setter requires a function to be passed as a prop
    // My display requires data to be passed as a prop

    // Create our state in a common component
    // stateValue      = our getter
    // setStateValue() = our setter
    // equal to useState() Inbuilt function, and we pass in a default / starting state
    // Make sure you import useState - import { useState } from "react";
    const[stateValue, setStateValue] = useState("");

    return ( 
        <>
            <Setter setData={setStateValue} />
            <Display data={stateValue} />
        </>
     );
}
 
export default Manager;
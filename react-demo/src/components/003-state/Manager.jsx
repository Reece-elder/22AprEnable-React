import { useState } from "react";
import ControlledInput from "./ControlledInput";
import Display from "./Display";

const Manager = () => {

    // My setter requires a function to be passed as a prop
    // My display requires data to be passed as a prop

    // Create our state in a common component
    // stateValue      = our getter
    // setStateValue() = our setter
    // equal to useState() Inbuilt function, and we pass in a default / starting state
    // Make sure you import useState - import { useState } from "react";
    const[stateValue, setStateValue] = useState("");

    // Exercise - Use 

    return ( 
        <>
            {/* <Setter setData={setStateValue} /> */}
            <ControlledInput setData={setStateValue}/>
            <Display data={stateValue} />
        </>
     );
}
 
export default Manager;
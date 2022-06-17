import Child from "./Child";
import DestructuredChild from "./DestructuredChild";

const Parent = () => {

    // Creating the var in my parent component
    let data = "it updates in the Child";

    return ( 
        <>
        {/* Making a prop called 'propData' which is equal to our variable data */}
            <Child propData={data}/>
            <DestructuredChild propData={data}/>
        </>
     );
}
 
export default Parent;
import Subtitle from "./SubTitle";
import Image from "./Image";

const Item = () => {
    // A function can only render one thing, we need to wrap our components into an element
    return ( 
        <>
            <Subtitle/>
            <Image/>
        </>
     );
}
 
export default Item;
import Subtitle from "./SubTitle";
import Image from "./Image";

// data is an object that contains subtitle, imageUrl and imageTitle
const Item = ({data}) => {
    // A function can only render one thing, we need to wrap our components into an element
    return ( 
        <>
            <Subtitle subtitle={data.subtitle}/>
            <Image imageUrl={data.imageUrl} imageTitle={data.imageTitle}/>
        </>
     );
}
 
export default Item;
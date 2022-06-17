// Not importing the entire props, just the attribute propData

// You know exactly what you need to pull from it 
const DestructuredChild = ({propData}) => {
    return ( 
        <>
            <h2> The other text is: {propData} </h2>
        </>
     );
}
 
export default DestructuredChild;
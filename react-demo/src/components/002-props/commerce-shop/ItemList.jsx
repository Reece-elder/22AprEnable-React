import Item from "./Item";

const ItemList = () => {
    // Item List renders an item with the prop 'data' 

    // {} Objects
    // [] arrays 
    // () functions

    // Create an array of objects to pass in
    const dataArray = [
        {
        subtitle: "item 1",
        imageUrl: "https://picsum.photos/350/350",
        imageTitle: "item 1"
        },
        {
            subtitle: "item 2",
            imageUrl: "https://picsum.photos/340/350",
            imageTitle: "item 2"
        },
        {
            subtitle: "item 3",
            imageUrl: "https://picsum.photos/330/350",
            imageTitle: "item 3"
        }
];

// Exercise - Using your social media animal page thing, update your animal component to contain the following:
// - name, image, age, favFood, isFluffy (boolean)
// - Pass this data to your animal component as a prop 
// - Stretch goal, create an array of objects, pass an index of this array as a prop

    return ( 
        <>
            <Item data={dataArray[0]}/>
            <Item data={dataArray[1]}/>
            <Item data={dataArray[2]}/>
        </>
     );
}
 
export default ItemList;
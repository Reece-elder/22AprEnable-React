// Tell my comp to take in a prop called propData
// It takes an object called 'props' which contains my data

// You don't know exactly what data you need to use
const Child = (props) => {

    console.log(props);


    // jsx allows us to write HTML directly into our JS
    // When in HTML, use {} to break out of HTML into JS

    // Creating a variable in the Child component
    // let data = "Test Text";
    // let data = props.propData;

    return ( 
        <>
            <h2> The text is: {props.propData} </h2>
        </>
     );
}
 
export default Child;
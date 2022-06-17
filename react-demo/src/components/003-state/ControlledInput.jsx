const ControlledInput = ({setData}) => {

    // Event is triggered when something happens on the page
    // An event logs all useful data
    // When the input field detects a change, it creates an event
    // .. contains the current value of the field

    return ( 
        <input type="text" placeholder="enter text" onChange={(event) => setData(event.target.value)}/>
     );
}
 
export default ControlledInput;
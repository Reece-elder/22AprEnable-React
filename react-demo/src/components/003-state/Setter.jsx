const Setter = ({setData}) => {

    // Callback = Function that is passed as a paramater
    // Callback is running the function you are passing in, rather than a specific one
    setData("This is new data");

    return ( <h3> Setter! </h3> );
}
 
export default Setter;
// name, favFood, age, isFluffy, image

// Destructuring the props object into our data object
const AnimalCard = ({data}) => {

    // destructuring the data object into the values I need
   const {name, favFood, age, isFluffy, imageUrl} = data;

    return ( 
        <>
            <h3> Name: {name} </h3>
            <h4> FavFood: {favFood} </h4>
            <h4> Age: {age} </h4>
            <img src={imageUrl} alt={name} width="350px"/>
            {/* Converting our boolean true -> "true" / false -> "false" */}
            <h4> Fluffy? {isFluffy.toString()}</h4>
        </>
     );
}
 
export default AnimalCard;
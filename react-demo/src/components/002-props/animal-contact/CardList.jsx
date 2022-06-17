import AnimalCard from "./AnimalCard";

const CardList = () => {

    // We want an array of objects
    const animalData = [
        {
            name: "Zaph",
            favFood: "Beef jerky",
            age: 8,
            isFluffy: true,
            imageUrl: "https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg"
        }, 
        {
            name: "Goldie",
            favFood: "fish flakes",
            age: 1,
            isFluffy: false,
            imageUrl: "fish image"
        },
        {
            name: "Boba",
            favFood: "Chicken",
            age: 2,
            isFluffy: true,
            imageUrl: "corgi image"
        },  
    ]

    ;

    // Return an animalCard for each object in our array

    // Exercise - Using a .map, render a series of components in your animal social media page
    // Stretch goal - Make favFood into an array, create <li> for each item in the array


    return ( 
        <>
            {
                // For each object in our animalData array do this thing
                animalData.map((animal) => {
                    console.log(animal);
                    return <AnimalCard data={animal}/>
                })
            }
        </>
     );
}
 
export default CardList;
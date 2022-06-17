// imageURL is our prop we are passing in

const Image = ({imageUrl, imageTitle}) => {
    return ( <img src={imageUrl} alt={imageTitle} width="350px"/> );
}
 
export default Image;
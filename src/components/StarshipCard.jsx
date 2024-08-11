const StarshipCard = (props) => {
    return (
        <li>
            <h1>Name: {props.starship.name}</h1>
            <p>Class: {props.starship.starship_class}</p>
            <p>Manufacturer: {props.starship.manufacturer}</p>
            <p>Model: {props.starship.model}</p>
        </li>
    )
}

export default StarshipCard;
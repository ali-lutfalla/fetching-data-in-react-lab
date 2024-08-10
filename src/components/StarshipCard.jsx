const StarshipCard = (props) => {
    return (
        <li>
            <h1>{props.starship.name}</h1>
            <p>{props.starship.starship_class}</p>
            <p>{props.starship.manufacturer}</p>
            <p>{props.starship.model}</p>
        </li>
    )
}

export default StarshipCard;
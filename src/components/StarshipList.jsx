import StarshipCard from './StarshipCard';

const StarshipList = (props) => {

    const renderstarships = props.starships.filter((starship, index) => {
        return props.searchName === starship.name;
    })


    return (
        <section>
            <ul>
                <p>Number of results: {renderstarships.length}</p>
                {renderstarships.map((starship, index) => (
                    <StarshipCard starship={starship} />
                ))}
            </ul>
        </section>
    )
};

export default StarshipList;
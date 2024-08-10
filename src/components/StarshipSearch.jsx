import { useState } from "react"

const StarshipSearch = (props) => {
    const [starshipName, setStarshipName] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSearch(starshipName);
        setStarshipName('');
    }

    return (
        <section>
            <h2>Search for starships</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">serach:</label>
                <input type="text" value={starshipName} onChange={(e) => setStarshipName(e.target.value)}/>
                <button type="submit">search</button>
            </form>
        </section>
    )
};

export default StarshipSearch;
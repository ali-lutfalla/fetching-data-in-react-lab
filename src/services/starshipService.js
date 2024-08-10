const BASE_URL = 'https://swapi.dev/api/starships';

const search = async () => {
    try {
        const res = await fetch(BASE_URL);

        if (!res.ok) {
            throw new Error(`response status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export {search};

// src/App.jsx

import { useEffect, useState } from 'react';

import './App.css';

import * as starshipService from './services/starshipService';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

const App = () => {

  const [starships, setStarships] = useState([]);

  const [searchName , setSearchName] = useState('');

  const handleSearch = (searchName) => {
    setSearchName(searchName);
  }

  const fetchData = async () => {
    const data = await starshipService.search();
    setStarships(data.results);
    console.log(data.results);
  };

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <>
    <StarshipSearch handleSearch={handleSearch} />
    <StarshipList starships={starships} searchName={searchName} />
    </>
  );
}

export default App
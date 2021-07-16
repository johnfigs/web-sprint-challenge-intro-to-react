import React, { useEffect, useState } from 'react';
import './App.css';
//import axios
import axios from 'axios';

//import character component
import Character from './components/Character';

//import styled components
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  useEffect(() =>{
    axios.get('https://swapi.dev/api/people')
    .then( res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch( err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((character) => <Character character={character} />)}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { useState } from 'react';

function App() {
  const [ data, isPending, error ] = useFetch('https://pokeapi.co/api/v2/pokemon');
  console.log(data);
  console.log(error);
  console.log(isPending);
  return (
    <div className="App">
      {
        isPending ? (<h1>Cargando</h1>) 
        : 
        data?.results.map((p) => <h3 key={p.name}>{p.name}</h3>)
      }
    </div>
  );
}

export default App;

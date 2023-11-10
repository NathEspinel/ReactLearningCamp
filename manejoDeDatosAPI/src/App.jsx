
import { useState, useEffect, useContext } from 'react';
import './App.css'
import { DataContext } from './contexts/DataContext';

function App() {

  const data = useContext(DataContext);
  console.log(data);
  return (
    <>
      <h1>Mi primer fetching de datos</h1>
      <p>Por que no funcionaaaaa!</p>
      {data.map((user) => <h2 key={user.id}>{user.title}</h2>)}
    </>
  )
}

export default App

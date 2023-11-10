
import { useState, useEffect, useContext } from 'react';
import './App.css'
import { DataContext } from './contexts/DataContext';

function App() {

  const callingDataContext = useContext(DataContext);
  console.log(callingDataContext);
  return (
    <>
      <h1>Mi primer fetching de datos</h1>
      <p>Por que no funcionaaaaa!</p>
    </>
  )
}

export default App

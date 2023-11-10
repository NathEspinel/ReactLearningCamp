
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [product, setProduct] = useState(null);

  const fetchData = async () =>{
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log("mi componente se esta renderizando");

  return (
    <>
      <h1>Mi primer fetching de datos</h1>
      <p>Por que no funcionaaaaa!</p>
    </>
  )
}

export default App

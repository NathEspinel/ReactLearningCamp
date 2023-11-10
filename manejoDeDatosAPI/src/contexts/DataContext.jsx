import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function ApiProvider({children}){
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error){
        console.log(error);
      }
    };
  } , []);

  console.log("mi componente se esta renderizando");

  return (
    <DataContext.Provider value={apiData}>
      {children}
    </DataContext.Provider>
  );
}


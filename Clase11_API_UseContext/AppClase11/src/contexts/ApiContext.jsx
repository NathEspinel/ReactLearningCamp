import { createContext , useEffect, useState} from "react";

export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const [apiData, setApiData] = useState([]);
 
  const fetchApiData = async () => {
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com/users");
      const data = await response.json;

      setApiData (data);
      
    } catch (error) {
      console.error ('Error al obtener los datos: ', error);
      throw error;
    }
  }

  useEffect (() => {
    fetchApiData();
  }, []);


  return (
    <ApiContext.Provider value={{ apiData }}>
        { children }
    </ApiContext.Provider>
  );
  
};
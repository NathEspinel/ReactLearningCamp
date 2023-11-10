import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function ApiProvider({children}){
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch ("https://api.escuelajs.co/api/v1/users")
    .then((response) => response.json())
    .then((data) => setApiData(data))
    .catch((error) => console.error("Error en el llamado de la base de datos:", error));    
  } , []);

  console.log("mi componente se esta renderizando");

  return (
    <DataContext.Provider value={apiData}>
      {children}
    </DataContext.Provider>
  );
}


import { useContext } from 'react'
import './App.css'
import { ApiContext } from './contexts/ApiContext'
function App() {
  const callingContext = useContext(ApiContext);
  console.log(callingContext);
  return (
    <>
      <h1>DESTINOS EN EL MUNDO ✈</h1>
    </>
  )
}

export default App

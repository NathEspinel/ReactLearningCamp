
import { useContext } from 'react';
import './App.css'
import { DataContext } from './contexts/DataContext';
import { UserCard } from './components/UserCard';

function App() {

  const data = useContext(DataContext);
  console.log(data);
  return (
    <div className='container'>
      <h1>Nuestros empleados!</h1>
      {data.map(({id, name, rol, avatar , email}) => (
      <UserCard 
      key={id} 
      id= {id} 
      name={name} 
      rol={rol} 
      avatar={avatar} 
      email={email}/>
        ))}
    </div>
  )
}

export default App

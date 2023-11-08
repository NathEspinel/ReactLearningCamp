import { PetCard } from "./components/PetCard/PetCard"
import './index.css'
const pets = [
  {name : "Hachi", age:"10", kind:"Dog", breed:"Shih Tzu", isAdopted:false},
  {name : "Felix", age:"8", kind:"Cat", breed:"Black", isAdopted:true},
  {name : "Cody", age:"13", kind:"Dog", breed:"Beagle", isAdopted:false},
  {name : "Molly", age:"11", kind:"Dog", breed:"Black", isAdopted:true},
  {name : "Orion", age:"2", kind:"Cat", breed:"Persa", isAdopted:true}
]
export const App = () => {
  return (
    <>  
      <h1>My Pet App</h1>
      {pets.map(pet => <PetCard {...pet} />)}
    </>
  )
}



import { PetCard } from "./components/PetCard/PetCard"

const pets = [
  {name : "Hachi", age:"10", kind:"Dog", breed:"Shih Tzu", isAdopted:true},
  {name : "Hachi1", age:"1", kind:"Dog", breed:"Shih Tzu", isAdopted:true},
  {name : "Hachi2", age:"100", kind:"Dog", breed:"Shih Tzu", isAdopted:false},
  {name : "Hachi3", age:"102", kind:"Dog", breed:"Shih Tzu", isAdopted:true},
  {name : "Hachi4", age:"120", kind:"Dog", breed:"Shih Tzu", isAdopted:true}
]
export const App = () => {
  return (
    <>  
      <h1>My Pet App</h1>
      <PetCard {...pets[2]}/>
      {pets.map(pet => <PetCard {...pet} />)}
    </>
  )
}



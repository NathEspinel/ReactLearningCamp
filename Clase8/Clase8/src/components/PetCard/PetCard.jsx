import classes from './PetCard.module.css';

export const PetCard = ({name, age, kind, breed, isAdopted}) => {
  
  return (<div className= {classes.card}>
    <h3>{name} - {age} years</h3>
    <p>{kind}</p>
    <p>{breed}</p>
    {isAdopted ? <p>Adopted</p> : <p>Adopt me!</p>}

  </div>)
}
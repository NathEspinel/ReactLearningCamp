import { useState } from 'react';
import classes from './PetCard.module.css';
import { Counter } from '../Counter';

export const PetCard = ({name, age, kind, breed, isAdopted}) => {
  
  const [likesCount, setLikesCount] = useState(0);

  const handleCount = () => {
    setLikesCount(likesCount + 1);
  };
  
  return (<div className= {classes.card}>
    <h3>{name} - {age} years</h3>
    <p>{kind}</p>
    <p>{breed}</p>
    {isAdopted ? <p>Adopted</p> : <p>Adopt me!</p>}
    <button onClick={handleCount}>Support this Pet</button>
    <Counter count = {likesCount} Me gusta />
  </div>)
}
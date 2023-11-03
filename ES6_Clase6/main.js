import {saludar} from "./utils.js";

//Ejercicio 1
const personName = "Kelly Nathalia Garcia Espinel";
let age = 25;

console.log(personName, age);

//Ejercicio 2 
console.log(`Hola, mi nombre es ${personName} y tengo ${age} años.`); 

//Ejercicio 3 
let sum = (a,b) => a + b;
console.log(sum(6,4));

//Ejercicio 4 
const myArray = [9,8,7,6,5,4];
const duplicateArray = myArray.map(numero => numero * 2);
console.log(duplicateArray);

//Ejercicio 5 
const evenNumbersMyArray = myArray.filter(numero => numero % 2 === 0);
console.log(evenNumbersMyArray);

//Ejercicio 6
const sumaElementsArray = myArray.reduce((acc,elem) => acc + elem , 0);
console.log(sumaElementsArray);

//Ejercicio 7
const arrayCombination = [...myArray, ...duplicateArray, ...evenNumbersMyArray];
console.log(arrayCombination);

//Ejercicio 8
const film = {
  title : "Forrest Gump",
  year: 1994,
  genre: "Comedia / Drama"
}
const {title, year, genre} = film;
console.log(title, year, genre);

//Ejercicio 9 
function filmImformation (film){
  console.log(`La pelicula ${title} fue estrenada en el año ${year} y su genero es ${genre}`);
}
filmImformation();

//Ejercicio 10
class Person {
  constructor(name,age){
    this.name= name;
    this.age= age;
  }
}

class Student extends Person{
  constructor (name, age, curso){
    super(name, age);
    this.curso = curso;
  }
}

const matias = {
  name: "Matias Gómez",
  age: 28,
  curso: "Ingles"
}

const studentMatias = new Student(matias.name, matias.age, matias.curso);
console.log(`Mi nombre es ${matias.name}, tengo ${matias.age} años y estoy en el curso de ${matias.curso}.`);

//Ejercicio 11
console.log(saludar());
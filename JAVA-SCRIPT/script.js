// texto 

// var es la manera antigua de declarar variables 
var nombre = "Pepe";

// let es la nueva manera de declarar variables 
let apellido = "Perez";

// constantes 
const number= 12;

// texto se puede reescribir 

apellido = "Gomez";

let numberTwo = 12.36;

// dato booleano
let datoBolleano =false;

// crear un array 

// crea un array vacio y no hay que especificarle el tamaño 

let pares = [];

let impares = [1,3,7,11,113];

var names = ["Andres", "Mayorga", "Breyner", "Arley"];

// imprime el contenido de la posicion 2 
console.log(impares[2]);

// crear un objeto 

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    jobs: ["Deportista", "cantante"],
    otrosDatos:{
        telefono: 32120711108,
        email: "text@test.com"
    }
};
// manera de imprimir un objeto en javascript 
console.log(persona["nombre"], persona.apellido);

console.log(persona.otrosDatos);

console.log(persona.jobs[1]);


console.log(persona.jobs[0], persona.edad);

const personas =[
    {nombres: "persona 1", edades: 17, categoria: "a"},
    {nombres: "persona 2", edades: 27, categoria: "b"},
    {nombres: "persona 3", edades: 40, categoria:"c"},
];

console.log("for---------")

for (let index = 0; index <= personas.length-1; index++) {

    console.log(personas[index].nombres);
}

console.log("for in---------")

for (let index in personas) {
    console.log(personas[index].edades);
}

console.log("for of---------")

for (let item of personas) {
    console.log(item.categoria);
}

console.log("While-------")

let index=0;

while (index<persona.length) {
    console.log(personas[index].nombres);
    index++;
}

console.log("Do While-------")

index=0

do{
    console.log(personas[index].nombres);
    index++;

}while (index < personas.length);


console.log("foreach-------")

personas.forEach((item,index) => {
    console.log(index, item.nombre);

});
/**
* ! negacion
*== igual valor
*=== igual valor tipo
*<
*>
*
*&& and
*|| or
*/
    
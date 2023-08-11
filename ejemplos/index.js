// Ejemplos javascrip

/**
 * Comentario de bloque
 */

console.log("Hola mundo")
console.log("-------")

const edad=55;
let nombre="Juan"
let apellido="Toro"
const estudiante= false
const altura=1.70

const semestres=[]

const materipreferida={nombre:"Calculo", id:0}

const unuversidad= null
const carrera= undefined;
console.log(" El tipo de dato de nombre es "+typeof nombre)

const precioMatricula="5000000000.6"

console.log(parseInt(precioMatricula))
console.log(parseFloat(precioMatricula))

console.log("Doble igual ",  "45"==45)//True //Valor
console.log("triple igual ",  "45"===45)//False //Valor y tipo

console.log("Concatenacion");
console.log(nombre+" "+apellido);
console.log(`${nombre} ${apellido}`);

console.log("Operador ternario");

console.log(edad>18 ? "Es mayor de edad" : "Es menor de edad");

let condition= edad>18
if (condition) {
    
}else{

}

const dia="Lunes"
switch (dia) {
    case "Lunes":
        console.log("lUNES");
        break;

    default:
        console.log("NO APLICA");
        break;
}

console.log("Condicionales");

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
// while (condition) {
    
// }

for (const key in materipreferida) {
    console.log(key.nombre);
}

for (const item of [1,2,3]) {

    console.log(item);
}

console.log("Foreach");
[1,2,3].forEach(Element=>{
    console.log(Element);

})


console.log("Funciones");

function imprimirnombre(nombre) {
    console.log(nombre);
    
}

imprimirnombre(nombre)

const imprimirnombreapellido = (nombre, apellido) => {

    console.log(`${nombre} ${apellido}`);
    
}
imprimirnombreapellido(nombre,apellido)

const crearnombrecompleto = (nombre, apellido) => {
    console.log("Globan scope fake")
    console.log(nombre, apellido);
    let name=nombre
    if (nombre.length>3 ){
        let name= nombre[0]+" "+apellido
        console.log(name);
    }
    
}

crearnombrecompleto(nombre,apellido)
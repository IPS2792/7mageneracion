//Ejercicio 1: comparar numeros

let x = 4;
let y = 7;
/*
x > y ? (
    console.log("la variable x es mayor que y: ", x, ">", y)
) : (
    console.log("la variable y es mayor que x: ", y, ">", x)
);
*/

if (x > y){
    console.log(`la variable x es mayor que y: ${x} > ${y}`)
} else if (x < y){
    console.log(`la variable y es mayor que x: ${y} > ${x}`)
} else {
    console.log(`Ambas variables son iguales: ${x} = ${y}`)
}

//Ejercicio 2: Indicar si la multiplicación de 2 valores es par o non.

//Se multiplican ambos numeros y, despues, se obtiene el residuo de la division entre 2
//del numero resultante con la operacion de modulo (%)
if ((x * y) % 2 === 0){
    //Si el residuo de la operación modulo es igual a 0, se imprime en pantalla "El numero es par"
    console.log("El numero es par");
} else{
    //Si el residuo de la operación modulo es diferente a 0, se imprime en pantalla "El numero es non"
    console.log("El numero es non");
}

//Ejercicio 3: Recibir del usuario un numero y calcular el area de un circulo cuyo radio sea igual al
//numero proporcionado

//Declarar variable userNumber
let userNumber = 0;

//Recibir numero del usuario mediante el metodo prompt y asignarlo a la variable userNumber
userNumber = prompt("Por favor, ingresa un numero");

//Convertir los datos almacenados en userNumber de string a number
userNumber = parseInt(userNumber);

//Declarar variable circleArea
let circleArea = 0;

//Inicializar la constante Pi
const PI = 3.1416;

//Declarar e inicializar la varible radius con el calculo de userNumber elevado al cuadrado usando el
//metodo Math.pow
let radius = Math.pow(userNumber,2);

//Asignar calculo del area de un circulo (3.1416 * r²) a la variable circleArea usando la entrada de datos
//del usuario como radio elevado al cuadrado
circleArea = PI * radius;

//Imprimir en consola el resultado
console.log(`El area de un circulo cuyo radio es igual a ${userNumber} es ${circleArea}`);

//Ejercicio 4: Recibir del usuario los datos de 3 lados de un triangulo y, con base en esos datos, 
//determinar el area del mismo y mostrarla en un mensaje; en otro mensaje indicar si ese triangulo es
//equilatero, isoseles o escaleno

//Ejercicio 5: una vez concluido el ejercicio 4, determinar si el triangulo es un triangulo rectangulo
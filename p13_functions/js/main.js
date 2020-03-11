/*
let bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
];

let amentorsNames = [
    "David Moranchel"
];

let kodersNames = [
    "Ivan Pedraza"
];

function arrayExtract(element) {
    let stringSplit = element.split(' ');
    let initials = '';
    stringSplit.forEach( (stringSplit) => {
        initials += stringSplit.charAt(0) + ". ";
    })
    console.log(`${element}, ${initials}`);
}

bmentorsNames.forEach(arrayExtract);
amentorsNames.forEach(arrayExtract);
kodersNames.forEach(arrayExtract);
*/
//Ejercicio: Crear una funcion que permita al usuario elegir una operacion
//basica, indicar 2 valores y ejecutar la operacion seleccionada. Imprimir
//el resultado.
//salida esperada: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
//------------------------------- Algoritmo -------------------------------
/*
let opSelect = prompt("Por favor, teclee la operacion deseada: 1 para suma, 2 para resta, 3 para multiplicacion, 4 para division","Opcion deseada");
let result = '';

function basicOperations(option, numOne, numTwo){
    let total = 0;
    let opName = '';
    option = parseInt(option);
    switch (option){
        case 1:
            numOne = prompt("Por favor, indique el primer numero", "Numero");
            numTwo = prompt("Por favor, indique el segundo numero", "Numero");
            numOne = parseInt(numOne);
            numTwo = parseInt(numTwo);
            opName = 'suma';
            total = numOne + numTwo;
            window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
            console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        break;

        case 2:
            numOne = prompt("Por favor, indique el primer numero", "Numero");
            numTwo = prompt("Por favor, indique el segundo numero", "Numero");
            numOne = parseInt(numOne);
            numTwo = parseInt(numTwo);
            opName = 'resta';
            total = numOne - numTwo;
            window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
            console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        break;

        case 3:
            numOne = prompt("Por favor, indique el primer numero", "Numero");
            numTwo = prompt("Por favor, indique el segundo numero", "Numero");
            numOne = parseInt(numOne);
            numTwo = parseInt(numTwo);
            opName = 'multiplicación';
            total = numOne * numTwo;
            window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
            console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        break;

        case 4:
            numOne = prompt("Por favor, indique el primer numero", "Numero");
            numTwo = prompt("Por favor, indique el segundo numero", "Numero");
            numOne = parseInt(numOne);
            numTwo = parseInt(numTwo);
            opName = 'division';
            total = numOne / numTwo;
            window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
            console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        break;

        default:
            window.alert('Opcion incorrecta, refresque la pagina para reiniciar');
            console.log('Opcion incorrecta, refresque la pagina para reiniciar');
    }
    
    if (option === 1){
        numOne = prompt("Por favor, indique el primer numero", "Numero");
        numTwo = prompt("Por favor, indique el segundo numero", "Numero");
        numOne = parseInt(numOne);
        numTwo = parseInt(numTwo);
        opName = 'suma';
        total = numOne + numTwo;
        window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
    } else if (option === 2){
        numOne = prompt("Por favor, indique el primer numero", "Numero");
        numTwo = prompt("Por favor, indique el segundo numero", "Numero");
        numOne = parseInt(numOne);
        numTwo = parseInt(numTwo);
        opName = 'resta';
        total = numOne - numTwo;
        window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
    } else if (option === 3){
        numOne = prompt("Por favor, indique el primer numero", "Numero");
        numTwo = prompt("Por favor, indique el segundo numero", "Numero");
        numOne = parseInt(numOne);
        numTwo = parseInt(numTwo);
        opName = 'multiplicación';
        total = numOne * numTwo;
        window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
    } else if (option === 4){
        numOne = prompt("Por favor, indique el primer numero", "Numero");
        numTwo = prompt("Por favor, indique el segundo numero", "Numero");
        numOne = parseInt(numOne);
        numTwo = parseInt(numTwo);
        opName = 'division';
        total = numOne / numTwo;
        window.alert(`La ${opName} de los dos numeros que indicaste es: ${total}`);
        console.log(`La ${opName} de los dos numeros que indicaste es: ${total}`);
    } else{
        window.alert('Opcion incorrecta, refresque la pagina para reiniciar');
        console.log('Opcion incorrecta, refresque la pagina para reiniciar');
    }
    
}

result = basicOperations(opSelect);*/

//##############################################################################

//Practica
//Primero, función que permita ingresar el nombre de un arreglo y contar los 
//elementos que lo contiene; en caso de que este no exista, enviar al usuario
//un promtp que diga "El arreglo no existe".
var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]

//let arrayName = prompt("Por favor, indique el nombre de un arreglo", "Arreglo");
function evaluateArray(array) {
    if(Array.isArray(array) === true){
        console.log('La variable es un arreglo');
        console.log(`${array.length}`);
    } else {
        console.log('No es un arreglo')
    }
}
evaluateArray(amentorsNames);

//Tambien, declarar una función que reciba un array e imprima los elementos
//del mismo en orden alfabetico y con la primer palaba en uppercase.
const sortUpperCase = (array) => {
    array.sort();
    array.forEach((item,index) => {
        let firstWord = item.split(' ');
        let sortString = firstWord[0].toUpperCase();
        let strUpp = '';
        strUpp = strUpp.concat(sortString, ' ', firstWord[1]);
        array.splice(index, 1, strUpp);
    })
    console.log(array);
}
sortUpperCase(amentorsNames);

//Ademas, declarar una función que reciba un array y un numero, esta debe
//imprimir cada uno de los items del arreglo con los caracteres
//limitados al numero ingresado.
const printSome = (array, charLimit) => {
    array.forEach((item) => {
        let shortStr = item.substring(0,charLimit);
        console.log(shortStr);
    })
}

printSome(amentorsNames, 2);

//Finalmente, declarar una función que reciba una cantidad (numero), este
//numero sera la cantidad de veces que se solicite al usuario mediante un
//prompt algun nombre, todos los nombres se deben almacenar en una
//colección y, al finalizar, debe mostrar la lista de nombres y las
//iniciales de estos.
let numReg = prompt("Por favor, ingresa un numero", "Numero");

const getNames = (quantity) => {
    let array = [];
    let register = quantity;
    console.log(register);

    switch (isNaN(register)){
        case true:
            window.alert("ingresa numero");
            getNames();
        break;

        default:
            for(i = 0; i < register; i++){
                let name = prompt("Ingresa el nombre del koder", "Nombre");
                array.push(name);
                console.log(array);
            }
        break;
    }
}

getNames(numReg);
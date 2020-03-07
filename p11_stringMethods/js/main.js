//String Methods

//Ejercicio 1: obtener nombre de usuario e indicarle cuantos caracteres tiene su nombre.

//----------------- Algoritmo -----------------
//1) Declarar variable userName y guardar en ella el nombre del usuario mediante un prompt.
//2) Declarar variable nameLength y asignar en ella el valor de longitud del nombre del usuario usando el metodo length en la variable userName
//3) Desplegar el mensaje "Su nombre tiene ${nameLength} caracteres" al usuario mediante window.alert() y un console.log().

let userName = prompt("Ingrese su nombre completo", "Nombre");
let nameLength = userName.length

window.alert(`Su nombre tiene ${nameLength} caracteres`);
console.log(`Su nombre tiene ${nameLength} caracteres`);

//##########################################################################################################

//Ejercicio 2: obtener nombre completo del usuario y contar cuantos caracteres tiene, si el
//nombre tiene menos de 15 caracteres, indicar mediante un mensaje que su nombre es muy corto
//si tiene mas de 15 caracteres, indicarle que su nombre es muy largo.

//----------------- Algoritmo -----------------
//1) Usando los datos almacenados en las variables userName y nameLength, definir dentro de un if los siguientes casos:
// 1.1) Si el nombre es menor a 15 caracteres, mostrar al usuario el mensaje "Su nombre es muy corto" mediante un window.alert() y un console.log().
// 1.2) Si el nombre es mayor a 15 caracteres, mostrar al usuario el mensaje "Su nombre es muy largo" mediante un window.alert() y un console.log().
// 1.3) Si el nombre es igual a 15 caracteres, mostrar al usuario el mensaje "Su nombre es largo" mediante un window.alert() y un console.log().

if (nameLength < 15){
    window.alert(`Su nombre es muy corto`);
    console.log(`Su nombre es muy corto`);
} else if (nameLength > 15){
    window.alert(`Su nombre es muy largo`);
    console.log(`Su nombre es muy largo`);
} else{
    window.alert(`Su nombre es largo`);
    console.log(`Su nombre es largo`);
}

//##########################################################################################################

//Ejercicio 3: obtener nombre completo del usuario y contar cuantas vocales tiene.

//----------------- Algoritmo -----------------
//1) Definir las variables arrayName, vowelsArray asignando un arreglo con las vocales ['A','a','E','e','I','i','O','o','U','u'] y una variable counter inicializada en 0.
//2) Usando los datos almacenados en la variable userName, introducir el contenido de la variable a arrayName usando Array.from()
//3) Definir un ciclo for en el que, por cada vuelta de la variable i (incrementandose por uno en cada vuelta y usando como limite que i sea menor a la longitud del arreglo arrayName), se realicen las n vueltas de la variable j (for anidado donde j se incremente por 1 en cada vuelta y usando como limite que j sea menor que la longitud del arreglo vowelsArray ), el cual realice lo siguiente:
// 3.1) Si el contenido del indice i de arrayName es exactamente igual al contenido del indice j de vowelsArray, se suma 1 al la variable counter.
// 3.2) Si la condicion definida no es valida, saltar a la siguiente vuelta con un continue.
//4) Mostrar al usuario el mensaje "Su nombre tiene [valor de counter] vocales" mediante un window.alert() y un console.log().

let arrayName = [];
let vowelsArray = ['A','a','E','e','I','i','O','o','U','u'];
let counter = 0;
arrayName = Array.from(userName);

for (i = 0; i < arrayName.length; i++){
    for (j = 0; j < vowelsArray.length; j++){
        if (arrayName[i] === vowelsArray[j]){
            counter++;
        } else{
            continue;
        }
  }
}

window.alert(`Su nombre tiene ${counter} vocales`);
console.log(`Su nombre tiene ${counter} vocales`);


//----------------------------------------------------------------------------------------------------------
//Otra forma de hacerlo es definir el metodo match y, dentro de la sección de parametros, ingresar una expresion regular*
let counter2 = userName.match(/[aeiou]/gi).length
console.log(counter2);
//----------------------------------------------------------------------------------------------------------

//##########################################################################################################

//Ejercicio 4: Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo.

//----------------- Algoritmo -----------------
//1) Declarar variable userInput y guardar en ella una palabra que sera solicitada al usuario mediante un prompt.
//2) Declarar variable newWord e inicialiarla como ''
//3) Definir un if cuya condicion sea que la palabra del usuario sea mayor o igual a 5 caracteres de longitud, considerando esta condicion:
// 3.1) Si la condicion es verdadera, guardar en newWord la concatenacion de los primeros 2 caracteres y los ultimos 2 caracteres (aplicando a newWord el metodo concat) y desplegarlo al usuario mediante un window.alert() y un console.log().
// 3.2) Si la condicion es falsa, indicar al usuario que 'La palabra debe tener mas de 5 caracteres' mediante un window.alert() y un console.error().

let userInput = prompt("Ingrese una palabra", "Palabra");
let newWord = '';

if (userInput.length >= 5){
    newWord = newWord.concat(userInput.slice(0,2),userInput.slice((userInput.length)-2,userInput.length));
    window.alert(`La nueva palabra es ${newWord}`);
    console.log(`La nueva palabra es ${newWord}`);
} else{
    window.alert('La palabra debe tener mas de 5 caracteres');
    console.error('La palabra debe tener mas de 5 caracteres');
}

//##########################################################################################################

//Ejercicio 5: pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

//----------------- Algoritmo -----------------
//1) Declarar las variables userName y userAge, guardar en ellas nombre y edad respectivamente, solicitando al usuario esta información mediante un prompt.
//2) Desplegar al usuario "hola, soy (nombre) y tengo (edad) años`", mediante un window.alert() y un console.log().

userName = prompt("Ingrese su nombre", "Nombre");
let userAge = prompt("Ingrese su edad", "edad");

window.alert(`hola, soy ${userName} y tengo ${userAge} años`);
console.log(`hola, soy ${userName} y tengo ${userAge} años`);

//##########################################################################################################

//Ejercicio 6: Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado". Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario.

//----------------- Algoritmo -----------------
//1) Declarar variable stringExample e inicializarla con la oración "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado".
//2) Declarar variable wordCounter e inicialiarla con 0.
//3) Declarar variable newString e inicialiarla como ''.
//4) Asignar en wordCounter el numero de veces que la palabra estudiante aparece stringExample aplicando el metodo match a stringExample.
//5) Asignar en newString la operacion de reemplazo de la palabra estudiante por Koder aplicando el metodo replace a stringExample
//6) Desplegar al usuario "En la frase "(stringExample)", la palabra estudiante aparece (wordCounter) veces." mediante un window.alert() y un console.log().
//7) Desplegar al usuario "La nueva frase es "(newString)". ;)`" mediante un window.alert y un console.log(). 
let stringExample = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';
let wordCounter = 0
let newString = '';

wordCounter = stringExample.match(/estudiante/g).length;
newString = stringExample.replace(/estudiante/g, "Koder");

window.alert(`En la frase "${stringExample}", la palabra estudiante aparece ${wordCounter} veces.`);
console.log(`En la frase "${stringExample}", la palabra estudiante aparece ${wordCounter} veces.`);
window.alert(`La nueva frase es "${newString}". ;)`);
console.log(`La nueva frase es "${newString}". ;)`);

//##########################################################################################################
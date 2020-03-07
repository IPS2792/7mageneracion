//Ejercicio
/*
  1) Pedir al usuario la cantidad de koders a registrar -- OK
  2) Pedir tantos nombres de koder como el usuario haya indicado -- OK
  3) Guardar cada nombre de cada koder en una colección -- OK
  4) de cada koder, imprimir en pantalla el primer nombre -- NOK
*/
//------------------------------- Algoritmo -------------------------------
//1) Declarar la variable kodersQuantity y asignarle la cantidad de koders a
//   registrar, solicitar al usuario esta información mediante un prompt.
//2) Declarar la variable kodersArray y kodersNames e inicializarlas como 
//   un arreglo vacio y un string vacio respectivamente.
//3) Estructurar un ciclo for con las siguientes caracteristicas:
// 3.1) indice i sea inicializado en 0.
// 3.2) el limite del indice i es que este sea menor al valor de kodersQuantity.
// 3.3) el indice i sera incrementado por 1 cada vez.
// 3.4) para cada ciclo: 
//  3.4.1) Solicitar mediante un prompt el nombre del koder al usuario y asignar
//         este valor a la variable kodersNames.
//  3.4.2) Ingresar la información obtenida del paso anterior a la variable
//         kodersArray aplicando el metodo push.
//4) Como se aplicara el metodo forEach al arreglo kodersArray, se debera crear
//   una funcion que permita agregar solo el primer nombre de cada koder en el 
//   arreglo kodersArray; para ello, se debe declarar la funcion updateKodersArray
//   con las siguientes caracteristicas:
// 4.1) Declarar la funcion updateKodersArray y que pueda recibir los parametros
//      element e index.
// 4.2) Declarar la variable koderString dentro de la funcion y asignarle el 
//      valor de element (este parametro sera proporcionado por el metodo 
//      forEach).
// 4.3) Declarar un if cuya condicion a evaluar sea si la busqueda de ' '
//      devuelve un valor diferente a -1, considerando la condición:
//  4.3.1) Si la condición es verdadera, con la informacion obtenida se hara
//         un splice al arreglo, que permita reemplazar cada objeto del
//         mismo con solo el primer nombre.
//  4.3.2) Si la condicion es falsa, no se hara nada con la finalidad de no
//         reemplazar el valor en el indice del arreglo.
//5) Se aplica el metodo forEach a kodersArray ingresando como paramertro
//   el nombre de la función declarada en el paso anterior.
//6) Se declara la variable lastKoder y se asigna el valor resultante del metodo
//   pop aplicado a kodersArray.
//7) Mediante un console.log y un window.alert, deplegar el mensaje "Los 
//   nombres de los Koders son ${kodersArray.join(", ")} y ${lastKoder}."
//Fin.

//Primer tarea
let kodersQuantity = prompt("Por favor, indique el numero de koders", "cantidad");

//Segunda tarea
let kodersArray = [];
let kodersNames = '';

for (i = 0; i < kodersQuantity; i++){
    kodersNames = prompt("Por favor, indique el nombre del koder", "Nombre");
    //Tercer tarea
    kodersArray.push(kodersNames);
}

//Cuarta tarea
function updateKodersArray(element, index) {
    let koderString = element;

    if (koderString.search(' ') != -1){
        kodersArray.splice(index, 1, (koderString.split(' ', 1)).toString());
    } else{}
}

kodersArray.forEach(updateKodersArray);

let lastKoder = kodersArray.pop();
console.log(`Los nombres de los Koders son ${kodersArray.join(", ")} y ${lastKoder}.`);
window.alert(`Los nombres de los Koders son ${kodersArray.join(", ")} y ${lastKoder}.`);
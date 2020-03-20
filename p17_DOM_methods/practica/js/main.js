var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

//Teniendo el array kodersDb, realizar las siguientes operaciones:
//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
/*let practicesLess10 = [];

kodersDb.forEach ((koder) => {
    if (koder.deliveredPractices < 10){
        practicesLess10.push(koder);
    }
});

console.log(practicesLess10);*/

let filteredByPractices = kodersDb.filter((koder) => {
    return koder.deliveredPractices <10
})

console.log(filteredByPractices);

//2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
/*let assistanceLess20 = [];

kodersDb.forEach((koder) => {
    if(koder.totalAssistance < 20){
        assistanceLess20.push(koder);
    }
});

console.log(assistanceLess20); */

let filteredByAssistance = kodersDb.filter(koder => koder.totalAssistance <20)

console.log(filteredByAssistance);

//3.- Obtener el promedio general de prácticas entregadas
let sumScores = kodersDb.reduce((total, koder) =>{
    return total += koder.deliveredPractices;
}, 0);

let averageScore = sumScores / kodersDb.length;

console.log(averageScore);

//4.- Obtener el promedio general de asistencias
let sumAssistances = kodersDb.reduce((total, koder) =>{
    return total += koder.totalAssistance;
}, 0);

let averageAssistance = sumAssistances / kodersDb.length;

console.log(averageAssistance);

/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
*/

filteredByPractices.forEach((koder,index) => {
    let koderPracticesRow = document.createElement("tr");
    let koderNumberData = document.createElement("td");
    let koderFullNameData = document.createElement("td");
    let koderPracticesData = document.createElement("td");

    let koderNumber = document.createTextNode(index + 1);
    let koderFullName = document.createTextNode(koder.name + " " + koder.lastName);
    let koderPractices = document.createTextNode(koder.deliveredPractices);

    koderNumberData.appendChild(koderNumber);
    koderFullNameData.appendChild(koderFullName);
    koderPracticesData.appendChild(koderPractices);

    koderPracticesRow.appendChild(koderNumberData);
    koderPracticesRow.appendChild(koderFullNameData);
    koderPracticesRow.appendChild(koderPracticesData);

    let practicesContainer = document.getElementById("practices-container");
    practicesContainer.appendChild(koderPracticesRow);
})

/*
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
*/
filteredByAssistance.forEach((koder,index) => {
    let koderAssistanceRow = document.createElement("tr");
    let koderNumberData = document.createElement("td");
    let koderFullNameData = document.createElement("td");
    let koderAssistanceData = document.createElement("td");

    let koderNumber = document.createTextNode(index + 1);
    let koderFullName = document.createTextNode(koder.name + " " + koder.lastName);
    let koderAssistance = document.createTextNode(koder.totalAssistance);

    koderNumberData.appendChild(koderNumber);
    koderFullNameData.appendChild(koderFullName);
    koderAssistanceData.appendChild(koderAssistance);

    koderAssistanceRow.appendChild(koderNumberData);
    koderAssistanceRow.appendChild(koderFullNameData);
    koderAssistanceRow.appendChild(koderAssistanceData);

    let assistancesContainer = document.getElementById("assistances-container");
    assistancesContainer.appendChild(koderAssistanceRow);
})


/*7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3*/

let practicesAverage = document.getElementById("practices-average");
let averageScoreInfo = document.createTextNode(averageScore);

practicesAverage.appendChild(averageScoreInfo);

/*8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4*/

let assistanceAverage = document.getElementById("assistance-average");
let averageAssistanceInfo = document.createTextNode(averageAssistance);

assistanceAverage.appendChild(averageAssistanceInfo);

/****Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking!!!*/
//Constructores

//Tarea
//pedir al usuario la cantidad de koders a registrar -- OK
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder
/*
function Koder(name, lastName, scoreHtml, scoreCss, scoreJs){
    this.name = name,
    this.lastName = lastName,
    this.scoreHtml = scoreHtml,
    this.scoreCss = scoreCss,
    this.scoreJs = scoreJs
}

let kodersList = [];

const addKodersScores =  (quantity) => {
    let arrayAux = [];
    if (quantity > 0 && typeof(quantity) === 'number'){
        for (i = 0; i < koderQuantity; i++) {
            for (j = 0; j < 1; j++){
                let koderName = prompt('Por favor, ingrese el nombre del Koder', 'Nombre');
                let koderLastName = prompt('Por favor, ingrese los apellidos del Koder', 'Apellidos');
                let koderScoreHtml = prompt('Por favor, ingrese la calificacion en HTML del Koder', 'Calificacion');
                let koderScoreCss = prompt('Por favor, ingrese la calificacion en CSS del Koder', 'Calificacion');
                let koderScoreJs = prompt('Por favor, ingrese la calificacion en JS del Koder', 'Calificacion');
                arrayAux.push(koderName, koderLastName, koderScoreHtml, koderScoreCss, koderScoreJs);
            }
        }
    } else{
        window.alert('La informacion que ingreso es incorrecta, refresque la pagina e intente nuevamente');
    }
    arrayAux.forEach((item) => {
        let koderObject = new Koder(item.name, item.lastName, item.scoreHtml, item.scoreCss, item.scoreJs);
        kodersList.push([koderObject]);
    })
};

let koderQuantity = parseInt(prompt(
    'Por favor, ingrese la cantidad de koders a registrar',
    'Cantidad'
));

addKodersScores(koderQuantity);

console.log(kodersList);
*/

//##############################################################################

/*
const functKoderObject = (index) => {
    let koderObject = {};
    koderObject.name = kodersMatrix[index][0];
    koderObject.lastName = kodersMatrix[index][1];
    koderObject.phone = kodersMatrix[index][2];
    koderObject.birthDate = kodersMatrix[index][3];
    window.alert(
        `Los datos son los siguientes:
        Nombre: ${koderObject.name}
        Apellido: ${koderObject.lastName}
        Telefono: ${koderObject.phone}
        Fecha de nacimiento: ${koderObject.birthDate}`
    )
}

let userInput = prompt('Por favor, ingrese un numero de indice','Indice');

functKoderObject(userInput);
*/
/*
//Hacer esto es para generar un objeto por vez de forma manual
const createKoder = (dataMatrix) => {
    dataMatrix.forEach((item) => {
        let koder1 = {};
        item.forEach(property, index) => {
            koder1[index] = property;
        }
    })
    console.log(koder1);
}
*/

//Para hacer la anterior con un "molde", se usan las funciones contructoras
/*
let kodersMatrix = [
    [
        'Ivan',
        'Pedraza Sanchez',
        '5560696844',
        '27-08-1992'
    ]
]

function Koder(name, lastName, phone, birthDate){
    this.name = name,
    this.lastName = lastName,
    this.phone = phone,
    this.birthDate = birthDate
}

let koderArray = [];

kodersMatrix.forEach((item) => {
    let koderObject = new Koder(item.name, item.lastName, item.phone, item.birthDate);
    koderArray.push(koderObject);
    })

console.log(koderArray);
*/

//Ejercicio: hacer una lista de botana, al constructor agreguen un método que me muestre 
//en un alert el string:"nuestra botana {nombre de la botana} es la más sabrosa!!!"

var recipeArray = [
    ['Cacahuates', 'Salado', '300gr']
];

function Botana(name, taste, content){
    this.name = name,
    this.taste = taste,
    this.content = content,
    this.slogan = function (){
        window.alert(`nuestra botana ${Botana.name} es la mas sabrosa!!!`);
    }
}

let listaBotana = [];

const addBotanas = (array) => {
    array.forEach((item) => {
        let foodObject = new Botana(item.name,item.taste,item.content);
        listaBotana.push(foodObject);
    })
}

let example = new Botana(recipeArray);

addBotanas(recipeArray);

console.log(example);
console.log(listaBotana);

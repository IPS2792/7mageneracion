let koderQuantity = parseInt (prompt ('Por favor, indique el numero de koders a registrar'))

let koderNames = [];

for (i = 0; i < koderQuantity; i++){
    let koderName = prompt(`Ingresa el nombre del koder ${i + 1}`);
    koderNames.push(koderName);
}

const printKoderNames = (numberOfKoders) => {
    if (numberOfKoders > 0 && typeof(numberOfKoders) === 'number'){
        document.body.innerHTML = '';
        //Se limpia el body cada vez que se llama la funcion
        let myKoders = document.createElement("ol");

        koderNames.forEach( (name) => {
            let koderListItem = document.createElement("li");
            //crea <li></li>
            let koderName = document.createTextNode(name);
            //crea un nodo con la información de cada elemento: nombre1
            koderListItem.appendChild(koderName);
            //appendChild agrega un hijo a un elemento padre: <li>nombre1</li>
            myKoders.appendChild(koderListItem);
            //aqui, usando appendChild se crea <ol><li>nombre</li>...</ol>
        })

        document.body.appendChild(myKoders);
    } else {
        return window.alert('La informacion que ingreso no es valida. Por favor, refresque la pagina e intente nuevamente');
    }
}

printKoderNames(koderQuantity);

let continueAddKoders = prompt('Deseas agregar otro koder? Teclea S para continuar o N para terminar');

const askKoder = (confirmation) => {
    if (confirmation === 'S'){
        let newKoder = prompt('Por favor, ingresar el nombre del nuevo  koder');
        koderNames.push(newKoder);
    } else {
        window.alert('Gracias por agregar a tus koders');
    }
    document.body.innerHTML = '';
    document.body.appendChild(myKoders);
}

askKoder(continueAddKoders);
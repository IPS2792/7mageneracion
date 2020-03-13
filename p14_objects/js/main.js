//Practica: crear una función que pida al usuario el nombre {name}, 
//apellido {lastName}, edad {age} y telefono {phone} de un koder y 
//crear un objeto {koderObject} con esos datos, todo lo anterior se
//debera solicitar al usuario mediante un promtp.

let userAnswer = prompt(
    "Desea proporcionar sus datos personales",
    "Presione Y para continuar o N para cancelar"
)

const functKoderObject = (validation) => {
    if(validation === 'Y' || validation === 'y'){
        /*let koderObject = {};
        let name = prompt("Por favor, introduzca su nombre","Nombre");
        koderObject.name = name;
        let lastName = prompt("Por favor, introduzca sus apellidos","Apellidos");
        koderObject.lastName = lastName;
        let age = prompt("Por favor, introduzca su edad","Edad");
        koderObject.age = age;
        let phone = prompt("Por favor, introduzca su numero de telefono","Telefono");
        koderObject.phone = phone;
        window.alert(
            `Usuario Registrado:  
            Nombre: ${koderObject.name} 
            Apellido: ${koderObject.lastName} 
            Edad: ${koderObject.age} 
            Telefono: ${koderObject.phone}`);
        console.log(koderObject);*/
        let name = prompt("Por favor, introduzca su nombre","Nombre");
        let lastName = prompt("Por favor, introduzca sus apellidos","Apellidos");
        let age = prompt("Por favor, introduzca su edad","Edad");
        let phone = prompt("Por favor, introduzca su numero de telefono","Telefono");
        let koderObject = {name,lastName,age,phone};
        window.alert(
            `Usuario Registrado:  
            Nombre: ${koderObject.name} 
            Apellido: ${koderObject.lastName} 
            Edad: ${koderObject.age} 
            Telefono: ${koderObject.phone}`);
        console.log(koderObject);
    } else {
        window.alert('Refresque la pagina para iniciar nuevamente');
        console.log('Refresque la pagina para iniciar nuevamente');
    }
}

functKoderObject(userAnswer);
var kodersArray = [
]

const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)

    kodersArray.push(koderObject);
    printKoders();
}

const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = "";
    document.getElementById("koder-cards").innerHTML = "";
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;
        let currentCard =  document.getElementById("koder-cards").innerHTML;
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete' data-koder-index=${index}>Eliminar</div>
                </td>
            </tr>
            `
        let newCard = `
            <div class="col-12 col-md-3">
                <div id="koder-${index} class="card mt-3">
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title">${koderFullName}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Prácticas entregadas:${koderDeliveredPractices}</li>
                                <li class="list-group-item">Asistencias: ${koderAssistances}</li>
                            </ul>
                        <div class="btn btn-danger mt-3 btn-block" data-koder-index=${index}>Eliminar</div>
                    </div>
                </div>
            </div>
        `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
        document.getElementById("koder-cards").innerHTML= currentCard + newCard;
    })
}

var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder);

const deleteKoderBtnListener = () => {
    var deleteKoderBtn = document.getElementsByClassName("btn-danger");
    console.log(deleteKoderBtn);
    for(i=0; i < deleteKoderBtn; i++){
        deleteKoderBtn.addEventListener("click", (event) => {
            let koderIndex = event.target.dataset.koderIndex;
            console.log(koderIndex);
            kodersArray.splice(koderIndex,1);
            printKoders();
            deleteKoderBtnListener();

        });
    }
}
/* Validacion de formulario para inicio.html */

function validacionInicio(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let form = document.getElementById("form");
    let parrafo1 = document.getElementById("warnings1");
    let parrafo2 = document.getElementById("warnings2");
    let parrafo3 = document.getElementById("warnings3");

    form.addEventListener("submit", e =>{
        e.preventDefault()
        let warningsA = "";
        let warningsB = "";
        let entrar = false;
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
        parrafo1.innerHTML = "";
        parrafo2.innerHTML = "";
        parrafo3.innerHTML = "";

        if(!regexEmail.test(email.value)){
            warningsA = "El email no es valido";
            entrar = true;
            email.style.border = "solid 1px red";
        } else {
            email.style.border = "";
        }
        
        if(pass.value.length < 5){
            warningsB = "La contraseña no es valida";
            entrar = true;
            pass.style.border = "solid 1px red";
        } else {
            pass.style.border = "";
        }

        if(entrar){
            parrafo1.innerHTML = warningsA
            parrafo2.innerHTML = warningsB
        } else {
            window.location.href = 'principal.html';
        }
    })
}

function validacionSubscripcion(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let rut = document.getElementById("rut");
    let email = document.getElementById("email");
    let edad = document.getElementById("edad");

    let comprobar1 = false;
    let comprobar2 = false;
    let comprobar3 = false;
    let comprobar4 = false;
    let comprobar5 = false;

    let parrafo1 = document.getElementById("warnings1");
    let parrafo2 = document.getElementById("warnings2");
    let parrafo3 = document.getElementById("warnings3");
    let parrafo4 = document.getElementById("warnings4");
    let parrafo5 = document.getElementById("warnings5");

    form.addEventListener("submit", e => {
        e.preventDefault()
        let warningsA = "";
        let warningsB = "";
        let warningsC = "";
        let warningsD = "";
        let warningsF = "";
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;

        parrafo1.innerHTML = "";
        parrafo2.innerHTML = "";
        parrafo3.innerHTML = "";
        parrafo4.innerHTML = "";
        parrafo5.innerHTML = "";


        if(nombre.value.length < 1){
            warningsA = "Debes llenar este campo para enviar";
            parrafo1.innerHTML = warningsA;
            nombre.style.border = "solid 1px red";
        } else {
            comprobar1 = true
            nombre.style.border = "solid 1px green";
        }

        if(apellido.value.length < 1){
            warningsB = "Debes llenar este campo para enviar";
            parrafo2.innerHTML = warningsB;
            apellido.style.border = "solid 1px red";
        } else {
            comprobar2 = true
            apellido.style.border = "solid 1px green";
        }

        rut.value = rut.value.trim();
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut.value)) {
            warningsC = "El RUT es inválido (Ingrese rut sin puntos y con guión)";
            parrafo3.innerHTML = warningsC;
            rut.style.border = "solid 1px red";
        } else {
            comprobar3 = true
            rut.style.border = "solid 1px green";
        }

        if(!regexEmail.test(email.value)){
            warningsD = "El email no es valido";
            parrafo4.innerHTML = warningsD;
            email.style.border = "solid 1px red";
        } else {
            comprobar4 = true
            email.style.border = "solid 1px green";
        }

        if(edad.value.length < 2){
            warningsF = "Debes llenar este campo para enviar";
            parrafo5.innerHTML = warningsF;
            edad.style.border = "solid 1px red";
        } else {
            comprobar5 = true
            edad.style.border = "solid 1px green";
        }

        if(comprobar1 && comprobar2 && comprobar3 && comprobar4 && comprobar5) {
            document.getElementById("successMessage").style.display = "inherit"
        }
    })
}

/* Comportamiento del navbar al reducir el tamaño de la pantalla*/

function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

/* Iniciar mapa de Google Maps */

function iniciarMap(){
    let coord = {lat:-33.033679616872696 ,lng: -71.53316599804108};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
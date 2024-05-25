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
    let terms = document.getElementById("terms");

    let parrafo1 = document.getElementById("warnings1");
    let parrafo2 = document.getElementById("warnings2");
    let parrafo3 = document.getElementById("warnings3");
    let parrafo4 = document.getElementById("warnings4");
    let parrafo5 = document.getElementById("warnings5");
    let parrafo6 = document.getElementById("warnings6");

    form.addEventListener("submit", e => {
        e.preventDefault()
        let warningsA = "";
        let warningsB = "";
        let warningsC = "";
        let warningsD = "";
        let warningsF = "";
        let warningsG = "";
        let enviar = false;
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;

        parrafo1.innerHTML = "";
        parrafo2.innerHTML = "";
        parrafo3.innerHTML = "";
        parrafo4.innerHTML = "";
        parrafo5.innerHTML = "";
        parrafo6.innerHTML = "";


        if(nombre.value.length < 1){
            warningsA = "Debes llenar este campo para enviar";
            enviar = true;
            nombre.style.border = "solid 1px red";
        } else {
            nombre.style.border = "solid 1px green";
        }

        if(apellido.value.length < 1){
            warningsB = "Debes llenar este campo para enviar";
            enviar = true;
            apellido.style.border = "solid 1px red";
        } else {
            apellido.style.border = "solid 1px green";
        }

        rut.value = rut.value.trim();
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut.value)) {
            warningsC = "El RUT es inválido (Ingrese rut sin puntos y con guión)";
            enviar = true;
            rut.style.border = "solid 1px red";
        } else {
            rut.style.border = "solid 1px green";
        }

        if(!regexEmail.test(email.value)){
            warningsD = "El email no es valido";
            entrar = true;
            email.style.border = "solid 1px red";
        } else {
            email.style.border = "solid 1px green";
        }

        if(edad.value.length < 2){
            warningsF = "Debes llenar este campo para enviar";
            enviar = true;
            edad.style.border = "solid 1px red";
        } else {
            edad.style.border = "solid 1px green";
        }

        if (!terms.checked) {
            warningsG = "Debes aceptar los términos y condiciones";
            enviar = false;
            parrafo6.innerHTML = warningsG;
        }

        if (!enviar) {
            parrafo1.innerHTML = warningsA;
            parrafo2.innerHTML = warningsB;
            parrafo3.innerHTML = warningsC;
            parrafo4.innerHTML = warningsD;
            parrafo5.innerHTML = warningsF;
        } else {
            document.getElementById("successMessage").style.display = "none";
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
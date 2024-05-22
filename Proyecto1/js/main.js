function validacion(){
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
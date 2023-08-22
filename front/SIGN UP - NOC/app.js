const nombre = document.getElementById("name")
const fono = document.getElementById("phone")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){  
        warnings +=`El nombre no es valido <br>`
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings +=`El email no es valido <br>`
        entrar =true
    }
    if(fono.value.length < 9){
        warnings +=`El telefono no es valido <br>`
        entrar =true
    }
    if(pass.value.length < 8){
        warnings +=`La contraseña no es valida <br>`
        entrar =true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
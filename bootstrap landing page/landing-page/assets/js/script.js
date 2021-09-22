let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false


function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML= "Nome inválido"
        txtNome.style.color="red"
    } else {
        txtNome.innerHTML= "Nome válido"
        txtNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1||email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color ="red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.getElementById("txtMensagem")

    if(mensagem.value.length > 300){
        txtMensagem.innerHTML = "Mensagem grande demais. Digite até 300 caracteres."
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso")
    } else {
        alert("Preencha o formulário corretamente")
    }
}
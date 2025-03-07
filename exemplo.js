// alert("Olá mundo")
//
// Faz uma caixa de texto, tipo input
// var test = prompt("Digite qualquer coisa")
//
// alert(test)

function testTexto() {
    document.getElementById("titulo").innerHTML = "Boa tarde"
}

function testColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "white"
    titulo.style.fontSize = "50px"
}

function reset() {
    document.getElementById("titulo").innerHTML = "Bem vindo a Pandora"
}

function testInput() {
    document.getElementById("input").value = "Tarde"
}

function limparInput() {
    var limpar = confirm("Você tem certeza que deseja limpar as informações?")
    if (limpar){
        document.getElementById("input_email").value = ""
        document.getElementById("input_telefone").value = ""
        document.getElementById("input_cep").value = ""
        document.getElementById("input_senha").value = ""
        document.getElementById("input_endereco").value = ""
        document.getElementById("input_cidade").value = ""
    }
}

function color_email() {
    const color_email = document.getElementById("color_email")

    color_email.style.color = "white"
}

function color_senha() {
    const color_senha = document.getElementById("color_senha")

    color_senha.style.color = "white"
}

function color_endereco() {
    const color_endereco = document.getElementById("color_endereco")

    color_endereco.style.color = "white"
}

function color_cidade() {
    const color_cidade = document.getElementById("color_cidade")

    color_cidade.style.color = "white"
}

function color_cep() {
    const color_cep = document.getElementById("color_cep")

    color_cep.style.color = "white"
}

function color_telefone() {
    const color_telefone = document.getElementById("color_telefone")

    color_telefone.style.color = "white"
}

function color_estado() {
    const color_estado = document.getElementById("color_estado")

    color_estado.style.color = "white"
}

function alimentar_email() {
    document.getElementById("input_email").value = "Email"
}

function alimentar_senha() {
    document.getElementById("input_senha").value = "Senha"
}

function alimentar_endereco() {
    document.getElementById("input_endereco").value = "Endereço"
}

function alimentar_telefone() {
    document.getElementById("input_telefone").value = "Telefone"
}

function alimentar_cidade() {
    document.getElementById("input_cidade").value = "Cidade"
}

function alimentar_cep() {
    document.getElementById("input_cep").value = "CEP"
}

var pgTitulo = document.querySelector(".titulo") //document.querySelector : selecionar elemento dentro do documento HTML
pgTitulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelectorAll(".paciente")

for (var i = 0; i < paciente.length; i++) {
    var indexPaciente = paciente[i]

    var contPesoPaciente = indexPaciente.querySelector(".info-peso")
    var peso = contPesoPaciente.textContent // textContent : Busca o valor total do elemento

    var contAltPaciente = indexPaciente.querySelector(".info-altura")
    var altura = contAltPaciente.textContent

    var contImcPaciente = indexPaciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso); 
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false
        contImcPaciente.textContent = "Peso Inválido!"
        indexPaciente.classList.add("paciente-invalido") //adicionando classe no elemento
        console.log("Peso invalido")
    }

    if (!alturaValida) {
        alturaValida = false;
        contImcPaciente.textContent = "Altura Inválida!"
        indexPaciente.classList.add("paciente-invalido")
        console.log("Altura Inválido")
    }

    if (pesoValido && alturaValida) {
        var calcImc = calculaImc(peso, altura)
        contImcPaciente.textContent = calcImc
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0) {
        return true
    }else{
        return false
    }
}


function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}





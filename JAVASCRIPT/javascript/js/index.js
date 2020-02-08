var pgTitulo = document.querySelector(".titulo") //document.querySelector : selecionar elemento dentro do documento HTML
pgTitulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente")

var contPesoPaciente = paciente.querySelector(".info-peso")
var peso = contPesoPaciente.textContent // textContent : Busca o valor total do elemento

var contAltPaciente = paciente.querySelector(".info-altura")
var altura = contAltPaciente.textContent

var contImcPaciente = paciente.querySelector(".info-imc")

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso > 500){
    pesoValido = false; 
    contImcPaciente.textContent = "Peso Inválido!"
}

if(altura <= 0 || altura > 3.00){
    alturaValida = false; 
    contImcPaciente.textContent = "Altura Inválido!"  
}

if(pesoValido && alturaValida){
    var calcImc = peso / (altura * altura)
    contImcPaciente.textContent = calcImc
}



console.log(calcImc)
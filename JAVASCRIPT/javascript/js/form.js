var btnAdicionar = document.querySelector("#adicionar-paciente")  
btnAdicionar.addEventListener("click", function(){ //addEventListener - adicionar evento na elemento; click - quando clicado
    event.preventDefault() 
    var form = document.querySelector("#form-adiciona")

    var paciente = capturaPacienteDoForm(form)

    var pacienteTr = criarTr(paciente);

    var erro = validaForm(paciente)

    if(erro.length > 0 ){
        var msgErro = document.querySelector("#mensagem-erro");
        msgErro.textContent = erro
        msgErro.classList.add("erro-validacao")
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset()
})

function capturaPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value, //captura o valor do campo
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    } //{} -- cria objeto paciente, passando propriedades

    return paciente
}

function criarTr(paciente){
    var pacienteTr = document.createElement("tr") //creatElement - cria um elemento HTML
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome")) //appendChild - define um elemento "filho" para um elemento "pai do HTML" 
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function criarTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaForm(paciente){

    var erros = []

    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido")

    if(!validaAltura(paciente.altura)) erros.push(" Altura é invalida")
    
    return erros
}
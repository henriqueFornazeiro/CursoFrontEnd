var btnAdicionar = document.querySelector("#adicionar-paciente")  
btnAdicionar.addEventListener("click", function(){ //addEventListener - adicionar evento na elemento; click - quando clicado
    event.preventDefault() 
    var form = document.querySelector("#form-adiciona")

    var paciente = capturaPacienteDoForm(form)

    var pacienteTr = criarTr(paciente)

    var erro = validaPaciente(paciente)
    console.log(erro);

    if(erro.length > 0 ){
        exibeMensagemDeErro(erro)
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset()
    var mensagens = document.querySelector("#mensagens-erro");
    mensagens.innerHTML = ""
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
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "" //Controlar HTML do elemento

    erros.forEach(function(erro){
        var li =document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    })
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

function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco")
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido")

    if(paciente.peso.length == 0) erros.push("O peso não pode estar em branco")

    if(!validaAltura(paciente.altura)) erros.push("Altura é invalida")
    
    if(paciente.altura.length == 0) erros.push("A altura não pode estar em branco")

    if(paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco")

    return erros
}
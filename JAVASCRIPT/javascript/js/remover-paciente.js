var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    
    

    event.target.parentNode.classList.add("fade-out")
    
    setTimeout(function(){ //definindo tempo que a linha vai executar
        event.target.parentNode.remove() //delegando o evento para o pai
    },500)
    
})
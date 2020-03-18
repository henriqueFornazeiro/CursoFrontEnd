var btnAdicionar = document.querySelector("#buscar-paciente")

btnAdicionar.addEventListener("click", function(){
    console.log("buscando paciente...")
    
    var request = new XMLHttpRequest();
    request.open("GET","https://api-pacientes.herokuapp.com/pacientess")
    request.addEventListener("load", function(){

        if(request.status == 200){
            var resposta = request.responseText
            var pacientes = JSON.parse(resposta)
            
            pacientes.forEach(function(paciente) {
              adicionaPacienteTabela(paciente)  
            })
        }else{
            console.log(request.status)
            console.log(request.responseText)
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel")
        }
     
    })

    request.send()
})
$("#btn-frase").click(fraseAleatoria)
$("#btn-frase-id").click(buscaFrase)

function fraseAleatoria(){
    $("#spinner").toggle()
    $.get("http://localhost:3000/frases", trocaFrase)
    .fail(function(){
        $(".erro").show()
        setTimeout(function(){
            $(".erro").toggle()
        },5000)
    })
    .always(function(){
        $("#spinner").toggle()
    })

}

function trocaFrase(data){
    var frase = $(".frase")
    var nAleatorio = Math.floor(Math.random() * data.length)
    frase.text(data[nAleatorio].texto)

    atualizaFrase()
    atualizaTempoInicial(data[nAleatorio].tempo)
}

function buscaFrase(){
    $("#spinner").toggle()
    var fraseId = $("#frase-id").val()
    var dados = { id: fraseId}
    $.get("http://localhost:3000/frases",dados,escolheFrase)
    .fail(function(){
        $(".erro").show()
        setTimeout(function(){
            $(".erro").toggle()
        },5000)
    })
    .always(function(){
        $("#spinner").toggle()
    })

}

function escolheFrase(data){
    var frase = $(".frase")
    frase.text(data.texto)

    atualizaFrase()
    atualizaTempoInicial(data.tempo)
}


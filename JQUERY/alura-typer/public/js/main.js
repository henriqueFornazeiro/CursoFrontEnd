var campo = $(".campo-digitacao")
var tempoInicial = $("#tempo-digitacao").text()

$(function(){
    atualizaFrase()
    inicializaContadores()
    inicializaCronometro()
    inicializaMarcadores()
    $("#btn-reiniciar").click(reiniciaJogo) //click -> funcão de atalho para evento click
    atualizaPlacar()
    $("#usuario").selectize({
        create      : true,
        sortField   : 'text'
    })
    $('.tooltip').tooltipster({
        trigger : "custom"
    })
})

function atualizaTempoInicial(tempo){
    tempoInicial = tempo
    $("#tempo-digitacao").text(tempo)
}

function atualizaFrase(){
    var frase = $(".frase").text() //$ - Utilizando o jQuery e substituindo o "document.querySelector"
    var numPalavras = frase.split(" ").length
    var tamFrase = $("#tamanho-frase")
    tamFrase.text(numPalavras)
}

function inicializaContadores(){

    campo.on("input", function(){ //on -> addEventListener 
        var digitadoNoCampo = campo.val() //capturar o valor (conteudo) de input
    
        var qtdPalavras = digitadoNoCampo.split(/\S+/).length - 1
        $("#cont-palavras").text(qtdPalavras)
    
        var qtdCaracteres = digitadoNoCampo.length
        $("#cont-caracteres").text(qtdCaracteres)
    }) 
}

function inicializaCronometro(){
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text()
        var cronometroID = setInterval(function(){
            tempoRestante --
            $("#tempo-digitacao").text(tempoRestante)
            if(tempoRestante == 0) {
                campo.attr("disabled", true)
                clearInterval(cronometroID)
                campo.toggleClass("campo-desativado")
                inserePlacar()
            }
        },1000)
    })
    
}

function inicializaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text()
        var digitado = campo.val()
        var comparado = frase.substr(0,digitado.length)
        
        if (digitado == comparado){
            campo.addClass("campo-correto")
            campo.removeClass("campo-errado")
        }else{
            campo.addClass("campo-errado")
            campo.removeClass("campo-correto")
        }
    })
}

function reiniciaJogo(){ 
    campo.attr("disabled", false)
    campo.val("")
    $("#cont-palavras").text("0")
    $("#cont-caracteres").text("0")
    $("#tempo-digitacao").text(tempoInicial)
    campo.toggleClass("campo-desativado")
    campo.removeClass("campo-correto")
    campo.removeClass("campo-errado")
    inicializaCronometro()
}
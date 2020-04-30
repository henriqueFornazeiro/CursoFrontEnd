$("#btn-placar").click(mostraPlacar)
$("#btn-sync").click(sincronizaPlacar)

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody")
    var usuario = $("#usuario").val()
    var numPalavras = $("#cont-palavras").text()
    var linha = novaLinha(usuario, numPalavras)
    linha.find(".btn-remover").click(removeLinha)

    corpoTabela.append(linha);

    $(".placar").slideDown(500)
    scrollPlacar()
}

function scrollPlacar(){
    var posicaoPlacar = $('.placar').offset().top
    $("body").animate(
        {

            scrollTop: posicaoPlacar+"px"

        },
        1000
    )
}

function novaLinha(usuario, numPalavras){
    var linha = $("<tr>")
    var colUsuario = $("<td>").text(usuario)
    var colNumPalavras = $("<td>").text(numPalavras)
    var colRemover = $("<td>")
    var link = $("<a>").addClass("btn-remover").attr("href", "#")
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete") 
    
    link.append(icone)
    colRemover.append(link)
    linha.append(colUsuario)
    linha.append(colNumPalavras)
    linha.append(colRemover)

    return linha

}

function removeLinha(){  
    event.preventDefault()
    var linha = $(this).parent().parent()
    linha.fadeOut(1000)
    setTimeout(function(){
        linha.remove()
    }, 1000)
}    

function mostraPlacar(){
    $(".placar").stop().slideToggle(600)
}

function sincronizaPlacar(){
    var placar = []
    var linhas = $("tbody>tr")
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text()
        var palavras = $(this).find("td:nth-child(2)").text() 
        
        var score = {
            usuario : usuario,
            pontos  : palavras
        }

        placar.push(score)
    })

    var dados = {
        placar: placar
    }
    $.post("http://localhost:3000/placar",dados, function(){
        console.log("Salvou o placar no servidor")
        $('.tooltip').tooltipster("open")
    }).fail(function(){
        $('.tooltip').tooltipster("open").tooltipster("content", "Falha ao sincronizar")
    }).always(function(){
        setTimeout(function(){
            $('.tooltip').tooltipster("close")
        }, 1200)
    })
}

function atualizaPlacar(){

    $.get("http://localhost:3000/placar", function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos)
            $("tbody").append(linha)
            linha.find(".btn-remover").click(removeLinha)
        })
    })
 
 }
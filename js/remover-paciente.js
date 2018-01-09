//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {/*adicionando evento de double click no elemento pai. Nesse caso a tabela, más poderia ser o pai da tabela*/
    var objetoClicado =  event.target; /*capturando o elemento clicado, no caso uma td*/
    var noPai = objetoClicado.parentNode; /*pegando o pai do elemento, no caso uma tr*/
    pai.classList.add("fadeOut");/*adicionando efeito*/ 

    setTimeout(function() {
        event.target.parentNode.remove();/*removendo o elemento após meio segundo*/
    }, 500);

});

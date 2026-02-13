document.getElementById("conteudo").innerHTML += "<p>Seja Bem Vindo</p>";

     function Cor1(){

    var valor = document.getElementById("conteudo").innerHTML;
    console.log(valor);

    document.getElementById("conteudo").style.backgroundColor = "blue";
    
}

function Cor2(){
    document.getElementById("conteudo").style.backgroundColor = "red";
}

function Img1() {
    document.getElementById("foto").setAttribute("src", "neymar2011.jpg");
}

function Img2() {
    document.getElementById("foto").setAttribute("src", "Neymar.jpeg");
}


function exibirSrc() {
    let valor = document.getElementById("foto").getAttribute("src");
    console.log(valor);
}
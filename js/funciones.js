//window.addEventListener("load", main())

window.addEventListener("DOMContentLoaded", main, false)

function main(){
    let titulo = document.getElementById("titulo");
    titulo.addEventListener("click", mensaje), false;
}



function mensaje() {
    salir = window.confirm("deseas salir?")
}
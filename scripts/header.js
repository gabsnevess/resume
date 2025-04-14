const texto = "<Gabriel Neves/>";

const elemento = document.getElementById("header_title");

let index = 0;
function escrever() {
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escrever, 80);
    }
}

escrever();
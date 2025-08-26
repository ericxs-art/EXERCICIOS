//objeto window = janela de navegador
// console.log(window.alert("oi"));

// window.prompt("Me diz um nome")

//objeto document = código html do site

console.log(document);
console.log(document.head);
console.log(document.body);

//acessando elementos do html 
// por tag, class e id

//buscar elementos pela mesma tag
var titulos = document.getElementsByTagName("h1")

console.log(titulos)

var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos)

var achado = document.getElementById("p3")

console.log(achado)

//modificando  elemento da lista de achados pela tag
titulos[1].style.color="green"
titulos[1].style.backgroundColor="pink"

//modificar o elemento da lista de achados pela class
paragrafos[0].style.fontsize="45px"
paragrafos[0].style.fontWeight="bold"

//modificando elemento achado pelo id

//trocando o texto do elemento
achado.innerText = "Taubs"
//trocando o html do elemento
achado.innerHTML = "<h2> novo texto </h2>"

function cliquei(){
    console.log("parabens, voce ganhou um ponei")
    console.log("So que do minecraft")
}



function quemMeChamou(individuo) {
    console.log(individuo)
    console.log("class:", individuo.class)
    console.log("id:", individuo.id)
    console.log("Name",individuo.name)
    console.log("Valor: ", individuo.value)
}

function trocaTexto(elementoQueChamou){
    //mostra o texto do html que chamou a função
    //console.log(elementoQueChamou)

    //criar uma variavel pra guardar quem ele achar aquele id
   let textoAntigo = document.getElementById
   ("textoPraTrocar")

   //usa o innerhtml pra substituir o que tava dentro do textoantigo, pro valor que está na caixinha do elemento que chamou a função
   
   textoAntigo.innerHTML = elementoQueChamou.value
}
function troca(elementoQueChamou){
    let antigo = document.getElementById("textoOutro")
    antigo.innerHTML = elementoQueChamou.value
}
function corVermelha(elemento){
elemento.style.color = "red"
elemento.style.fontSize = "60px"
}
function corAzul(elemento){
elemento.style.color = "blue"
elemento.style.fontSize = "20px"
}

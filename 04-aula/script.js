// console.log("Olá, Mundo!");

// //vetor = Array
// var alunos = ["Cr7","ney","messi","caça rato","cbum"]

// //Mostra todos os elementos do array
// console.log(alunos)

// //Mostra um valor de um posição específica do array
// console.log(alunos[2])

// //Troca um valor
// alunos[3] = "tiririca"

// var aleatorio = ["rd", 8, "froagem", 1.5, 3, false, "dougras"]

// for(var i = 0 ; i < 7;i++){
//     console.log(aleatorio[i])
// }
// for(var i = 0; i < aleatorio.length;i++){
//     console.log(aleatorio[i])
// }
// //array de times
// var times = ["Real Madrid", "Liverpool","Desportiva","Milan"]
// //index = numero da caixa no array
// for(var index in times){
//     console.log(index)//mostrar o numero da caixinha que descobriu
//     console.log(times[index]) // mostrar o valor que tem dentro da caixinha
// ;

//exercicios

// manipulado  arrays
var frutas = ["Maçã","Uva", "Pêra"]
console.log(frutas)

//push - adicona um valor no fim do array
frutas.push("mamão")
console.log(frutas)

//pop - tira ultimo valor e retorna ele

var fruttaTirada = frutas.pop()
console.log(fruttaTirada)

//shift - tira o primeiro valor
var primeiraFruta = frutas.shift()
console.log(primeiraFruta)

//unshift - adiciona um valor ou mais no inicio do array
var novaFruta = "Banana"
frutas.unshift(novaFruta)
console.log(frutas)
// exc 1
function boasVindas (){
    console.log("Bem-vindo(a) ao curso de JavaScript!")
}
boasVindas()

// exc 2
function saudar(nome){
    var nome = prompt("Qual é o seu nome?")
    console.log("Olá, " + nome)
}
 saudar()

// exc 3
function dobro() {
    num = prompt("Digite um número:")
    var resu = num * 2
    console.log("O dobro do seu número é:", resu)
    return resu
}
dobro()

// exc 4
function soma (n1, n2){
    var n1 = Number(prompt("Digite o primeiro número:"))
    var n2 = Number(prompt("Digite o segundo número:"))
    let som = n1 + n2
    console.log("Resultado = ", som)
    return som
}
soma()

// exc 5
num1 = []
num2 = []

var num1 = Number (prompt("Digite um número:"))
var num2 = Number (prompt("Digite outro número:"))

function media(num1, num2){
    let med = (num1 + num2) / 2
    console.log("A média entre os números é:", med)
    return med
}
media(num1, num2)
// exc 6


function descricaoPessoa(peson){
    peson = {
    nome: "Valdirene",
    idade: 45
},
    console.log(peson.nome,"Tem ", peson.idade, " anos de idade.");
}
descricaoPessoa()

// exc 7
function calculadora(nu1,nu2){
    var nu1 = Number(prompt("Digite o um número:"))
    var nu2 = Number(prompt("Digite outro número:"))
   mul = nu1 * nu2
   console.log("O resultado da multiplicação é:", mul);
   return mul
}
calculadora()

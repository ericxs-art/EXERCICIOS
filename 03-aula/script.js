// console.log("VAMO Q VAM0S!");

// //LAÇOS DE REPETIÇÃO
// //PARA = FOR
// for(var i = 0; i < 5; i++) {
//     console.log("Ainda estoy aqui");
//     console.log("i");
// }
// console.log("Fim do loop FOR");

// //ENQUANTO = WHILE
// var contagem = 0
// while(contagem < 10) {
//     console.log("Estou repentindo infinita vezes");
//     contagem++
// }
// // Exercicio 1
// var numeroEscolha = prompt("Digite um número:")

// for(var i = 0; i <= numeroEscolha; i++) {
//     console.log("O número é: ",  i);
// }
// Exercicio 2
// var senha = 0
// var senhaCorreta = "7"

// while(senha != senhaCorreta) {
//     var senha = prompt("Digite a senha: (Dica o GOAT)");
// }
// console.log("Senha correta! Acesso concedido.");

//FUNÇÕES

//cria função
// function bemvvindo(){
//     var nome = prompt("Qual é o seu nome?");
//     console.log("Olá," ,nome)
// }
//chama função
// bemvvindo()

// function calcularidade(idade){
// alert("Sua idade é: "+ idade);
// }
// calcularidade(25);
// calcularidade(30);

//exercicio 3
// function Maior (){
//     var numero1 = parseInt(prompt("Digite o primeiro número:"));
//     var numero2 = parseInt(prompt("Digite o segundo número:"));

//     if (numero1 > numero2) {
//         console.log("O maior número é:", numero1);
//     } else if (numero2 > numero1) {
//         console.log("O maior número é:", numero2);
//     } else {
//         console.log("Os números são iguais.");
//     }
// }

// Maior()

//FUNÇÕES COM RETORNO


function soma(valor1, valor2){
let resultado = valor1 + valor2

return resultado
}
var valorSomado = soma(7, 6);
console.log("A soma deu: ", valorSomado);
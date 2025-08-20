// interação com usuario via prompt
// var mome = prompt("Digite seu nome: ");
//alert("Olá, " + nome + "!");

//condicionais
// SE, SENÃO SE, SENÃO
//IF, IF ELSE, ELSE 

 var estativo = 7

 if (estativo == true) {
    console.log("Voce ta vivo");
 }
 else if (estativo == false) {
    console.log("Voce ta morto");
 }
 else {
    console.log("Voce ta indefinido");
 }

// //Escolha / caso
// //SWITCH / CASE

 var corCamisa = "Verde"

 switch (corCamisa) {
     case "Azul":
         console.log("Você ganhou um voucher");
         break
     case "Amarela":
         console.log("Você ganhou um Body splash");
         break
     case "Vermelha":
        console.log("voocê ganhou um Brinde");
       break
    default:
        console.log("Cor não encontrada");
         break
}

//ATIVIDADE NOTA
// ATE 5 = REPROVADO, 5 A 6 = RECUPERAÇÃ0
//ACIMA DE 6 = APROVADO
// prompt = caixinha de pergunta
// alert = caixinha de alerta

 console.log("Digite sua nota: ");
 var nota = prompt("Digite sua nota: ");

 if (nota <= 5) {
    console.log("Reprovado");
 }
else if (nota > 5 && nota < 6) {
     console.log("Recuperação");
 } else if (nota >= 6) {
    console.log("Aprovado");
 } else {
     console.log("Nota inválida");
 }

CINEMA
var resultado1
var resultado2
var id = prompt("Digite sua idade, amiga 1: ");
if(id < 18 ){
    console.log("Você Pagará R$ 15,00");
    resultado1 = 30
}
else if (id > 17 && id <= 59 ) {
    console.log("Você Pagará R$ 30,00");
    resultado1 = 30
}
else if (id > 59) {
    console.log("Você Pagará R$ 20,00");
    resultado1 = 20
}
var id2 = prompt("Digite sua idade, amiga 2: ");
if(id2 < 18 ){
    console.log("Você Pagará R$ 15,00");
    resultado2 = 15
}
else if (id2 > 17 && id2 <= 59 ) {
    console.log("Você Pagará R$ 30,00");
    resultado2 = 30
}
else if (id2 > 59) {
    console.log("Você Pagará R$ 20,00");
    resultado2 = 20
}
var resultado = resultado1 + resultado2;
console.log("O resultado do ingressos é: " , resultado);
alert("O resultado do ingressos é: R$ " + resultado, ",00"  );
var resultado = console.log("O resultado do ingresso é: " , resultado);




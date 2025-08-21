//introdução
console.log("Bem vindo ao Banco do Brasil!")
alert("Bem vindo ao Banco do Brasil!")

//senha
 var senha = 0
var senhaCorreta = "1981"

while(senha != senhaCorreta) {
    var senha = prompt("Digite sua senha: ");
 }
 alert("Senha correta! Acesso concedido")
 console.log("Senha correta! Acesso concedido.");

 //operações
var saldo = 5000
alert("Seu saldo é: R$" + saldo, )

function depósito(){
     var valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
    var resu = saldo + valorDeposito;
    alert("Depósito realizado, Saldo Atual de: R$" + resu);
    console.log("Depósito realizado, Saldo Atual de: R$" + resu);
}
function saque(){
    var valorSaque = parseFloat(prompt("Digite o valor do saque:"));
    if (valorSaque <= saldo) {
       var resu2 = saldo - valorSaque;
        alert("Saque realizado, Saldo Atual de: R$" + resu2);
        console.log("Saque realizado, Saldo Atual de: R$" + resu2);
    } else {
        alert("Saldo insuficiente para saque.");
        console.log("Saldo insuficiente para saque.");
    }
}


var operacao = prompt("Escolha uma operação 1. Depósito 2.Saque 3.Sair")
if (operacao === "1") {
   depósito()
}
else if (operacao === "2") {
    saque()
    }
    if (operacao === "3") {
        alert("Obrigado pela Preferência, e viva o Neymar!")
    }


    function replay (){
        prompt("Deseja realizar outra operação? 1. Sim 2. Não")
if (operacao === "2") {
alert("Obrigado pela Preferência, e viva o Neymar!")
}

else if (operacao === "1") {
replay2()
    }
}
    function replay2(){
var operacao = prompt("Qual operação?  1. Depósito 2.Saque 3.Sair")
if (operacao === "1") {
   depósito()
}
else if (operacao === "2") {
    saque()
    }
    if (operacao === "3") {
        alert("Obrigado pela Preferência, e viva o Neymar!")
    }
    }



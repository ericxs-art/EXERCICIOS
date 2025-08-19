//comentário de uma linha só

/*comentário de várias linhas
   mais de uma linha
*/

// console.log == escreva do portugol
console.log("Olá, Mundo!")

//Cria uma janela de alerta
//alert("teste!");

var nome = "CRis"

console.log(nome);

console.log("Olá, " + nome + "!");

//cadeia= string
var texto = "Vasco";
console.log(typeof(texto))

//real = number, float
var numero = 10;
console.log(typeof(numero))

//logico = bool
var vouf = true;
console.log(typeof(vouf))

//valor nulo
var nulo = null;
console.log(typeof(nulo))

//varialvel sem valor iniciado
var indefinido = undefined;
console.log(typeof(indefinido))

//operadores aritméticos
// + - * / % **
var a = 10;
var b = 5;

var soma = a + b;
console.log(soma);

var subtracao = a - b;
console.log(subtracao);

var multiplicacao = a * b;
console.log(multiplicacao);

var divisao = a / b;
console.log(divisao);

var resto = a % b;
console.log(resto);

//Operadores
//e, ou, nao
// &&, ||, not

var verdade = true;
var mentira = false;

//comparação com E
console.log(verdade && verdade); 

//comparação com OU
console.log(verdade || mentira); 

//comparação com Negação
console.log(verdade || !mentira);

//Operadores Relacionais
// ==, ===, !=, !==, >, <, >=, <=

console.log(a == b); // comparação de valor
console.log(a === b);// comparação de valor e tipo
console.log(a != b);
console.log(a !== b);// comparação de valor e tipo
console.log(a > b); 
console.log(a < b);
console.log(a >= b);    
console.log(a <= b);


// Interação com o usuário via comando prompt
var numero = prompt("Digite seu número: ");
var numero2 = prompt("Digite outro número: ");

var resultado = Number(numero) + Number(numero2);

console.log("O resultado da soma é: " , resultado);

alert("O resultado da soma é: " + resultado);
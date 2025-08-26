//Exercicio 1
var carro = {
    marca : "Chevrolet",
    modelo: "Onix",
    ano: "2022"
}
console.log( "Marca do carro: ",carro.marca)
console.log( "Modelo:",carro.modelo)
console.log("Ano: ",carro.ano)

console.log(carro.marca)

carro.ano = "2025"
console.log("Modelo mais atual: ",carro.ano)

carro.cor = "blue"
console.log(carro);

var pessoa = {
nome : "Rodoflinho", 
idade: "10 anos",
apresentar : function(){
    console.log("Olá, meu nome é",pessoa.nome,"e tenho",pessoa.idade)
}
}
pessoa.apresentar()




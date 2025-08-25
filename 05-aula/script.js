console.log("oi")

//com array

var alunos = ["Pedro", "Tiago", "João"]
var media = [7, 8, 6]

console.log("O aluno:", alunos[0], "Teve media: ", media[2])

//Com objeto
var estudante = {
    Nome: "frascisquinho",
    nota1: 8,
    nota2: 9,
    media: 8.5
}
console.log(estudante.Nome);
console.log(estudante.nota2);
console.log(estudante.nota1);
console.log(estudante.media);

//cria um objeto da escola, com 4 propriedades

var serFeliz = {
    Nome: "MATA AULA ",
    Felicidade: 10,
    Criatividade: 10,
    Futuro: "Patrão de Empresa"
}
console.log(serFeliz.Nome);
console.log(serFeliz.Felicidade);
console.log(serFeliz.Criatividade);
console.log(serFeliz.Nome, "=", serFeliz.Futuro);

//Relacionando as duas informações
console.log(serFeliz.Criatividade , "De 10 em 10, se torna", serFeliz.Futuro)

// Outra forma de acessar propriedade
console.log("Futuro de quem mata aula:", serFeliz["Futuro"])

// criando um objeto vazio
var garrafa = {
armazena: "Qualquer Liquido",
feita: "Vibranium"
}
//adicionando novas propriedades
//em um objeto já existente
garrafa.preco = 430
garrafa.cor = "Yellow"
garrafa.tamanho = 2.5
garrafa["Validade"] = "1 Ano"

console.log(garrafa)

//altera o valor de uma propriedade 
//que já existe

garrafa.preco = 429.99
garrafa["validade"] = "2 ANOS"
console.log(garrafa)

//Criar uma nova propriedade
var novaPropriedade = "Apelido"
garrafa[novaPropriedade] = "Aristóteles"
console.log(garrafa.apelido);

//criar funções
var animal = {
    nome:"Luke",
    especie: "Lagarto",
    raca: "Adidas",
    //funcao = metodo
    andar : function(){
console.log("Estou andando")
    },
    latir : function(){
        console.log("Estou latindo")
    }
}
console.log("O nome é: ", animal.nome)

animal.andar()
animal.latir()

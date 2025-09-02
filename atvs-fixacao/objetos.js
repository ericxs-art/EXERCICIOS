//exc 1
var pessoa = {
    nome : "Diego",
    idade : 35
}
//exc 2
console.log(pessoa.nome)

//exc 3
pessoa.idade = 32
console.log(pessoa.idade);

//exc 4
pessoa.cidade = "Belford Roxo"
console.log(pessoa);

//exc 5
var pessoa = {
    nome : "Diego",
    idade : 32,
    apresentar : function(){
    console.log("Olá, meu nome é",pessoa.nome,"e tenho",pessoa.idade)
}
}
pessoa.apresentar()

//exc 6
var alunos = ["louys","dudu","chiquinho"]
var notas = [5,9,8]

console.log("O aluno",alunos[0],"teve a nota:",notas[0])
console.log("O aluno",alunos[1],"teve a nota:",notas[1])
console.log("O aluno",alunos[2],"teve a nota:",notas[2])


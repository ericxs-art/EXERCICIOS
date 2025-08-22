// arrays pra guardar as informações
var alunos = []
var notasA = []
var notasB = []

// Guardar as informações vindas do usuário
function cadastro() {
    for (var i = 0; i < 3; i++) {


        alunos[i] = prompt("Digite o nome do aluno: ")
        notasA[i] = Number(prompt("Digite sua 1º nota:"))
        notasB[i] = Number(prompt("Digite sua 2º nota:"))
    }
}
//CALCULAR MEDIA
function media(nota1, nota2) {
    let mediaCalculada = ((nota1 * 0.4) + (nota2 * 0.6))
    return mediaCalculada
}

//aprovado media >= 7, recuperação media < 7 e >= 5, reprovado media < 5
function situacao(mediaFinal) {
    if (mediaFinal >= 7) {
        return "APROVADO"
    }
    else if (mediaFinal < 7 && mediaFinal >= 5) {
        return "RECUPERAÇAO"
    }
    else {
        return "REPROVADO"
    }
}

//Função que Mostra os Resultados
function mostraResultados(){
for(var index in alunos){
let notaPri = notasA[index] // pega a primeira nota e guarda, vinda do array notasA
let notaSeg = notasB[index]// pega a segunda nota e guarda, vinda do array notasB
let mediaAtual = media(notaPri, notaSeg) //Manda as notas  pra funçao de media
let status = situacao(mediaAtual) // descobre a situaçao de acordo com a media
console.log("O aluno: ", alunos[index], "Teve média de:", mediaAtual);
console.log("O status dele é de: ", status);
    }
}
cadastro()
mostraResultados()
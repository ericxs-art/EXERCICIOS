var aluno = {
    nome: "Rodolf",
    anoEscolar: "2º",
    turma: "C",
    notas: [6, 7, 8],
    estudar: function () {
        console.log("Estou estudando")
    },
    //metodo com ação interna
    media: function () {
        return ((n1 + n2 + n3) / 3)
    },
    //metodo com função externa
    ocorrencias: listaDeOcorrencias
}
//acessar as propriedades do objeto aluno
console.log("O aluno ", aluno.nome, " está no ", aluno.anoEscolar, " ano escolar.");
//executa um método de dentro do objeto
aluno.estudar()
console.log("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
//cria função externa para utilização
function listaDeOcorrencias(){
    console.log("Comeu na biblioteca");
    console.log("Comeu na bibliotec");
    console.log("Comeu na bibliote");
}
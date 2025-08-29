console.log("alô")

var produto1 = {
    nome: "Agua",
    categoria: "Bebidas",
    tamanhos: ["200ml", "lata", "600ml", "2L"],
    quantidade: 7,
    descricao: function () {
        //o produto x é da categia x
        console.log("O produto", this.nome, "é da categoria")


    },
    verTamanhos : opcoes,
}

console.log("O produto", this.nome, "é da categoria",this.categoria)
produto1.descricao

var produto2 = {
    nome :"salgado",
    categoria : "comida",
    tamanhos : ["pequeno","medio","grande"],
    quantidade : 25,
    descricao : function(){

        console.log("O produto", this.nome, "é da categoria", this.categoria)
    },
    verTamnhos : opcoes,
}
//mostrar descrição com uso do this internamente
// produto1.descricao()
// produto2.descricao()

function opcoes(){
    let tmh = " ";
    // console.log("No inicio:",tmh);
    for(index in this.tamanhos){
        //tmh = tmh + this.tamanhos[index] +,","
        tmh += this.tamanhos[index] +",";
        // console.log(tmh)
    }
    //console.log("No fim:", tmh);
    console.log("As opções de tamanho são: ", tmh)  ,
    produto2.verTamnhos()
}
// produto1.verTamanhos()
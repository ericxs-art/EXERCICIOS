// exc 1
var cores = ['Azul',"violeta","Orange"]
console.log(cores)

// exc 2
console.log(cores[0])

// exc 3
cores.push("Branco")
console.log(cores)

// exc 4
cores[1] = "Preto"
console.log(cores)

// exc 5
for (let i = 0; i < cores.length; i++){
    console.log(cores[i])
}

// exc 6
for(var index in cores){
   console.log(index)
   console.log(cores[index])
}
// exc 7
var nums = [2,4,6,8,10]
var soma = 0
for(var i = 0; i < nums.length;i++){
    soma = soma += nums[i]
    console.log(soma)
}
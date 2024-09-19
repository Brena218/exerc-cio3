// 29)
let maiorPreço = 0;
let somaPreços = 0;
let produtos = 25;
let codigoProduto = 2345;
let preço = 30;

for(let i = 0; i <= produtos; i++){
    if(preço > maiorPreço){
        maiorPreço = preço;
    }
    somaPreços += preço;
}
let mediaPreços = somaPreços/produtos;
console.log("o maior preço é : " + maiorPreço.toFixed(2));
console.log("a média dos preços é: " + mediaPreços.toFixed(2))
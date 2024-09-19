// 23)
let valor1 = 3;
let valor2 = 6;
let soma = 0;

const menor = Math.min(valor1,valor2);
const maior = Math.max(valor1,valor2);

for (i = menor; i <= maior; i++){
    soma += i;
}
console.log(soma);
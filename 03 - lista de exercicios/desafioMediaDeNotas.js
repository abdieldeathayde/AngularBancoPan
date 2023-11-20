/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
sua média e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7,passou de semestre;

*/

const nota1 = 7;
const nota2 = 0;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Reprovação");
} else if (media > 5 && media < 7){
    console.log("Recuperação");
} else {
    console.log("Passou de semestre");
}

/* 
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma idicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

function calcularIMC(peso, altura){
    IMC = peso / (altura * altura);
    
    if (IMC < 18.5){
        console.log("Abaixo do peso");
    } else if (IMC >= 18.5 && IMC < 25){
        console.log("Peso normal");
    } else if (IMC >= 25 && IMC < 30) {
        console.log("Acima do peso");
    } else if (IMC >= 30 && IMC < 40) {
        console.log("Obeso");
    } else {
        console.log("Obesidade grave");
    }
}

function main() {
    calcularIMC(70.8, 1.57);
}

main();


/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/





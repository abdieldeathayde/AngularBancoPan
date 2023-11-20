/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function formaPagamento() {

    //const colors = require('colors');
    const read = require('readline-sync');

    const preco = 100;

    console.clear();
    console.log(" _    _   __  _     _   _    _  ");
    console.log("| \\  / | |   | |\\  | | | |  | | ");
    console.log("| |\\/| | |-- | | \\ | | | |__| | ");
    console.log("|_|  |_| |__ |_|  \\|_| |______| ");
    console.log("");
    //let opcao = read.question("\t----MENU---- \n\nEscolha a forma de pagamento \n\n0 - Sair \n\n1 - A vista Debito\n\n2 - A vista no Dinheiro ou PIX \n\n3 - Em duas vezes \n\n4 - Acima de duas vezes");
    opcao = 4
    console.log('Opção ' + opcao);
    if (opcao === 1) {
        
        console.log(aplicarDesconto(preco, 10));
    } else if (opcao == 2) {
       console.log(aplicarDesconto(preco, 15));
    }else if (opcao == 3){   
        console.log(preco);
    }else {
        console.log(aplicarJuros(preco, 10));
    }
}

function main() {
    formaPagamento();

}

main()
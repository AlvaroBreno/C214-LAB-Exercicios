const Soma = require('./soma');
const Divisao = require('./divisao');
const Subtracao = require('./sub');
const Multiplicacao = require('./multi');
const Percentemais = require('./percentema');
const PercenteMenos = require('./percenteMe');
const Percente_qtd = require('./percente_qtd');


var num1, num2, oper ;

var readlineSync = require('readline-sync');
do{
    oper = readlineSync.question("Qual operacao deseja efetuar 1 (+) 2 (/) 3(*) 4(-) 5(%) 6(Sair)? : \n");
    switch(oper) {
        case "1":
            num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
            num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
            s = Soma.soma(num1,num2);
            console.log("Resultado e: " + s);
        break;
        case "2":
            num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
            num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
            d = Divisao.divisao(num1,num2);
            console.log("Resultado e: " + d);
        break;
        case "3":
            num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
            num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
            m = Multiplicacao.multi(num1,num2);
            console.log("Resultado e: " + m);
        break;
        case "4":
            num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
            num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
            sub = Subtracao.sub(num1,num2);
            console.log("Resultado e: " + sub);
        break;
        case "5":
            escP = parseFloat(readlineSync.question("O que deseja fazer? 1 - Aumento, 2 - Diminuir, 3 - Quantidade percentual : \n"))
           
            if (escP == "1") {
                num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
                num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
                pma = Percentemais.percentema(num1,num2);
                console.log("resultado e: " + pma);
            }else if (escP == "2"){
                num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
                num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
                pme = PercenteMenos.percenteMe(num1,num2);
                console.log("resultado e: " + pme);
            }else if (escP == "3"){
                num1 = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
                num2 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
                pqtd =Percente_qtd.percente_qtd(num1,num2);
                console.log("resultado e: " + pqtd);
            }else
                console.log("Opção inválida");
        break;

        case "6":
            
        break;
        
        default:
            console.log("Desculpe, opção invalida");
    }

} while(oper !== "6");




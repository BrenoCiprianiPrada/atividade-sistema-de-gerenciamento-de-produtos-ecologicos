import { ContaBancaria } from "./contaBancaria";

class ContaCorrente implements ContaBancaria{
    saldo:number;

    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
        else{
            console.log("Saldo insuficiente para o valor Informado");
        }
    }


}

//OBJETOS
const conta = new ContaCorrente(1000);

conta.depositar(200);
conta.sacar(1400);


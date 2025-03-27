import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;

    constructor(nome: string, preco: number, dataValidade: Date) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
    }

    exibirDetalhes(): void {
        console.log(`Alimento Orgânico: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Validade: ${this.dataValidade.toDateString()}, Ingredientes: ${this.ingredientes.join(", ")}`);
    }
}

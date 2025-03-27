import { ProdutoEcologico } from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirDetalhes(): void {
        console.log(`Produto de Limpeza: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Volume: ${this.volume}ml`);
    }
}

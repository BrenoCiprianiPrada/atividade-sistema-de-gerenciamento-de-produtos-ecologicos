import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;

    constructor(nome: string, preco: number, material: string) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
    }
    exibirDetalhes(): void {
        console.log(`Item de Decoração: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade} cm`);
    }
}

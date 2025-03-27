import { Animal } from "./animal";

class Cachorro implements Animal{
    idade: number;
    nome: string;
    raca: string;

    constructor(idade:number, nome:string, raca:string){
        this.idade = idade;
        this.nome = nome;
        this.raca = raca;
    }

    som(): void {
        console.log("auau");
    }
}

const cachorro = new Cachorro(10,"Bongers","golden retriever");
console.log(cachorro.idade);
console.log(cachorro.nome);
console.log(cachorro.raca)
cachorro.som;
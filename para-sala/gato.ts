import { Animal } from "./animal";

class Gato implements Animal{
    idade: number;
    nome: string;
    raca:string;

    constructor(idade:number, nome:string, raca:string){
        this.idade = idade;
        this.nome = nome;
        this.raca = raca;
    }

    som(): void {
        console.log("miau");
    }
}

const gato = new Gato(10,"Bongers","laranja genérico viralata");
console.log(gato.idade);
console.log(gato.nome);
console.log(gato.raca);
gato.som;
import { Livro } from "./livro";

class livroDigital implements Livro{
    autor: string;
    titulo: string;

    constructor(autor:string, titulo:string){
        this.autor = autor;
        this.titulo = titulo;
    }

    detalhes(): string {
        return(`nome do autor: ${this.autor} e titulo do livro: ${this.titulo} em formatode Livro Digital`);
    }
}

const karl = new livroDigital("Karl marx", "Revolução dos Bixos");
console.log(karl.autor);
console.log(karl.titulo);
console.log(karl.detalhes);
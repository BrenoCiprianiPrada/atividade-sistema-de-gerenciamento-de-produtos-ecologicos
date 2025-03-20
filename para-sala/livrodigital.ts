import { Livro } from "./livro";

class livroDigital implements Livro{
    autor: string;
    titulo: string;
    formato:string;

    constructor(autor:string, titulo:string, formato:string){
        this.autor = autor;
        this.titulo = titulo;
        this.formato = formato;
    }

    detalhes(): string {
        return(`nome do autor: ${this.autor} e titulo do livro: ${this.titulo} em formato de ${this.formato}`);
    }
}

const karl = new livroDigital("Karl marx", "Revolução dos Bixos","PDF");
console.log(karl.autor);
console.log(karl.titulo);
console.log(karl.formato);
console.log(karl.detalhes);
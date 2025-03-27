let numero:number = 10;
let nome:string = "Breno";
const pi:number = 3.14;

function saudacao(nome:string, idade:number){
    console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos`);
}
const nomeUsuario:string = "Breno";
const idade:number = 22;
saudacao(nomeUsuario,idade);

//OBJETO
const pessoa = {
    nome:"Blackouts",
    idade:24,
    cidade:"Fornai",
    apresentar: function():string{
        return `Olá meu nome é %{this.nome}, tenho ${this.idade} e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a:number, b:number): number{
    return a + b;
}
console.log(somar(3,4));


//a interface que possui o export antes, pode ser ultilizada por outros arquivos, sem o export, a interface funciona só no arquivo
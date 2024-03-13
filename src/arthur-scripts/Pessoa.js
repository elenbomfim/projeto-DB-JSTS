export default class Pessoa  { // abstração
    constructor(nome = String, idade = Number, email = String) { // validação
        this._nome = nome
        this._idade = idade 
        this._email = email
    }
    
    exibirInfos() {
        return `${this._nome}, ${this._idade}, ${this._email}`
    }
    
    
}




// faltando linkar db.json com a variavel abaixo;
const BDPessoas = {
    "id":
    {new: typeof Pessoa}
}

const novaPessoa = new Pessoa("Jovem Tranquilão", 100, "jovem@tranquilao")
const novaPessoa1 = new Pessoa("Jovem Tranquilão 2", 200, "jovem@tranquilao2")
console.log(novaPessoa1)
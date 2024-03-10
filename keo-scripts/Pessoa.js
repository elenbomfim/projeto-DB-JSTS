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

// const novaPessoaInserida = new Pessoa('Keo', 37, 'l@l.com') // instanciando
// console.log(novaPessoaInserida)
// console.log(novaPessoaInserida.exibirInfos())

// criando o package.json
// npm init -y
// "type": "module", // no package.json
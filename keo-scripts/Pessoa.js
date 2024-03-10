import { list } from "@chakra-ui/react"

export default class Pessoa  { // abstração
    constructor(nome = String, idade = Number, email = String) { // validação
        this._nome = nome
        this._idade = idade 
        this._email = email
    }

    adicionarPessoanoDB() {
        const pessoa = new Pessoa(this._nome, this._idade, this._email)
        listaDePessoas.push(this._nome, this._idade, this._email)

        return `Adicionando pessoa no banco de dados: ${this.pessoa}`
    }

    listarPessoasParaDB() {
        listaDePessoas = this.pessoa.push()
        listaDePessoas = listaDePessoas.lenght > 0 ? listaDePessoas : 'Não há pessoas cadastradas'
        const lista = [listaDePessoas]

        return `Listando pessoas do banco de dados: ' + ${listaDePessoas}`

    }

    buscarPessoaParaDB() {
        cost buscarPessoa = this.listarPessoasParaDB.find(pessoa => pessoa === this._nome, this._idade, this._email)

        return `Buscando pessoa no banco de dados: ${this._nome}, ${this._idade}, ${this._email}`
    }

    atualizarPessoaParaDB() {
        this.listarPessoasParaDB.map(pessoa => pessoa === this._nome, this._idade, this._email)

        return `Atualizando pessoa no banco de dados: ${this._nome}, ${this._idade}, ${this._email}`
    }

    removerPessoaParaDB() {
        this.listarPessoasParaDB.filter(pessoa => pessoa !== this._nome, this._idade, this._email)

        return `Removendo pessoa do banco de dados: ${this._nome}, ${this._idade}, ${this._email}`
    }
}

const pessoa = new Pessoa ("Jovem Tranquilão", "100", "jt@jt.com")
console.log(pessoa) // Pessoa { _nome: 'Jovem Tranquilão', _idade: '100', _email: 'jt@jt.com' }

const pessoa2 = new Pessoa ("Elen", 20, "e@e.com")
console.log(pessoa2) // Pessoa { _nome: 'Elen', _idade: 20, _email: '

const listaDePessoas = [Pessoa.length]

const busca 
console.log(buscarPessoaParaDB(pessoa2))





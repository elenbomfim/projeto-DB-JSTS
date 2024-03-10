import Pessoa from './Pessoa.js';

// exteds que a classe BancoDeDados está herdando de Pessoa
class BancoDeDados extends Pessoa {
    constructor (nome, idade, email) {
        super(nome, idade, email)
    } 

    adicionarPessoanoDB() {
        // herdar metodo inputNome, inputIdade, inputEmail
        this.inputNome(),
        this.inputIdade(),
        this.inputEmail()

      console.log(`${this._nome},  ${this._idade} anos, email ${this._email}adicionado(a) no banco de dados`)
    }

    listarPessoasNoDB() {
        // herda método listarPessoasParaDB
        console.log(`Listando pessoas do banco de dados: ${this.listarPessoasNoDB()}`)
    }

    buscarPessoaNoDB() {
        // herda método buscarPessoaParaDB
        console.log(`Buscando pessoa no banco de dados: ${this.buscarPessoaNoDB()}`)

    }

    atualizarPessoaNoDB() {
        // herda método atualizarPessoaParaDB
        console.log(`Atualizando pessoa no banco de dados: ${this.atualizarPessoaNoDB()}`)
    }

    removerPessoaNoDB() {
        // herda método removerPessoaParaDB
        console.log(`Removendo pessoa do banco de dados: ${this.removerPessoaNoDB()}`)
    }

}

// const novaPessoaNoDB = new BancoDeDados('Arthur', 29, 'a@a.com')
// console.log(novaPessoaNoDBpessoaDB)
// console.log(novaPessoaNoDBpessoaDB.exibirInfos()) // herda métodos

const pessoaNoDB = new BancoDeDados
pessoaNoDB.adicionarPessoanoDB()
pessoaNoDB.listarPessoasNoDB()
pessoaNoDB.buscarPessoaNoDB()
pessoaNoDB.atualizarPessoaNoDB()
pessoaNoDB.removerPessoaNoDB()


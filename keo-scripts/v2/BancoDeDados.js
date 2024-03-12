import Pessoa from './Pessoa.js';

// extends que a classe BancoDeDados está herdando de Pessoa
class BancoDeDados extends Pessoa {
    constructor(_nome, _idade, _email) {
        super(_nome, _idade, _email)
    }

    adicionarPessoaNoDB() {
        const listaDePessoas = []
        const pessoa = new Pessoa(this.__nome, this.__idade, this.__email)
        const enviarPessoaParaLista = listaDePessoas.push(pessoa)
        return enviarPessoaParaLista
    }

    listarPessoasNoDB() {      
        const db = require('./db.json');     
        const listaDePessoas = db.listaDePessoas        
        console.log(listaDePessoas)

    }

    // buscarPessoaNoDB() {

    // }

    // atualizarPessoaNoDB() {

    // }

    // removerPessoaNoDB() {

    // }

}

// const novaPessoaNoDB = new BancoDeDados('Arthur', 29, 'a@a.com')
// console.log(novaPessoaNoDBpessoaDB)
// console.log(novaPessoaNoDBpessoaDB.exibirInfos()) // herda métodos








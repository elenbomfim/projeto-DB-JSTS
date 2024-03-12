import Pessoa from './Pessoa.js';

// extends que a classe BancoDeDados está herdando de Pessoa
class BancoDeDados extends Pessoa {
    constructor(_nome, _idade, _email) {
        super(_nome, _idade, _email)
    }

    // adicionarPessoaNoDB() {}

    // listarPessoasNoDB() {

    // }

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

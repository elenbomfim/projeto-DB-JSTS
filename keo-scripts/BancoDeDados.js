import Pessoa from './Pessoa.js';

// exteds que a classe BancoDeDados está herdando de Pessoa
class BancoDeDados extends Pessoa {
    constructor (nome, idade, email) {
        super(nome, idade, email)
    } 


}

const novaPessoaNoDB = new BancoDeDados('Arthur', 29, 'a@a.com')
console.log(novaPessoaNoDBpessoaDB)
console.log(novaPessoaNoDBpessoaDB.exibirInfos()) // herda métodos


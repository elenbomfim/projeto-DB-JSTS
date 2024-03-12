import Pessoa from './Pessoa.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs'; 

class BancoDeDados extends Pessoa {
    constructor(_nome, _idade, _email) {
        super(_nome, _idade, _email);
    }

    adicionarPessoaNoDB() {
        const listaDePessoas = []
        const pessoa = new Pessoa(this.__nome, this.__idade, this.__email)
        const enviarPessoaParaLista = listaDePessoas.push(pessoa)
        return enviarPessoaParaLista
    }

    async listarPessoasNoDB() {
        try {
            const currentFileUrl = import.meta.url;
            const currentFilePath = fileURLToPath(currentFileUrl);
            const filePath = path.resolve(path.dirname(currentFilePath), 'db.json');
            const data = fs.readFileSync(filePath, 'utf-8'); // le arquivo usando fs.readFileSync
            const json = JSON.parse(data); // parse do conteudo para JSON
            const listaDePessoas = json.listaDePessoas;
            console.log("Lista de pessoas do DB:", listaDePessoas);
        } catch (error) {
            console.error('Erro ao carregar o JSON:', error);
        }
    }
}

// buscarPessoaNoDB() {

// }

// atualizarPessoaNoDB() {

// }

// removerPessoaNoDB() {

// }

// const novaPessoaNoDB = new BancoDeDados('Arthur', 29, 'a@a.com')
// console.log(novaPessoaNoDBpessoaDB)
// console.log(novaPessoaNoDBpessoaDB.exibirInfos()) // herda métodos

const bancoDeDados = new BancoDeDados();
bancoDeDados.listarPessoasNoDB();










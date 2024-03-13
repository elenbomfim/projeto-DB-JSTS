import { v4 as uuidv4 } from 'uuid';

export default class Pessoa {

    id = uuidv4()

    constructor(_nome = String, _idade = Number, _email = String) { 
        this.__nome = _nome
        this.__idade = _idade
        this.__email = _email
    }

    criarNovaPessoa() {
        const pessoa = new Pessoa(this.__nome, this.__idade, this.__email)
        const listaDePessoas = []
        const enviarPessoaParaLista = listaDePessoas.push(pessoa)
        return enviarPessoaParaLista
    }
}

class PessoaService {
    constructor(url) {
        this.url = "http://localhost:3000/listaDePessoas";
    }

    enviarPessoa(_nome, _idade, _email) {
        const pessoa = new Pessoa(_nome, _idade, _email);
        const body = JSON.stringify(pessoa);
        return fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });
    }
}
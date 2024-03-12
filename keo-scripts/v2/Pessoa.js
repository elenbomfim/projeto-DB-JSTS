export default class Pessoa { // abstração
    constructor(_nome = String, _idade = Number, _email = String) { // validação
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

// encapsula logica de envio de dados
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

const pessoaService = new PessoaService("http://localhost:3000/listaDePessoas")

const _nome = "Zico"
const _idade = 30
const _email = "zico@melhordomundo.com"

try {
    const response = await pessoaService.enviarPessoa(_nome, _idade, _email)
    if (!response.ok) {
        throw new Error("Erro ao registrar. Tente novamente.")
    }
    const data = await response.json()
    console.log("Registro efetivado com sucesso", data)
} catch (error) {
    console.error("Ops... " + error.message)
}
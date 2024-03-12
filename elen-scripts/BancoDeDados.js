/* 
Classe BancoDeDados :
- Atributo: listaDePessoas : add os dados que vamos receber do app.
- Metodos: adicionar, listar, buscarPeloNome, atualizar e deletar.
- Método adicionar: só faz adição se não for nome repetido. Se houver, prompt avisando erro que não é possível add a pessoa. Se add, informar que add com sucesso.
- Método listar: lista todos os dados do db.
- Método buscarPeloNome: busca pelo nome e traz o objeto, do contrário avisa que não tem a pessoa no db.
- Método atualizar: buscar pessoa se existente, se estiver atualizar, senão erro.
- Método deletar: se estiver estiver no banco, deletar, se não estiver, erro*/
import Pessoa from './Pessoa.js';

export default class BancoDeDados extends Pessoa {
    constructor() {
        super()
        this.listaDePessoas = [];
    }

    adicionarPessoa(nome, _idade, email) {
        const pessoaExistente = this.listaDePessoas.some(pessoa => pessoa.nome === nome);
        if (pessoaExistente) {
            console.error('Erro: Já existe uma pessoa com esse nome no banco de dados.');
            return;
        }

        const pessoa = new Pessoa(nome, _idade, email);
        this.listaDePessoas.push(pessoa);
        console.log(`${nome} foi adicionado com sucesso.`);
    }

    listarPessoa() {
        console.log('Listando todas as pessoas no banco de dados:');
        this.listaDePessoas.forEach(pessoa => {
            console.log(pessoa);
        });
    }

    buscarPeloNome(nome) {
        const pessoaEncontrada = this.listaDePessoas.find(pessoa => pessoa.nome === nome);
        if (pessoaEncontrada) {
            console.log('Pessoa encontrada:', pessoaEncontrada);
        } else {
            console.log('Pessoa não encontrada no banco de dados.');
        }
    }

    atualizarCadastro(nome, _idade, email) {
        const pessoaExistenteIndex = this.listaDePessoas.findIndex(pessoa => pessoa.nome === nome);
        if (pessoaExistenteIndex !== -1) {
            const pessoaAtualizada = new Pessoa(nome, idade, email);
            this.listaDePessoas[pessoaExistenteIndex] = pessoaAtualizada;
            console.log('Pessoa atualizada com sucesso.');
        } else {
            console.error('Erro: Pessoa não encontrada no banco de dados.');
        }
    }

    deletarPessoa(nome) {
        const pessoaIndex = this.listaDePessoas.findIndex(pessoa => pessoa.nome === nome);
        if (pessoaIndex !== -1) {
            this.listaDePessoas.splice(pessoaIndex, 1);
            console.log('Pessoa deletada do banco de dados.');
        } else {
            console.error('Erro: Pessoa não encontrada no banco de dados.');
        }
    }
}


import BancoDeDados from './BancoDeDados.js';
import { prompt } from '../index.js';

export default class Menu {
    constructor() {
        this.bancoDeDados = new BancoDeDados();
    }

    exibirMenu() {
        console.log('Menu:');
        console.log('1. Adicionar Pessoa');
        console.log('2. Listar Pessoas');
        console.log('3. Buscar Pessoa pelo Nome');
        console.log('4. Atualizar Pessoa');
        console.log('5. Deletar Pessoa');
        console.log('6. Sair');

        const opcao = prompt('Digite a opção desejada:');

        switch (opcao) {
            case '1':
                this.adicionarPessoa();
                break;
            case '2':
                this.listarPessoa();
                break;
            case '3':
                this.buscarPeloNome();
                break;
            case '4':
                this.atualizarCadastro();
                break;
            case '5':
                this.deletarPessoa();
                break;
            case '6':
                console.log('Saindo do menu.');
                return;
            default:
                console.error('Opção inválida.');
                break;
        }

        this.exibirMenu();
    }

    adicionarPessoa() {
        const nome = prompt('Digite o nome:');
        const idade = parseInt(prompt('Digite a idade:'));
        const email = prompt('Digite o email:');
        this.bancoDeDados.adicionarPessoa(nome, idade, email);
    }

    listarPessoa() {
        this.bancoDeDados.listarPessoa();
    }

    buscarPeloNome() {
        const nome = prompt('Digite o nome da pessoa a ser buscada:');
        this.bancoDeDados.buscarPeloNome(nome);
    }

    atualizarCadastro() {
        const nome = prompt('Digite o nome da pessoa a ser atualizada:');
        const idade = parseInt(prompt('Digite a nova idade:'));
        const email = prompt('Digite o novo email:');
        this.bancoDeDados.atualizarCadastro(nome, idade, email);
    }

    deletarPessoa() {
        const nome = prompt('Digite o nome da pessoa a ser deletada:');
        this.bancoDeDados.deletarPessoa(nome);
    }
}

const menu = new Menu();
menu.exibirMenu();

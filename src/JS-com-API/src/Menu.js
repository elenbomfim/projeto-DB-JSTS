import BancoDeDados from './BancoDeDados.js';
import prompt from 'prompt-sync';
const promptSync = prompt();


class Menu extends BancoDeDados {
    constructor() {
        super();
    }

    exibirMenu() {
        console.log("\n 𝔹𝔸ℕℂ𝕆 𝔻𝔼 𝔻𝔸𝔻𝕆𝕊 \n")
        console.log("Boas vindas ao sistema de cadastro de pessoas!\n");
        console.log("\n======= Menu =======\n");
        console.log("1. Adicionar Pessoa");
        console.log("2. Listar Pessoas");
        console.log("3. Buscar Pessoa");
        console.log("4. Atualizar Pessoa");
        console.log("5. Remover Pessoa");
        console.log("6. Sair");
    }

    async iniciar() {
       let opcao
        do {
            this.exibirMenu();
           opcao = promptSync("Escolha uma opção: ");
            switch (opcao) {
                case '1':
                    await this.adicionarPessoa();
                    break;
                case '2':
                    await this.listarPessoas();
                    break;
                case '3':
                    await this.buscarPessoa();
                    break;
                case '4':
                    await this.atualizarPessoa();
                    break;
                case '5':
                    await this.removerPessoa();
                    break;
                case '6':
                    console.log("Até mais!");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== '6');
    }

    async adicionarPessoa() {
        const _nome = promptSync("Digite o nome da pessoa: ");        
        const _idade = promptSync("Digite a idade da pessoa: ");        
        const _email = promptSync("Digite o email da pessoa: ");      
        await this.adicionarPessoaNoDB(_nome, _idade, _email);
    }

    async listarPessoas() {
        await this.listarPessoasNoDB();
    }

    async buscarPessoa() {
        const _nome = promptSync("Digite o nome da pessoa a ser buscada: ");
        await this.buscarPessoaNoDB(_nome);
    }

    async atualizarPessoa() {
        const _nome = promptSync("Digite o nome da pessoa a ser atualizada: ");
        const _idade = promptSync("Digite a nova idade da pessoa: ");
        const _email = promptSync("Digite o novo email da pessoa: ");
        await this.atualizarPessoaNoDB(_nome, { _idade, _email });
    }

    async removerPessoa() {
        const _nome = promptSync("Digite o nome da pessoa a ser removida: ");
        await this.removerPessoaNoDB(_nome);
    }
}


export default Menu;

const menu = new Menu();
menu.iniciar()
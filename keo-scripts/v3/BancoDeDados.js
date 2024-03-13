import Pessoa from './Pessoa.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

class BancoDeDados extends Pessoa {
    constructor(_nome, _idade, _email) {
        super(_nome, _idade, _email);
    }

    async adicionarPessoaNoDB() {
        try {
            const pessoa = new Pessoa(this.__nome, this.__idade, this.__email);
            const listaDePessoas = await this._carregarDB();
            listaDePessoas.push(pessoa);
            await this._salvarDB(listaDePessoas);
            console.log("Pessoa adicionada com sucesso.");
        } catch (error) {
            console.error('Erro ao adicionar pessoa:', error);
        }
    }

    async listarPessoasNoDB() {
        try {
            const currentFileUrl = import.meta.url;
            const currentFilePath = fileURLToPath(currentFileUrl);
            const filePath = path.resolve(path.dirname(currentFilePath), 'db.json');
            const data = fs.readFileSync(filePath, 'utf-8');
            const json = JSON.parse(data);
            const listaDePessoas = json.listaDePessoas;
            console.log("Lista de pessoas do DB:", listaDePessoas);
        } catch (error) {
            console.error('Erro ao carregar o JSON:', error);
        }
    }

    async buscarPessoaNoDB(nome) {
        try {
            const listaDePessoas = await this._carregarDB();
            const pessoaEncontrada = listaDePessoas.find(pessoa => pessoa.nome === nome);
            if (pessoaEncontrada) {
                console.log("Pessoa encontrada:", pessoaEncontrada);
            } else {
                console.log("Pessoa não encontrada.");
            }
        } catch (error) {
            console.error('Erro ao buscar pessoa:', error);
        }
    }

    async atualizarPessoaNoDB(nome, novosDados) {
        try {
            const listaDePessoas = await this._carregarDB();
            const index = listaDePessoas.findIndex(pessoa => pessoa.nome === nome);
            if (index !== -1) {
                listaDePessoas[index] = { ...listaDePessoas[index], ...novosDados };
                await this._salvarDB(listaDePessoas);
                console.log("Pessoa atualizada com sucesso.");
            } else {
                console.log("Pessoa não encontrada para atualização.");
            }
        } catch (error) {
            console.error('Erro ao atualizar pessoa:', error);
        }
    }

    async removerPessoaNoDB(nome) {
        try {
            let listaDePessoas = await this._carregarDB();
            listaDePessoas = listaDePessoas.filter(pessoa => pessoa.nome !== nome);
            await this._salvarDB(listaDePessoas);
            console.log("Pessoa removida com sucesso.");
        } catch (error) {
            console.error('Erro ao remover pessoa:', error);
        }
    }

    async _carregarDB() {
        const currentFileUrl = import.meta.url;
        const currentFilePath = fileURLToPath(currentFileUrl);
        const filePath = path.resolve(path.dirname(currentFilePath), 'db.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        const json = JSON.parse(data);
        return json.listaDePessoas;
    }

    async _salvarDB(listaDePessoas) {
        const currentFileUrl = import.meta.url;
        const currentFilePath = fileURLToPath(currentFileUrl);
        const filePath = path.resolve(path.dirname(currentFilePath), 'db.json');
        const json = { listaDePessoas };
        const data = JSON.stringify(json, null, 2);
        fs.writeFileSync(filePath, data, 'utf-8');
    }
}

const bancoDeDados = new BancoDeDados();
bancoDeDados.adicionarPessoaNoDB('Ronaldo', 25, 'ronaldo@internacionalle.com');
bancoDeDados.listarPessoasNoDB();
bancoDeDados.buscarPessoaNoDB('Alex');
bancoDeDados.atualizarPessoaNoDB('Zico', { _idade: 30 });
bancoDeDados.removerPessoaNoDB('Zidane');

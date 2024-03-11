import Pessoa from './Pessoa.js';

// exteds que a classe BancoDeDados está herdando de Pessoa
class BancoDeDados extends Pessoa {
    constructor (nome, idade, email) {
        super(nome, idade, email)
    } 
    
    adicionarPessoaNoDB() {
        // Criação de um novo objeto Pessoa
        const pessoa = new Pessoa(this._nome, this._idade, this._email);
        
        // Simulação de adição ao banco de dados (substitua por código real)
        console.log(`Adicionando pessoa no banco de dados: ${pessoa.toString()}`);
        
        return pessoa;
    }
    
    // Função para listar todas as pessoas no banco de dados
    listarPessoasNoDB() {
        // Simulação de consulta ao banco de dados (substitua por código real)
        console.log('Listando pessoas no banco de dados:');
        console.log(this.toString());
        
        return this;
    }
    
    // Função para buscar uma pessoa no banco de dados por nome
    buscarPessoaNoDB(nome) {
        // Validação do parâmetro
        if (!isString(nome) || nome.length === 0) {
            throw new Error('Nome inválido');
        }
        
        // Simulação de consulta ao banco de dados (substitua por código real)
        console.log(`Buscando pessoa no banco de dados: ${nome}`);
        if (this._nome === nome) {
            console.log(`Pessoa encontrada: ${this.toString()}`);
            return this;
        } else {
            console.log('Pessoa não encontrada.');
            return null;
        }
    }
    
    // Função para atualizar uma pessoa no banco de dados
    atualizarPessoaNoDB(nome, idade, email) {
        // Validação dos parâmetros
        if (!isString(nome) || nome.length === 0) {
            throw new Error('Nome inválido');
        }
        if (!isNumber(idade) || idade < 0) {
            throw new Error('Idade inválida');
        }
        if (!isEmail(email)) {
            throw new Error('Email inválido');
        }
        
        // Simulação de atualização no banco de dados (substitua por código real)
        console.log(`Atualizando pessoa no banco de dados: ${nome}`);
        this._nome = nome;
        this._idade = idade;
        this._email = email;
        console.log(`Pessoa atualizada: ${this.toString()}`);
        
        return this;
    }
    
    // Função para remover uma pessoa do banco de dados
    removerPessoaNoDB(nome) {
        // Validação do parâmetro
        if (!isString(nome) || nome.length === 0) {
            throw new Error('Nome inválido');
        }
        
        // Simulação de remoção no banco de dados (substitua por código real)
        console.log(`Removendo pessoa do banco de dados: ${nome}`);
        if (this._nome === nome) {
            console.log('Pessoa removida com sucesso.');
            return true;
        } else {
            console.log('Pessoa não encontrada.');
            return false;
        }
    }
    
    // Função para converter a classe Pessoa em string
    toString() {
        return `Nome: ${this._nome}, Idade: ${this._idade}, Email: ${this._email}`;
    }
}


// const novaPessoaNoDB = new BancoDeDados('Arthur', 29, 'a@a.com')
// console.log(novaPessoaNoDBpessoaDB)
// console.log(novaPessoaNoDBpessoaDB.exibirInfos()) // herda métodos


// faltando testar os outros metodos
const pessoaNoDB = new Pessoa("Arthur", 29, "a@a.com")
pessoaNoDB.adicionarPessoanoDB()
pessoaNoDB.listarPessoasNoDB()
pessoaNoDB.buscarPessoaNoDB()
pessoaNoDB.atualizarPessoaNoDB()
pessoaNoDB.removerPessoaNoDB()

/* 
Classe BancoDeDados :
- Atributo: listaDePessoas : add os dados que vamos receber do app.
- Metodos: adicionar, listar, buscarPeloNome, atualizar e deletar.
- Método adicionar: só faz adição se não for nome repetido. Se houver, prompt avisando erro que não é possível add a pessoa. Se add, informar que add com sucesso.
- Método listar: lista todos os dados do db.
- Método buscarPeloNome: busca pelo nome e traz o objeto, do contrário avisa que não tem a pessoa no db.
- Método atualizar: buscar pessoa se existente, se estiver atualizar, senão erro.
- Método deletar: se estiver estiver no banco, deletar, se não estiver, erro*/
import Pessoa from Pessoa.js

export default class BancoDeDados extends Pessoa  {

    constructor(nome, idade, email){
        super(nome, idade, email)
        this.listaDePessoas = []
    }

    adicionar(pessoa) {
        if(!pessoa === Number){
            this.listaDePessoas.push(pessoa)
           
           
    }
    console.log(pessoa)
}
const 
}

    // listar() {

    // }

    // buscarPeloNome() {

    // }

    // atualizar() {

    // }

    // deletar() {

    // }


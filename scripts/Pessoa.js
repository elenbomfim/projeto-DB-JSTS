// // Classe Pessoa :
// // - Atributos: nome, idade, email.
// // - Construtor: validar dados.
// // - Atributo nome: !number.
// // - Todo os atributos privador.

// class Pessoa {

//     #_nome
//     #_idade
//     #_email

//     construtor (nome, idade, email) {
//         this.#_nome = nome
//         this.#_idade = idade
//         this.#_email = email
//     }

//     get nome () {
//         if(!_nome === Number){
//             console.log("Validado realizada com sucesso!")
//         }else{
//             throw new Error("Nome inválido")
//         }
//         return this.#_nome
//     }

//     get idade () {
//         if(!_idade === String){
//             console.log("Validado realizada com sucesso!")
//         }else{
//             throw new Error("Nome inválido")
//         }       
//         return this.#_idade
//     }

//     get email () {
//         if(!_email === Number){
//             console.log("Validado realizada com sucesso!")
//         }else{
//             throw new Error("Nome inválido")
//         }
//         return this.#_email
//     }

//     // set atualizarNome(_nome){
//     //     // if(!_nome === Number){
//     //     //     console.log("Atualização realizada com sucesso!")
//     //     // }else{
//     //     //     throw new Error("Nome inválido")
//     //     // }
//     //     // this.#_nome = novoNome
//     // }

//     // set idade(atualizarIdade){

//     // }

//     // set email(atualizarEmail){

//     // }
// }

export default class Pessoa {

    #nome
    #idade
    #email

    constructor(nome, idade, email) {
        if (typeof nome === 'number') {
            throw new Error('Nome não pode ser um número!');
        }
        this.#nome = nome;
        this.#idade = idade;
        this.#email = email;
    }
    
    get nome () {
        if(!nome === Number){
            console.log("Validado realizada com sucesso!")
        }else{
            throw new Error("Nome inválido")
        }
        return this.#nome
    }
    
    get idade () {
        if(!idade === String){
            console.log("Validado realizada com sucesso!")
        }else{
            throw new Error("Nome inválido")
        }       
        return this.#idade
    }
    
    get email () {
        if(!email === Number){
            console.log("Validado realizada com sucesso!")
        }else{
            throw new Error("Nome inválido")
        }
        
        return this.#email
    }
    
    set nome (novoNome){
        if (nome === '')
        throw new Error
    this.#nome = novoNome
    }

    set idade (novaIdade){
        if (idade === '')
        throw new Error
    this.#idade = novaIdade
    }

    set email (novoEmail){
        if (email === '')
        throw new Error
    this.#email = novoEmail
    }

    exibirInfos() {
        return `${this.nome}, ${this.idade}, ${this.email}`
    }

    
}


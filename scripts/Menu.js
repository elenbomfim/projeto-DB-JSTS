
// Classe Menu:
// - menu simples com todos os métodos


// class Menu extends BancoDeDados{

// }




console.log("\n Bem-vindo ao banco de dados \n")
console.log("Escolha a opção desejada \n")
console.log("1- Adicionar: \n")

var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });


//Contextual Typing em funções anônimas
//Mosntrar os nomes em maiusculo
let names = ['raiane', 'luiz', 'henry'];

names.forEach(function (nome) {
  if (typeof nome === 'string') {
    console.log(nome.toUpperCase());
  } else {
    console.log(nome);
  }
});

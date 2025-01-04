//Types em objetos
function resumo(usuario : {nome: string, idade: number}) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

//Implementação da função
let u = {
  nome: 'Raiane',
 // idade: 22,
};
console.log(resumo(u));

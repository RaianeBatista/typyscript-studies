//Usando types no retorno de uma função
function firstLetterUppercase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();
 return firstLetter + name.substring(1);
}

let nome = firstLetterUppercase('raiane');

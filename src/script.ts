type VerdadeiroOuFalso = true | false


function temNome(nome: string): boolean {
  if (nome !== '') {
    return true;
  } else {
    return false;
  }
}

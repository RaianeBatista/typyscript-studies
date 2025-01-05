type VerdadeiroOuFalso = true | false;

function temNome(nome: string): VerdadeiroOuFalso {
  if (nome !== '') {
    return true;
  } else {
    return false;
  }
}

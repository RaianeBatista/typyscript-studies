// Retorno void => quando a dunção nao tem retorno
type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
  return 'bla bla';
};

let retorno = algo();

const blabla = (): void => {
  // return 12;
};

function removerElemento(el: HTMLElement): void {
  //processo de remoção do elemento
  //  el.remove();
  if (el.classList) {
    return;
  }
  el.remove();
}

//removerElemento(document.getElementById('teste'));
const elemento = document.getElementById('teste');
if (elemento) {
  removerElemento(elemento);
}

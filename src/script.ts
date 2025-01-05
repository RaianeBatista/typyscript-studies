function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {
  return `<div style='text-align: ${alinhamento}>${texto}</div>`;
}

mostrarTexto('Raiane', 'left');
mostrarTexto('Raiane', 'right');
mostrarTexto('Raiane', 'blabla');

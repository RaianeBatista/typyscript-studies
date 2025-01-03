let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1, n2) {
  return n1 + n2;
}

botao.addEventListener('click', function () {
  res.innerHTML = calcular(numero1.value, numero2.value);
});

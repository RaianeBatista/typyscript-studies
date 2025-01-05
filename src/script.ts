//Union Types (múltiplos types)
// let idade: string | number = 90;

// idade = document.getElementById('idade')?.innerHTML;

function mostrarIdade(idade: string | number) {
  if (typeof idade=== 'string') {
    console.log('mInha idade é: ' + idade);
  } else {
    console.log(idade)
  }
}

mostrarIdade(90);
mostrarIdade('90');

type Opcoes = {
  width: number;
  height: number;
};

function configurar(props: Opcoes | 'auto') {}

configurar({ width: 100, height: 200 });
configurar('auto');
configurar('automatico');

/*
  Referências:
  - https://www.w3schools.com/
  - https://stackoverflow.com/questions/880512/prevent-text-selection-after-double-click
  - https://eslint.org/docs/rules/
*/

const listaTarefas = document.querySelector('#lista-tarefas');

// Confere se algum elemento já foi selecionado (tem a classe 'selecionado'), se houver remove a classe, em qualquer caso seleciona o item clicado.
function selecionaTarefa(event) {
  const antigoSelecionado = document.querySelector('.selecionado');
  // event.target.classList.add('selecionado'); fica melhor antes, mas não passa o requisito.
  if (antigoSelecionado !== null) {
    antigoSelecionado.classList.remove('selecionado');
  }
  event.target.classList.add('selecionado'); // adicionando a class aqui não dá a opção para a pessoa usuária deselecionar.
}

// Se o elemento não estava marcado como 'completed' passa a ser e se era marcado deixa de ser.
function tachaTarefa(event) {
  event.target.classList.toggle('completed');
}

// Cria elemento li com texto, classe e listeners e o exibe.
function exibeTarefa(tarefaText, tarefaClass) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = tarefaText;
  novaTarefa.className = tarefaClass;
  novaTarefa.addEventListener('click', selecionaTarefa);
  novaTarefa.addEventListener('dblclick', tachaTarefa);
  listaTarefas.appendChild(novaTarefa);
}

// Coleta texto do input e limpa entrada, chama função para exibir tarefa.
function adicionaTarefa() {
  const textInput = document.querySelector('#texto-tarefa');
  const tarefaText = textInput.value;
  textInput.value = '';
  exibeTarefa(tarefaText, '');
}

// Coleta todas as lis e remove cada uma.
function apagaTudo() {
  document.querySelectorAll('li').forEach((tarefa) => {
    tarefa.remove();
  });
}

// Coleta todos elementos 'completed' e remove cada uma.
function apagaFinalizados() {
  document.querySelectorAll('.completed').forEach((tarefa) => {
    tarefa.remove();
  });
}

// Coleta o elemento 'selecionado' e o remove.
function apagaSelecionado() {
  document.querySelector('.selecionado').remove();
}

// Coleta todas as lis, procura em que posição está o elemento selecionado, no irmão anterior coloca o item selecionado acima.
function moverCima() {
  const tarefas = document.querySelectorAll('li');
  let posicaoSelecionado = 0;
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('selecionado')) {
      posicaoSelecionado = i;
      break;
    }
  }
  if (tarefas[posicaoSelecionado - 1] === undefined) {
    return;
  }
  tarefas[posicaoSelecionado - 1].before(tarefas[posicaoSelecionado]);
}

// Coleta todas as lis, procura em que posição está o elemento selecionado, no irmão posterior coloca o item selecionado abaixo.
function moverBaixo() {
  const tarefas = document.querySelectorAll('li');
  let posicaoSelecionado = -1;
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('selecionado')) {
      posicaoSelecionado = i;
      break;
    }
  }
  if (tarefas[posicaoSelecionado + 1] === undefined) {
    return;
  }
  tarefas[posicaoSelecionado + 1].after(tarefas[posicaoSelecionado]);
}

// Cria lista de objetos com texto e classes dos elementos atualmente na lista e salva no localStorage.
function salva() {
  const listaSalva = [];
  document.querySelectorAll('li').forEach((tarefa) => {
    const tarefaText = tarefa.innerText;
    const tarefaClass = tarefa.className;
    listaSalva.push({
      tarefaText,
      tarefaClass,
    });
  });
  localStorage.setItem('listaSalva', JSON.stringify(listaSalva));
}

/* Arquitetura de armazenamento das tarefas

  listaSalva = [
    {
      selecionado: boolean,
      completed: boolean,       X rascunho
      tarefa: string,
    },
    { OU
      tarefa: string,       <----
      className: string,    <---- modelo utilizado
    }
  ]
*/

// Se não houver nada pra ser carregado cria arquivo vazio no localStorage, se houver alguma lista salva exibe cada elemento salvo.
function carregaLista() {
  if (localStorage.getItem('listaSalva') === null) {
    localStorage.setItem('listaSalva', JSON.stringify([]));
  }
  const listaSalva = JSON.parse(localStorage.getItem('listaSalva'));
  listaSalva.forEach((tarefa) => {
    exibeTarefa(tarefa.tarefaText, tarefa.tarefaClass);
  });
}

// Adiciona escutadores para os botões ao carregar a página.
function carregaBotoes() {
  const btnAdicionar = document.querySelector('#criar-tarefa');
  btnAdicionar.addEventListener('click', adicionaTarefa);
  const btnApagaTudo = document.querySelector('#apaga-tudo');
  btnApagaTudo.addEventListener('click', apagaTudo);
  const btnFinaliza = document.querySelector('#remover-finalizados');
  btnFinaliza.addEventListener('click', apagaFinalizados);
  const btnSalva = document.querySelector('#salvar-tarefas');
  btnSalva.addEventListener('click', salva);
  const btnCima = document.querySelector('#mover-cima');
  btnCima.addEventListener('click', moverCima);
  const btnBaixo = document.querySelector('#mover-baixo');
  btnBaixo.addEventListener('click', moverBaixo);
  const btnRemove = document.querySelector('#remover-selecionado');
  btnRemove.addEventListener('click', apagaSelecionado);
}

window.onload = () => {
  carregaLista();
  carregaBotoes();
};

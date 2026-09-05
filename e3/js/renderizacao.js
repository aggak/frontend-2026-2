export function criarCartao(tarefa) {
  const titulo = document.createElement('h3');
  titulo.textContent = tarefa.titulo;

  const cartao = document.createElement('article');
  const topo = document.createElement('div');
  topo.className = 'cartao-topo';
  topo.append(titulo);
  cartao.append(topo);

  const prioridade = document.createElement('p');
  prioridade.className = 'prioridade';
  prioridade.textContent = tarefa.prioridade;
  topo.append(prioridade);

  const projeto = document.createElement('p');
  projeto.textContent = tarefa.projeto;
  cartao.append(projeto);

  const responsavel = document.createElement('p');
  responsavel.textContent = tarefa.responsavel;
  cartao.append(responsavel);

  const prazo = document.createElement('p');
  prazo.className = 'prazo';
  prazo.textContent = tarefa.prazo;
  cartao.append(prazo);

  return cartao;
}

export function renderizarTarefas(tarefas, quadro) {
  const listas = quadro.querySelectorAll('[data-lista-status]');
  for (const lista of listas) {
    const status = lista.dataset.listaStatus;
    const tarefasDoStatus = tarefas.filter(
      (tarefa) => tarefa.status === status,
    );
  }
}

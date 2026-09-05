function criarCartao(tarefa) {
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

  return cartao;
}

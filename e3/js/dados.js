function criarCartao(tarefa) {
  const cartao = document.createElement('article');
  cartao.className = 'cartao';
  cartao.dataset.tarefaId = tarefa.id;

  const titulo = document.createElement('h3');
  titulo.textContent = tarefa.titulo;

  cartao.append(titulo);
  return cartao;
}

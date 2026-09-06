import { renderizarTarefas } from "./renderizacao.js";
import { carregarTarefas } from "./api.js";
import { renderizarEstado } from "./estados.js";

const quadro = document.querySelector(".quadro");

async function iniciar() {
  renderizarEstado("carregando", []);
  const tarefas = await carregarTarefas();
  if (tarefas.length === 0) {
    renderizarEstado("vazio", tarefas);
  } else {
    renderizarEstado("sucesso", tarefas);
  }
}
iniciar();

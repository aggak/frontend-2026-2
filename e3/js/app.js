import { renderizarTarefas } from "./renderizacao.js";
import { carregarTarefas } from "./api.js";
import { renderizarEstado } from "./estados.js";

const quadro = document.querySelector(".quadro");

async function iniciar() {
  renderizarEstado("carregando", []);
  const tarefas = await carregarTarefas();
  renderizarEstado("sucesso", tarefas);
}
iniciar();

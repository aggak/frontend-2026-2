import { carregarTarefas } from "./api.js";
import { renderizarEstado } from "./estados.js";

async function iniciar() {
  renderizarEstado("carregando", []);

  try {
    const tarefas = await carregarTarefas();
    if (tarefas.length === 0) {
      renderizarEstado("vazio", tarefas);
    } else {
      renderizarEstado("sucesso", tarefas);
    }
  } catch (erro) {
    if (erro.name === "TypeError") {
      erro.message =
        "Não foi possível carregar as tarefas. Verifique sua conexão.";
    } else if (erro.name === "SyntaxError") {
      erro.message = "O arquivo de tarefas contém um JSON inválido.";
    }
    renderizarEstado("erro", erro);
  }
}

iniciar();

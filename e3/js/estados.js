import { renderizarTarefas } from "./renderizacao.js";

const mensagem = document.querySelector("[data-estado]");

export function renderizarEstado(estado, dados) {
  if (!mensagem) {
    throw new Error("Elemento de status nao encontrado no HTML.");
  }

  if (estado === "carregando") {
    mensagem.textContent = "Carregando tarefas...";
  }

  if (estado === "sucesso") {
    const quadro = document.querySelector(".quadro");
    if (!quadro) {
      throw new Error("Quadro nao encontrado no HTML.");
    }
    renderizarTarefas(dados, quadro);
    mensagem.textContent = "Tarefas carregadas: " + dados.length;
  }
  if (estado === "vazio") {
    mensagem.textContent = "Nenhuma tarefa encontrada.";
  }
  if (estado === "erro") {
    mensagem.textContent = dados.message;
  }
}

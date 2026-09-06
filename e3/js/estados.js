const mensagem = document.querySelector("[data-estado]");

export function renderizarEstado(estado, dados) {
  if (!mensagem) {
    throw new Error("Elemento de status nao encontrado no HTML.");
  }
  if (estado === "carregando") {
    mensagem.textContent = "Carregando tarefas...";
  }
}

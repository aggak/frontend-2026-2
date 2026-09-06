import { criarCartao, renderizarTarefas } from "./renderizacao.js";
import { renderizarEstado } from "./estados.js";

const quadro = document.querySelector(".quadro");
renderizarEstado("carregando", []);

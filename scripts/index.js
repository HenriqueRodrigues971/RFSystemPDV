const div_recuperar = document.getElementById("secao_recuperar");
const text_recuperar = document.getElementById("text_recuperar");
const text_fechar = document.getElementById("text_fechar");

function adicionarEventoSeta() {
    div_recuperar.classList.add("evento_seta");
    text_recuperar.innerHTML = "";
}

function removerEventoSeta() {
    div_recuperar.classList.remove("evento_seta");
    div_recuperar.classList.add("secao_recuperar");
    text_recuperar.innerHTML = "Rescuperar Acesso";
}

text_recuperar.addEventListener("click", adicionarEventoSeta);
text_fechar.addEventListener("click", removerEventoSeta);

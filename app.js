let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 1) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];
  amigos.splice(indiceSorteado, 1);
  atualizarLista();

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = amigoSorteado;

  if (amigos.length === 0) {
    alert("Todos os amigos foram sorteados!");
  }
}

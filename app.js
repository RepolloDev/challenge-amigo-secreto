let amigos = [];

function obtenerElemento(id) {
  // Obtener un elemento de la página
  const elemento = document.getElementById(id);
  return elemento;
}

function limpiarElemento(id) {
  // Limpiar el contenido de un elemento
  const elemento = obtenerElemento(id);
  elemento.innerHTML = "";
}

function obtenerEntrada(id) {
  // Obtener el valor ingresado en un campo de texto
  const elemento = obtenerElemento(id);
  const valor = elemento.value;
  return valor;
}

function limpiarEntrada(id) {
  // Limpiar el valor ingresado en un campo de texto
  const elemento = obtenerElemento(id);
  elemento.value = "";
}

function actualizarAmigos() {
  // Obtener el elemento donde se mostrarán los amigos
  const idLista = "listaAmigos";
  const lista = obtenerElemento(idLista);

  // Limpiar la lista de amigos
  limpiarElemento(idLista);

  // Agregar todos los amigos a la lista
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function agregarAmigo() {
  // Obtener el amigo ingresado
  const idEntrada = "amigo";
  const amigo = obtenerEntrada(idEntrada);

  // Verificar si el campo está vacío
  if (amigo === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  // ✨ Verificar si el amigo ya fue agregado
  if (amigos.includes(amigo)) {
    alert("Este amigo ya fue agregado");
    limpiarEntrada(idEntrada);
    return;
  }

  // Agregar amigo a la lista y limpiar la entrada
  amigos.push(amigo);
  limpiarEntrada(idEntrada);

  // Actualizar la lista de amigos
  actualizarAmigos();
}

function sortearAmigo() {
  // Verificar si hay amigos para sortear
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  // Sortear un amigo al azar
  const index = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[index];

  // Mostrar el amigo sorteado
  const salida = obtenerElemento("resultado");
  salida.innerHTML = amigoSorteado;
}

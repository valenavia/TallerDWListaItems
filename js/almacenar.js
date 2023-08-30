let item = document.getElementById("item");
let agregar = document.getElementById("agregar");
let limpiar = document.getElementById("limpiar");
let contenedor = document.getElementById("contenedor");
let listaObjetos = [];
let listaTemporal = [];

document.addEventListener("DOMContentLoaded", () => {
  listaObjetos = localStorage.getItem("datos").split(",");
  listaObjetos.forEach((objeto) => {
    contenedor.innerHTML += "<li>" + objeto + "</li>";
  });
});

agregar.addEventListener("click", () => {
  listaTemporal = listaObjetos;
  listaTemporal.push(item.value);
  localStorage.setItem("datos", listaTemporal);
  listaObjetos = localStorage.getItem("datos").split(",");
  contenedor.innerHTML +=
    '<li class = "lista">' + listaObjetos[listaObjetos.length - 1] + "</li>";
  item.value = "";
});

limpiar.addEventListener("click", () => {
  localStorage.removeItem("datos");
  listaObjetos = [];
  contenedor.innerHTML = " ";
});

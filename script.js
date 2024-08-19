const lista = document.getElementById("listaPersonas");
const buscador = document.getElementById("buscador");
const personas = ["Juan Pérez", "María López", "Carlos García", "Ana Rodríguez", "Pedro Sánchez"];

buscador.addEventListener("input", () => {
    lista.innerHTML = "";
    let filtro = buscador.value;

    let personasFiltradas = personas.filter(element => {
        return element.startsWith(filtro);
    });
    personasFiltradas.forEach(element => {
        lista.innerHTML += `<li>${element}</li>`;
    });
})
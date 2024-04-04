const tom = document.getElementById("tomate");
const tomedit = document.getElementById("queso");

tom.addEventListener("click", () => {
    tom.classList.add("fondo-rojo-seleccion")
})
tom.addEventListener("auxclick", () => {
    tom.classList.remove("fondo-rojo-seleccion")
})
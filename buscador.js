 const buscador = document.getElementById('buscador');
const tabla = document.getElementById('lista-empleados');
const filas = tabla.querySelectorAll('tr');

buscador.addEventListener('input',function() {
const texto = buscador.value.toLowerCase();
 console.log(texto);

for (const fila of filas) {
    const contenido = fila.textContent.toLowerCase();
if (contenido.includes(texto)){
    fila.style.display = "";

} else {
    fila.style.display = "none";
}
}

});
function Boton() {
    nuevoElemento = document.createElement('p');
    nuevoElemento.innerText = 'Nuevo texto';
    contenedor = document.getElementById('contenedorElementos');
    contenedor.appendChild(nuevoElemento);
}
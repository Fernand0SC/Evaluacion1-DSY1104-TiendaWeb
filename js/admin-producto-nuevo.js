const formulario = document.getElementById('formNuevoProducto');
const inputNombre = document.getElementById('nombreProd');
const inputPrecio = document.getElementById('precioProd');
const selectCategoria = document.getElementById('categoriaProd');

const errNombre = document.getElementById('errNombre');
const errPrecio = document.getElementById('errPrecio');
const errCategoria = document.getElementById('errCategoria');
const mensajeExito = document.getElementById('mensajeExito');

function limpiarErrores() {
    errNombre.style.display = 'none';
    errPrecio.style.display = 'none';
    errCategoria.style.display = 'none';
    mensajeExito.style.display = 'none';
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    
    limpiarErrores();
    let formularioValido = true;

    if (inputNombre.value.trim() === '') {
        errNombre.style.display = 'block';
        formularioValido = false;
    }

    const valorPrecio = inputPrecio.value.trim();

    if (valorPrecio === '') {
        errPrecio.innerText = 'El precio no puede estar vacío.';
        errPrecio.style.display = 'block';
        formularioValido = false;
    } else if (isNaN(valorPrecio)) { 
        errPrecio.innerText = 'Error: Solo se permiten números.';
        errPrecio.style.display = 'block';
        formularioValido = false;
    }

    if (selectCategoria.value === '') {
        errCategoria.style.display = 'block';
        formularioValido = false;
    }

    if (formularioValido) {
        mensajeExito.style.display = 'block';
        formulario.reset(); 
    }
});
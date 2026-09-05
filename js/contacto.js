function validarFormulario() {
    
    let textoNombre = document.getElementById('nombre').value;
    let textoCorreo = document.getElementById('correo').value.toLowerCase();
    let textoMensaje = document.getElementById('mensaje').value

    let parrafoAlerta = document.getElementById('mensajeError');

    
    
    if (textoNombre == "") {
        parrafoAlerta.textContent = "Sugerencia: Falta escribir tu nombre.";
        parrafoAlerta.style.color = "red";
    } 
    else if (textoCorreo == "") {
        parrafoAlerta.textContent = "Sugerencia: Falta escribir tu correo.";
        parrafoAlerta.style.color = "red";
    } 
    else if (textoCorreo.includes("@") == false || textoCorreo.includes(".com") == false) {
        parrafoAlerta.textContent = "Error: El correo debe llevar un @ y terminar en '.com' ";
        parrafoAlerta.style.color = "red";
    }else if (textoMensaje == ""){
        parrafoAlerta.textContent = "Sugerencia: Falta escribir un mensaje.";
        parrafoAlerta.style.color = "red";

    }else {
        parrafoAlerta.textContent = "¡Formulario validado con éxito!";
        parrafoAlerta.style.color = "green";
    }
}
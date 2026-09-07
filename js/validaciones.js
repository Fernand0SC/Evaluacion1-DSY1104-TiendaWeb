document.addEventListener("DOMContentLoaded", function() {
    const formularioRegistro = document.getElementById("formularioRegistro");

    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit", function(evento) {
            evento.preventDefault(); 
            let esValido = true;

            const run = document.getElementById("campoRun").value.trim();
            const errorRun = document.getElementById("errorRun");
            const regexRun = /^[0-9]{7,8}[0-9Kk]$/;
            
            if (!run) {
                errorRun.textContent = "El RUN es requerido."; errorRun.style.display = "block"; esValido = false;
            } else if (!regexRun.test(run)) {
                errorRun.textContent = "El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion."; errorRun.style.display = "block"; esValido = false;
            } else {
                errorRun.style.display = "none";
            }

            const nombre = document.getElementById("campoNombre").value.trim();
            const errorNombre = document.getElementById("errorNombre");
            
            if (!nombre) {
                errorNombre.textContent = "El nombre es requerido."; errorNombre.style.display = "block"; esValido = false;
            } else if (nombre.length > 50) {
                errorNombre.textContent = "El nombre no puede tener más de 50 caracteres."; errorNombre.style.display = "block"; esValido = false;
            } else {
                errorNombre.style.display = "none";
            }

            const correo = document.getElementById("campoCorreo").value.trim();
            const errorCorreo = document.getElementById("errorCorreo");
            const correoValido = correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com");
            
            if (!correo) {
                errorCorreo.textContent = "El correo es requerido."; errorCorreo.style.display = "block"; esValido = false;
            } else if (correo.length > 100) {
                errorCorreo.textContent = "El correo no puede tener más de 100 caracteres."; errorCorreo.style.display = "block"; esValido = false;
            } else if (!correoValido) {
                errorCorreo.textContent = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com."; errorCorreo.style.display = "block"; esValido = false;
            } else {
                errorCorreo.style.display = "none";
            }

            const password = document.getElementById("campoPassword").value.trim();
            const errorPassword = document.getElementById("errorPassword");

            if (!password) {
                errorPassword.textContent = "La contraseña es requerida."; errorPassword.style.display = "block"; esValido = false;
            } else if (password.length < 4 || password.length > 10) {
                errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres."; errorPassword.style.display = "block"; esValido = false;
            } else {
                errorPassword.style.display = "none";
            }

            if (esValido) {
                alert("¡Registro validado y exitoso!"); 
                formularioRegistro.reset(); 
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const formularioRegistro = document.getElementById("formularioRegistro");

    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit", function(evento) {
            evento.preventDefault(); 

            // Capturamos los valores de los inputs usando las clases
            const run = document.getElementById("campoRun").value.trim();
            const correo = document.getElementById("campoCorreo").value.trim();
            const password = document.getElementById("campoPassword").value.trim();

            // 1. Validar RUN: sin puntos ni guion, entre 7 y 9 caracteres (ej: 19011022K)
            const regexRun = /^[0-9]{7,8}[0-9Kk]$/;
            if (!regexRun.test(run)) {
                alert("Error: El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion");
                return;
            }

            const correoValido = correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com");
            if (!correoValido) {
                alert("Error: El correo electrónico debe pertenecer a los dominios permitidos (@duoc.cl, @profesor.duoc.cl o @gmail.com).");
                return;
            }

            // 3. Validar Contraseña: entre 4 y 10 caracteres
            if (password.length < 4 || password.length > 10) {
                alert("Error: La contraseña debe tener una longitud de entre 4 y 10 caracteres.");
                return;
            }

            // Si todo pasa las validaciones con éxito
            alert("¡Registro validado y exitoso");
            formularioRegistro.submit(); // Aquí se enviaría el formulario
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const formNuevoUsuario = document.getElementById("formularioNuevoUsuario");

    if (formNuevoUsuario) {
        formNuevoUsuario.addEventListener("submit", function(evento) {
            evento.preventDefault(); 
            let esValido = true;

            const run = document.getElementById("nuevoRun").value.trim();
            const errorRun = document.getElementById("errorNuevoRun");
            const regexRun = /^[0-9]{7,8}[0-9Kk]$/;
            
            if (!run) {
                errorRun.textContent = "El RUN es requerido."; errorRun.style.display = "block"; esValido = false;
            } else if (!regexRun.test(run)) {
                errorRun.textContent = "El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion."; errorRun.style.display = "block"; esValido = false;
            } else {
                errorRun.style.display = "none";
            }

            const nombre = document.getElementById("nuevoNombre").value.trim();
            const errorNombre = document.getElementById("errorNuevoNombre");
            
            if (!nombre) {
                errorNombre.textContent = "El nombre es requerido."; errorNombre.style.display = "block"; esValido = false;
            } else if (nombre.length > 50) {
                errorNombre.textContent = "El nombre no puede superar los 50 caracteres."; errorNombre.style.display = "block"; esValido = false;
            } else {
                errorNombre.style.display = "none";
            }

            const correo = document.getElementById("nuevoCorreo").value.trim();
            const errorCorreo = document.getElementById("errorNuevoCorreo");
            const correoValido = correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com");
            
            if (!correo) {
                errorCorreo.textContent = "El correo es requerido."; errorCorreo.style.display = "block"; esValido = false;
            } else if (correo.length > 100) {
                errorCorreo.textContent = "El correo no puede tener más de 100 caracteres."; errorCorreo.style.display = "block"; esValido = false;
            } else if (!correoValido) {
                errorCorreo.textContent = "Dominios válidos: @duoc.cl, @profesor.duoc.cl o @gmail.com."; errorCorreo.style.display = "block"; esValido = false;
            } else {
                errorCorreo.style.display = "none";
            }

            const password = document.getElementById("nuevoPassword").value.trim();
            const errorPassword = document.getElementById("errorNuevoPassword");

            if (!password) {
                errorPassword.textContent = "La contraseña es requerida."; errorPassword.style.display = "block"; esValido = false;
            } else if (password.length < 4 || password.length > 10) {
                errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres."; errorPassword.style.display = "block"; esValido = false;
            } else {
                errorPassword.style.display = "none";
            }

            const rol = document.getElementById("nuevoRol").value;
            const errorRol = document.getElementById("errorNuevoRol");

            if (!rol) {
                errorRol.textContent = "Debe seleccionar un rol."; errorRol.style.display = "block"; esValido = false;
            } else {
                errorRol.style.display = "none";
            }

            if (esValido) {
                alert("¡Usuario administrador guardado con éxito!"); 
                formNuevoUsuario.reset(); 
            }
        });
    }

    const formEditarUsuario = document.getElementById("formularioEditarUsuario");

    if (formEditarUsuario) {
        formEditarUsuario.addEventListener("submit", function(evento) {
            evento.preventDefault(); 
            let esValido = true;

            const nombre = document.getElementById("editarNombre").value.trim();
            const errorNombre = document.getElementById("errorEditarNombre");
            
            if (!nombre) {
                errorNombre.textContent = "El nombre es requerido."; errorNombre.style.display = "block"; esValido = false;
            } else if (nombre.length > 50) {
                errorNombre.textContent = "El nombre no puede superar los 50 caracteres."; errorNombre.style.display = "block"; esValido = false;
            } else {
                errorNombre.style.display = "none";
            }

            const correo = document.getElementById("editarCorreo").value.trim();
            const errorCorreo = document.getElementById("errorEditarCorreo");
            const correoValido = correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com");
            
            if (!correo) {
                errorCorreo.textContent = "El correo es requerido."; errorCorreo.style.display = "block"; esValido = false;
            } else if (correo.length > 100) {
                errorCorreo.textContent = "El correo no puede tener más de 100 caracteres."; errorCorreo.style.display = "block"; esValido = false;
            } else if (!correoValido) {
                errorCorreo.textContent = "Dominios válidos: @duoc.cl, @profesor.duoc.cl o @gmail.com."; errorCorreo.style.display = "block"; esValido = false;
            } else {
                errorCorreo.style.display = "none";
            }

            const password = document.getElementById("editarPassword").value.trim();
            const errorPassword = document.getElementById("errorEditarPassword");

            if (password !== "") { 
                if (password.length < 4 || password.length > 10) {
                    errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres."; errorPassword.style.display = "block"; esValido = false;
                } else {
                    errorPassword.style.display = "none";
                }
            } else {
                errorPassword.style.display = "none"; 
            }

            const rol = document.getElementById("editarRol").value;
            const errorRol = document.getElementById("errorEditarRol");

            if (!rol) {
                errorRol.textContent = "Debe seleccionar un rol."; errorRol.style.display = "block"; esValido = false;
            } else {
                errorRol.style.display = "none";
            }

            if (esValido) {
                alert("¡Usuario actualizado con éxito!"); 
            }
        });
    }
});
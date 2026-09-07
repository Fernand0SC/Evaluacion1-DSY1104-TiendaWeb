document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    const correoInput = document.getElementById('correo').value;
    const errorCorreo = document.getElementById('errorCorreo');
    const regexCorreo = /^[a-zA-Z0-9._-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    if (!correoInput) {
        errorCorreo.textContent = "El correo es requerido."; errorCorreo.style.display = "block"; isValid = false;
    } else if (correoInput.length > 100) { 
        errorCorreo.textContent = "El correo no puede tener más de 100 caracteres."; errorCorreo.style.display = "block"; isValid = false;
    } else if (!regexCorreo.test(correoInput)) {
        errorCorreo.textContent = "Solo correos @duoc.cl, @profesor.duoc.cl o @gmail.com."; errorCorreo.style.display = "block"; isValid = false;
    } else {
        errorCorreo.style.display = "none";
    }

    const passwordInput = document.getElementById('password').value;
    const errorPassword = document.getElementById('errorPassword');

    if (!passwordInput) {
        errorPassword.textContent = "La contraseña es requerida."; errorPassword.style.display = "block"; isValid = false;
    } else if (passwordInput.length < 4 || passwordInput.length > 10) {
        errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres."; errorPassword.style.display = "block"; isValid = false;
    } else {
        errorPassword.style.display = "none";
    }

    if (isValid) {
        window.location.href = "../admin/admin-home.html"; // Redirige al panel de administración
    }
});
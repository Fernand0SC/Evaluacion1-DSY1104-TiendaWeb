document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault(); 
    let isValid = true;

    const codigo = document.getElementById('codigo').value;
    if (codigo.length < 3) { document.getElementById('errCodigo').style.display = 'block'; isValid = false; } 
    else { document.getElementById('errCodigo').style.display = 'none'; }

    const nombre = document.getElementById('nombre').value;
    if (!nombre) { document.getElementById('errNombre').style.display = 'block'; isValid = false; } 
    else { document.getElementById('errNombre').style.display = 'none'; }

    const precio = document.getElementById('precio').value;
    if (!precio || parseFloat(precio) < 0) { document.getElementById('errPrecio').style.display = 'block'; isValid = false; } 
    else { document.getElementById('errPrecio').style.display = 'none'; }

    const stock = document.getElementById('stock').value;
    if (!stock || parseInt(stock) < 0) { document.getElementById('errStock').style.display = 'block'; isValid = false; } 
    else { document.getElementById('errStock').style.display = 'none'; }

    const categoria = document.getElementById('categoria').value;
    if (!categoria) { document.getElementById('errCategoria').style.display = 'block'; isValid = false; } 
    else { document.getElementById('errCategoria').style.display = 'none'; }

    if (isValid) { alert("Producto validado y guardado correctamente."); }
});
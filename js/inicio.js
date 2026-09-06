function agregarAlCarrito(nombre, precio) {

    let carrito = [];
    const memoria = localStorage.getItem('miCarrito');
    if (memoria) {
        carrito = JSON.parse(memoria);
    }

    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
        productoExistente.subtotal = productoExistente.cantidad * productoExistente.precio;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1,
            subtotal: precio
        });
    }

    localStorage.setItem('miCarrito', JSON.stringify(carrito));

    alert('¡Producto añadido al carrito con éxito!');
}
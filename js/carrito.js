document.addEventListener('DOMContentLoaded', () => {
    pintarCarrito();
});

function pintarCarrito() {
    const contenedorCarrito = document.getElementById('contenedorCarrito');
    const precioTotalElemento = document.getElementById('precioTotal');
    
    // 1. Leer el localStorage de forma segura
    let carrito = [];
    try {
        const memoria = localStorage.getItem('miCarrito');
        if (memoria) {
            carrito = JSON.parse(memoria);
        }
    } catch (error) {
        carrito = [];
    }

    // 2. Comprobar si está vacío
    if (!carrito || carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p style='text-align:center;'>Tu carrito está vacío.</p>";
        precioTotalElemento.textContent = "0";
        return; 
    }

    let totalPagar = 0;
    contenedorCarrito.innerHTML = ""; 

    // 3. Recorrer los productos y crear el HTML por cada uno
    carrito.forEach(producto => {
        totalPagar += producto.subtotal;

        const itemHTML = `
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 10px 0;">
                <div>
                    <h4 style="margin: 0;">${producto.nombre}</h4>
                    <p style="margin: 0; color: gray;">Precio unitario: $${producto.precio.toLocaleString('es-CL')} | Cantidad: ${producto.cantidad}</p>
                </div>
                <div style="font-weight: bold; font-size: 18px;">
                    $${producto.subtotal.toLocaleString('es-CL')}
                </div>
            </div>
        `;
        
        contenedorCarrito.innerHTML += itemHTML;
    });

    // 4. Mostrar el total final
    precioTotalElemento.textContent = totalPagar.toLocaleString('es-CL');
}

// Función para vaciar el carrito dejando un arreglo vacío (sin romper la memoria)
function vaciarCarrito() {
    if(confirm("¿Estás seguro de que quieres vaciar tu carrito?")) {
        localStorage.setItem('miCarrito', JSON.stringify([])); 
        pintarCarrito(); 
    }
}
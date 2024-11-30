import '../EstilosComponentes/AgregarCarrito.css'

const AgregarCarrito = () => {

    const agregarCarrito = (e) => {
        let padre = e.target.parentElement;
        let cantidad = padre.querySelector('.cantidadArticulos').textContent;
        let singularPlural = cantidad > 1 ? 'Articulos' : 'Articulo';
        let precio = document.querySelector('.precioArticulo').textContent;
        alert(`Agregaste al carrito ${cantidad}${singularPlural} con un valor de ${precio} cada uno.`)
        padre.querySelector('.cantidadArticulos').textContent = '0';
    }
    return (
        <>
            <button className="btnCarrito" onClick={agregarCarrito}>
                Agregar al carrito
            </button>
        </>
    )
}

export default AgregarCarrito
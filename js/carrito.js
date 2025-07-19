function Agregar(producto){
    const memoria = localStorage.getItem('ropa')
    console.log(memoria)
    if(!memoria){
        const nuevoProducto = producto
        nuevoProducto.cantidad = 1;
        localStorage.setItem('ropa', JSON.stringify([nuevoProducto]))
    }
    
}
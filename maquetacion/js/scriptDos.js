// Cada producto que vende el super es creado con esta clase
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock = 10) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];

// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vacío
    constructor() {
        this.precioTotal = 0;
        this.productos = [];
        this.categorias = [];
    }

    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} ${sku}`);

        try {
            // Busco el producto en la "base de datos"
            const producto = await findProductBySku(sku);

            //console.log("Producto encontrado", producto);

            // Verificar si el producto ya está en el carrito
            const productoEnCarrito = this.productos.find(producto => producto.sku === sku);

            if (productoEnCarrito) {
                // El producto ya está en el carrito, sumar la cantidad
                productoEnCarrito.cantidad += cantidad;

                console.log("Agregar: ",cantidad," Und // Stock= ",productoEnCarrito.cantidad);
            } else {
                // Crear un nuevo producto en el carrito
                const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
                this.productos.push(nuevoProducto);
                this.categorias.push(producto.categoria);
                console.log("Crear un nuevo producto");
                console.log("Agregar: ",cantidad," Und // Stock= ",cantidad);
            }

            this.precioTotal += producto.precio * cantidad;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * función que elimina @{cantidad} de productos con @{sku} del carrito
     * @returns {Promise} Una promesa que resuelve cuando se elimina el producto del carrito
     */
    eliminarProducto(sku, cantidad) {
        return new Promise((resolve, reject) => {
            const productoEnCarrito = this.productos.find(producto => producto.sku === sku);
            console.log(productoEnCarrito)
            if (productoEnCarrito) {
                if (cantidad < productoEnCarrito.cantidad) {
                    // Restar la cantidad del producto en el carrito
                    productoEnCarrito.cantidad -= cantidad;
                    this.precioTotal -= productoEnCarrito.precio * cantidad;
                    console.log("Descontar: ",cantidad," Und // Stock= ",productoEnCarrito.cantidad);
                } else {
                    // Eliminar el producto del carrito
                    const index = this.productos.indexOf(productoEnCarrito);
                    this.productos.splice(index, 1);
                    this.categorias.splice(index, 1);
                    this.precioTotal -= productoEnCarrito.precio * productoEnCarrito.cantidad;
                    console.log("Eliminar el producto del carrito");
                    console.log("Descontar: ",cantidad," Und // Stock= 0 ");
                }

                resolve();
            } else {
                reject(new Error("El producto no existe en el carrito."));
            }
        });
    }
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

}
// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
}

console.log("------------------------");
console.log("Productos en el carrito:");
productosDelSuper.forEach(producto => {
    console.log(`SKU: ${producto.sku}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Categoría: ${producto.categoria}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Stock: ${producto.stock}`);
    console.log("------------------------");
});

const carrito = new Carrito();
//carrito.agregarProducto('WE328NJ', 2);
//carrito.eliminarProducto('WE328NJ', 2);
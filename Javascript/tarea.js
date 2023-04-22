//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6 y para valor 3

function piramideDeNumeros(num){
    let piramide = '';
    for (let i = 1; i <= num; i++) {
        piramide += i;
        console.log(piramide);
    }
}

piramideDeNumeros(6);
piramideDeNumeros(3);


// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos



function unificarArrays(array1, array2) {
    let nuevoArray = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) { // si el elemento coincide
          nuevoArray.push(array1[i]); // añade el elemento al arreglo de coincidencias
          break; // sale del ciclo interno
        }
      }
    }
    console.log (nuevoArray); // devuelve el arreglo de coincidencias
  }

  unificarArrays(['rojo', 'azul', 'amarillo'],['blanco', 'negro', 'rojo']);
  unificarArrays([4, 3, true, 'manzana'],['pera', 3, false, true, 3, true]);

  

 /*3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado. 
*/



class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }

    agregarProducto(nombre, precio, unidades = 1) {
        let productoRepetido = this.productos.find( (producto) => producto.nombre === nombre);

        if (productoRepetido) {
            console.log(`El producto "${nombre}" ya existe en el carrito`)
        }
        else {
            let producto = new Producto(nombre, precio, unidades);
            this.productos.push(producto);
            this.calcularMontoTotal();
        }        
        
    }

    calcularMontoTotal(){
        this.montoTotal = this.productos.reduce((total, producto) => total + producto.calcularPrecioTotal(), 0);
    }
    }

class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }

    calcularPrecioTotal() {
        return this.precio * this.unidades;
    }
  }

  let carrito = new Carrito();

  carrito.agregarProducto('Leche', 10, 2);
  carrito.agregarProducto('Azucar', 5, 1);

  console.log(carrito);

  carrito.agregarProducto('Azucar', 5, 1);

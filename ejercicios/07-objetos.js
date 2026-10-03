// ============================================================
// Ejercicio 07 · Objetos
// ============================================================
// Cada producto del menú se va a guardar como un objeto.
//
// Crea la función crearProducto(nombre, precio, stock) que retorne
// un objeto con exactamente estas 4 propiedades:
//   - nombre
//   - precio
//   - stock
//   - disponible → true si stock es mayor que 0, si no false
//
// Ejemplo:
//   crearProducto("Pandebono", 2500, 40)
//   → { nombre: "Pandebono", precio: 2500, stock: 40, disponible: true }
// ============================================================

function crearProducto(nombre, precio, stock) {
  
  if(stock>0){
    let producto = {
      nombre: nombre,
      precio: precio,
      stock: stock,
      disponible: true
    }
    return producto;
  }
  
  let producto = {
    nombre: nombre,
    precio: precio,
    stock: stock,
    disponible: false
  }
    return producto;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { crearProducto };

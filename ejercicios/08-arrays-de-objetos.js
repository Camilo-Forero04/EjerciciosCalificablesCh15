// ============================================================
// Ejercicio 08 · Arrays de objetos (integrador)
// ============================================================
// El dueño quiere un resumen de todo el inventario en un solo objeto.
// Recibes un array de productos como los que creaste en el ejercicio 07.
//
// Crea la función resumenInventario(productos) que retorne:
//   - totalProductos  → cuántos productos hay en el array
//   - unidadesTotales → la suma del stock de todos
//   - valorInventario → la suma de (precio * stock) de cada producto
//   - agotados        → array con los NOMBRES de los productos con stock 0
//
// Ejemplo:
//   resumenInventario([
//     { nombre: "Café americano", precio: 4500, stock: 30 },
//     { nombre: "Capuchino", precio: 7000, stock: 0 },
//   ])
//   → { totalProductos: 2, unidadesTotales: 30,
//       valorInventario: 135000, agotados: ["Capuchino"] }
// ============================================================

function calcularInventario(productos){
  let inventario = crearInventario();
  for (let producto of productos){
    inventario.totalProductos = calcularTotalProductos(inventario.totalProductos, producto);
    inventario.unidadesTotales = calcularUnidadesTotales(inventario.unidadesTotales, producto);
    inventario.valorInventario = calcularValorInventario(inventario.valorInventario, producto);
    inventario.agotados = isAvailable(inventario.agotados, producto); 
  }

  return inventario;
}

function resumenInventario(productos) {
  return calcularInventario(productos);
}

function calcularTotalProductos(totalProductos){
    return totalProductos+= 1;
}

function isAvailable(agotados, producto){
    if(producto.stock == 0){
      agotados.push(producto.nombre);
    }
  return agotados;
}

function calcularUnidadesTotales(unidadesTotales, producto){
  return  unidadesTotales += producto.stock;
}

function calcularValorInventario(valorInventario, producto){
    valorInventario += producto.stock*producto.precio;
  return valorInventario;
}

function crearInventario(){
  let inventario = {
    totalProductos: 0,
    unidadesTotales:0,
    valorInventario:0,
    agotados:[]
  }
  return inventario;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario }; 

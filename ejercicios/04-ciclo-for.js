// ============================================================
// Ejercicio 04 · Ciclo for (con arrays)
// ============================================================
// Al cierre del día, la caja tiene un array con el valor de cada venta.
//
// Crea la función sumarVentas(ventas) que recorra el array
// con un ciclo for y retorne la suma de todas las ventas.
// Si el array está vacío, retorna 0.
//
// Ejemplos:
//   sumarVentas([4500, 7000, 2500]) → 14000
//   sumarVentas([])                 → 0
// ============================================================

function sumarVentas(ventas) {
  if(ventas.length == 0){
    return 0;
  }
  let total = 0;
  for(venta of ventas){
    total += venta;
  }
  return total;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { sumarVentas };

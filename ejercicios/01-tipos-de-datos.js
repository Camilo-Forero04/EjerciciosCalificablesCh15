// ============================================================
// Ejercicio 01 · Tipos de datos
// ============================================================
// Café Origen está pasando su caja a un sistema.
// Antes de guardar un precio, hay que validar que sea un número real.
//
// Crea la función esPrecioValido(valor) que retorne:
//   - true  → si valor es de tipo "number", no es NaN y es mayor que 0
//   - false → en cualquier otro caso
//
// Ejemplos:
//   esPrecioValido(4500)    → true
//   esPrecioValido("4500")  → false   (es un string, no un number)
//   esPrecioValido(0)       → false
//
// Pista: typeof y Number.isNaN()
// ============================================================

function esPrecioValido(valor) {
  if(typeof valor !== "number" || Number.isNaN(valor) || valor <= 0){
    return false;
  }else{
    return true;
  }
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { esPrecioValido };

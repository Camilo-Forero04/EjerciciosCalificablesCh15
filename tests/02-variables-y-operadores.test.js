const test = require("node:test");
const assert = require("node:assert/strict");
const { calcularPrecioConIva } = require("../ejercicios/02-variables-y-operadores");

test("suma el 19% de IVA a 10.000", () => {
  assert.equal(calcularPrecioConIva(10000), 11900, "calcularPrecioConIva(10000) debería retornar 11900");
});

test("suma el 19% de IVA a 4.500", () => {
  assert.equal(calcularPrecioConIva(4500), 5355, "calcularPrecioConIva(4500) debería retornar 5355");
});

test("redondea el resultado con Math.round", () => {
  assert.equal(calcularPrecioConIva(2550), 3035, "calcularPrecioConIva(2550) debería retornar 3035 (3034.5 redondeado)");
});

test("un precio de 0 sigue siendo 0", () => {
  assert.equal(calcularPrecioConIva(0), 0, "calcularPrecioConIva(0) debería retornar 0");
});

const test = require("node:test");
const assert = require("node:assert/strict");
const { calcularDescuento } = require("../ejercicios/03-condicionales");

test("compra de 120.000 tiene 10% de descuento", () => {
  assert.equal(calcularDescuento(120000), 12000, "calcularDescuento(120000) debería retornar 12000");
});

test("compra de exactamente 100.000 ya tiene 10%", () => {
  assert.equal(calcularDescuento(100000), 10000, "calcularDescuento(100000) debería retornar 10000 (revisa si usaste >= )");
});

test("compra de 60.000 tiene 5% de descuento", () => {
  assert.equal(calcularDescuento(60000), 3000, "calcularDescuento(60000) debería retornar 3000");
});

test("compra de exactamente 50.000 ya tiene 5%", () => {
  assert.equal(calcularDescuento(50000), 2500, "calcularDescuento(50000) debería retornar 2500 (revisa si usaste >= )");
});

test("compra de 30.000 no tiene descuento", () => {
  assert.equal(calcularDescuento(30000), 0, "calcularDescuento(30000) debería retornar 0");
});

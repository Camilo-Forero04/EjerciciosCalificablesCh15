const test = require("node:test");
const assert = require("node:assert/strict");
const { calcularTotalFactura } = require("../ejercicios/06-funciones");

test("factura de 120.000: 10% de descuento y luego IVA", () => {
  assert.equal(calcularTotalFactura(120000), 128520, "calcularTotalFactura(120000) debería retornar 128520");
});

test("factura de 100.000: 10% de descuento y luego IVA", () => {
  assert.equal(calcularTotalFactura(100000), 107100, "calcularTotalFactura(100000) debería retornar 107100");
});

test("factura de 60.000: 5% de descuento y luego IVA", () => {
  assert.equal(calcularTotalFactura(60000), 67830, "calcularTotalFactura(60000) debería retornar 67830");
});

test("factura de 30.000: sin descuento, solo IVA", () => {
  assert.equal(calcularTotalFactura(30000), 35700, "calcularTotalFactura(30000) debería retornar 35700");
});

const test = require("node:test");
const assert = require("node:assert/strict");
const { esPrecioValido } = require("../ejercicios/01-tipos-de-datos");

test("un número positivo es un precio válido", () => {
  assert.equal(esPrecioValido(4500), true, "esPrecioValido(4500) debería retornar true");
});

test("un string no es un precio válido, aunque parezca número", () => {
  assert.equal(esPrecioValido("4500"), false, 'esPrecioValido("4500") debería retornar false');
});

test("cero no es un precio válido", () => {
  assert.equal(esPrecioValido(0), false, "esPrecioValido(0) debería retornar false");
});

test("un número negativo no es un precio válido", () => {
  assert.equal(esPrecioValido(-2000), false, "esPrecioValido(-2000) debería retornar false");
});

test("NaN no es un precio válido", () => {
  assert.equal(esPrecioValido(NaN), false, "esPrecioValido(NaN) debería retornar false");
});

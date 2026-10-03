const test = require("node:test");
const assert = require("node:assert/strict");
const { diasDeInventario } = require("../ejercicios/05-ciclo-while");

test("100 unidades vendiendo 30 al día alcanzan para 4 días", () => {
  assert.equal(diasDeInventario(100, 30), 4, "diasDeInventario(100, 30) debería retornar 4");
});

test("90 unidades vendiendo 30 al día alcanzan para 3 días exactos", () => {
  assert.equal(diasDeInventario(90, 30), 3, "diasDeInventario(90, 30) debería retornar 3");
});

test("sin stock, el inventario dura 0 días", () => {
  assert.equal(diasDeInventario(0, 10), 0, "diasDeInventario(0, 10) debería retornar 0");
});

test("si la venta supera el stock, alcanza para 1 día", () => {
  assert.equal(diasDeInventario(5, 10), 1, "diasDeInventario(5, 10) debería retornar 1");
});

test("si no hay ventas, retorna -1 (sin ciclo infinito)", () => {
  assert.equal(diasDeInventario(50, 0), -1, "diasDeInventario(50, 0) debería retornar -1");
});

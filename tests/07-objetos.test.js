const test = require("node:test");
const assert = require("node:assert/strict");
const { crearProducto } = require("../ejercicios/07-objetos");

test("retorna un objeto (no un array ni undefined)", () => {
  const producto = crearProducto("Pandebono", 2500, 40);
  assert.equal(typeof producto, "object", "crearProducto debería retornar un objeto");
  assert.ok(producto !== null && !Array.isArray(producto), "crearProducto debería retornar un objeto { }");
});

test("crea un producto con stock y lo marca disponible", () => {
  assert.deepEqual(
    crearProducto("Pandebono", 2500, 40),
    { nombre: "Pandebono", precio: 2500, stock: 40, disponible: true },
    "el objeto debería tener nombre, precio, stock y disponible: true"
  );
});

test("un producto con stock 0 no está disponible", () => {
  assert.deepEqual(
    crearProducto("Capuchino", 7000, 0),
    { nombre: "Capuchino", precio: 7000, stock: 0, disponible: false },
    "con stock 0, disponible debería ser false"
  );
});

test("con 1 sola unidad el producto ya está disponible", () => {
  assert.equal(crearProducto("Torta de zanahoria", 8500, 1).disponible, true, "con stock 1, disponible debería ser true");
});

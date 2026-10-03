const test = require("node:test");
const assert = require("node:assert/strict");
const { resumenInventario } = require("../ejercicios/08-arrays-de-objetos");

const productos = [
  { nombre: "Café americano", precio: 4500, stock: 30 },
  { nombre: "Capuchino", precio: 7000, stock: 0 },
  { nombre: "Pandebono", precio: 2500, stock: 40 },
  { nombre: "Torta de zanahoria", precio: 8500, stock: 0 },
];

test("cuenta el total de productos", () => {
  assert.equal(resumenInventario(productos).totalProductos, 4, "totalProductos debería ser 4");
});

test("suma las unidades en stock", () => {
  assert.equal(resumenInventario(productos).unidadesTotales, 70, "unidadesTotales debería ser 70");
});

test("calcula el valor del inventario (precio * stock)", () => {
  assert.equal(resumenInventario(productos).valorInventario, 235000, "valorInventario debería ser 235000");
});

test("lista los nombres de los productos agotados", () => {
  assert.deepEqual(
    resumenInventario(productos).agotados,
    ["Capuchino", "Torta de zanahoria"],
    'agotados debería ser ["Capuchino", "Torta de zanahoria"]'
  );
});

test("un inventario vacío da todo en cero", () => {
  assert.deepEqual(
    resumenInventario([]),
    { totalProductos: 0, unidadesTotales: 0, valorInventario: 0, agotados: [] },
    "con un array vacío, todo debería ser 0 y agotados un array vacío"
  );
});

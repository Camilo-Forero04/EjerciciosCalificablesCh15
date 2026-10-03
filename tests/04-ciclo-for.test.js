const test = require("node:test");
const assert = require("node:assert/strict");
const { sumarVentas } = require("../ejercicios/04-ciclo-for");

test("suma tres ventas", () => {
  assert.equal(sumarVentas([4500, 7000, 2500]), 14000, "sumarVentas([4500, 7000, 2500]) debería retornar 14000");
});

test("un array vacío suma 0", () => {
  assert.equal(sumarVentas([]), 0, "sumarVentas([]) debería retornar 0 (¿iniciaste tu acumulador en 0?)");
});

test("una sola venta retorna esa misma venta", () => {
  assert.equal(sumarVentas([8500]), 8500, "sumarVentas([8500]) debería retornar 8500");
});

test("suma un día completo de ventas", () => {
  const dia = [4500, 7000, 2500, 8500, 4500, 2500, 2500, 7000, 4500, 12000];
  assert.equal(sumarVentas(dia), 55500, "la suma de las 10 ventas del día debería ser 55500");
});

import { esAprobadoElPrestamo } from "./index.js";

test("1. Si la persona que solicita el préstamo es un estudiante el préstamo NO será aprobado aunque este no tenga deudas sin pagar.", () => {
  expect(esAprobadoElPrestamo("estudiante", false)).toBe(false);
});

test("2. Si la persona que solicita el préstamo es un empleado/trabajador el préstamo será aprobado aunque este si tenga deudas sin pagar.", () => {
  expect(esAprobadoElPrestamo("empleado", true)).toBe(true);
});

test("3. Si la persona que solicita el préstamo es un retirado el préstamo será aprobado si este no presenta deudas sin pagar.", () => {
  expect(esAprobadoElPrestamo("retirado", false)).toBe(true);
});

test("4. Si la persona que solicita el préstamo es un retirado el préstamo NO será aprobado si este presenta deudas sin pagar.", () => {
  expect(esAprobadoElPrestamo("retirado", true)).toBe(false);
});

test("mala consulta", () => {
  expect(esAprobadoElPrestamo("cualquier cosa", true)).toBe(
    "parametros incorrectos"
  );
});

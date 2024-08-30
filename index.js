const condiciones = {
  estudiante: (tieneDeuda) => false,
  empleado: (tieneDeuda) => true,
  retirado: (tieneDeuda) => !tieneDeuda,
};

export function esAprobadoElPrestamo(tipo, tieneDeuda = false) {
  try {
    return condiciones[tipo](tieneDeuda);
  } catch (error) {
    return "parametros incorrectos";
  }
}

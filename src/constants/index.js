export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiático" },
];

const YEARMAX = new Date().getFullYear();
export const YEAR = Array.from(new Array(20), (e, i) => YEARMAX - i);

export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Completo" },
];

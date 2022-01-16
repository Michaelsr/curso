const nombre = "Michael";
const apellido = "Soncco";

const nombreCompleto = nombre + " " + apellido;
const allName = ` 
${nombre} 
${apellido}
`;
console.log(nombreCompleto, allName);

function getSaludo(nombre) {
  return "Hola" + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);

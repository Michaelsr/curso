// Desestruturacion
//Asignacion Desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const persona = {
  nombre: "Michael",
  edad: 45,
  clave: "Iroman",
};
//persona va para todos
const { edad, nombre, clave } = persona;

console.log(edad, nombre, clave);
console.log(persona);
console.log(nombre);

const UseContex = ({ nombre, edad, clave, rango = "capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 15.2121,
      lng: -15.4521,
    },
  };
};

//esto es una Asignacion Desestructurante
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = UseContex(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

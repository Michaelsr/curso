const Persona = {
  nombre: "Michael",
  apellido: "Soncco Ramos",
  edad: 24,
  direccion: {
    ciudad: "Juliaca",
    zip: 52548569,
    lat: 14.3236,
    lng: 34.9233321,
  },
};

const persona2 = { ...Persona };
persona2.nombre = "Pipo";

console.log(Persona);
console.log(persona2);

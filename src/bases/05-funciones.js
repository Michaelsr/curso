const saludar = function (nombre) {
  return `hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Goten"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABCVD",
  username: "El_chibolo4563",
});

const user = getUser();
console.log(user);

function getUserActivo(nombre) {
  return {
    uid: "ASADRE",
    username: nombre,
  };
}

const usuarioActivo = getUserActivo("Michael");
console.log(usuarioActivo);

//Tarea
// 1. Transormar a una funcion en flecha
// 2. tiene que retornar un objeto implicito.
// 3. pruebas

const getUseractivoTarea = (apellido) => ({
  uid: "ASDFSA",
  username: apellido,
});

const usuarioActivado = getUseractivoTarea("Soncco");
console.log(usuarioActivado);

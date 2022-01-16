import { getHeroesById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroesById(2);
//     resolve(p1);
//     // reject("No se encontro ningun heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })

//   .catch((err) => console.warn(err));

const getHeroeByidAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se encontro ningun heroe");
      }
      resolve(p1);
    }, 2000);
  });
};

getHeroeByidAsync(2).then(console.log).catch(console.warn);

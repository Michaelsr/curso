import heroes, { owners } from "../data/heroes";
// console.log(owners);

//find
export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(2));

//filter

export const getHeroesByOwner = (owner) =>
  heroes.filter((comic) => comic.owner === owner);
// console.log(getHeroesByOwner("Marvel"));

// export default getHeroesById;

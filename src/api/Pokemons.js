import axios from "axios";

export const getPokemons = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=150&")
    .then((res) => res.data);
};

export const getPokemon = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.data);
};

export const getPokemonSpecies = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then((res) => res.data);
};

export const searchPokemon = (search) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then((res) => res.data);
};

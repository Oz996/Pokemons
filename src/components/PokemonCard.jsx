import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;

  // ChatGPT solution
  const getPokemonIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  const pokemonId = getPokemonIdFromUrl(url)

  return (
    <Link to={`/${pokemonId}`}>
      <article className="text-center border border-gray-300 rounded-lg p-10 shadow-lg shadow-gray-300  max-sm:p-2">
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(
              url
            )}.png`}
            alt={name}
            className="w-24"
          />
        </figure>
        <span className="font-bold">{name}</span>
      </article>
    </Link>
  );
};

export default PokemonCard;

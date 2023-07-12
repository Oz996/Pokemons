import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/Pokemons";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
console.log(data)
  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: {error}</span>;

  if (!data) return null

  return (
    <section className="flex gap-10 flex-wrap">
      {data?.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default Home;

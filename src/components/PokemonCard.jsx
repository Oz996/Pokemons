
const PokemonCard = ({pokemon}) => {
  return (
    <article className="w-52 h-32">
        <figure>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`} alt={pokemon.name} />
        </figure>
        <span className="font-bold">{pokemon.name}</span>
    </article>
  )
}

export default PokemonCard
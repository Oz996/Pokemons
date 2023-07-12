import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPokemon } from "../api/Pokemons"

const Pokemon = () => {

    const {id} = useParams()

    const {data: pokemon, isLoading, isError, error } = useQuery(["pokemon",id], () => getPokemon(id))
  return (
    <div>
        <figure>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} className="w-40" />
        </figure>
        <h2>{pokemon?.name}</h2>
        <h2>{pokemon?.weight}</h2>
    </div>
  )
}

export default Pokemon
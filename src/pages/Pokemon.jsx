import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPokemon } from "../api/Pokemons"
import {AiFillHeart} from 'react-icons/ai'
import {RiSwordFill} from 'react-icons/ri'
import {PiShieldFill} from 'react-icons/pi'
import {GiLeatherBoot} from 'react-icons/gi'

const Pokemon = () => {

    const {id} = useParams()
    
    const {data: pokemon, } = useQuery(["pokemon",id], () => getPokemon(id))

    // ChatGPT solution

    // const hpStat = pokemon?.stats.find((stat) => stat.stat.name === "hp");
    // const atkStat = pokemon?.stats.find((stat) => stat.stat.name ==="attack")
    // const defStat = pokemon?.stats.find((stat)=> stat.stat.name ==="defense")
    // const speedStat = pokemon?.stats.find((stat) => stat.stat.name ==="speed")

    // My solution:

    const stats = pokemon?.stats.map((stat)=> (
      <h2 key={stat.name}>{stat.base_stat}</h2>

    ))
    //*

    const types = pokemon?.types.map((type)=> (
      <h2 key={type.type.name}>{type.type.name}</h2>
    ))

    const flavorText =
    pokemon?.species?.flavor_text_entries?.find(
      (entry) => entry.version.name.toLowerCase() === "red"
    )?.flavor_text;

  return (
    <article className="flex flex-col items-center h-[40rem] justify-center">
      <div className="border border-neutral-300 p-10 rounded-2xl">
        <div className="flex gap-1 justify-center">
      <b>Type: </b>{types}
        </div>
        <figure className="flex justify-center">
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} className="w-40 mb-3" />
        </figure>
        {/* <div className="flex items-center gap-1">
        <AiFillHeart className="text-red-700"/> <b>HP:</b><h2 className="mr-10"> {hpStat?.base_stat}</h2>
        <RiSwordFill/> <b>ATK:</b><h2  className="mr-10"> {atkStat?.base_stat}</h2>
        <PiShieldFill className="text-slate-400"/> <b>DEF:</b><h2 className="mr-10"> {defStat?.base_stat}</h2>
        <GiLeatherBoot/><b>SPD:</b><h2 >{speedStat?.base_stat}</h2>
        </div> */}


        {stats &&  (
        <div className="flex items-center justify-between gap-1 ">
          <AiFillHeart className="text-red-700"/> <b>HP:</b><h2 className="mr-10">{stats[0]}</h2>
          <RiSwordFill /> <b>ATK:</b><h2  className="mr-10"> {stats[1]}</h2>
          <PiShieldFill className="text-slate-400"/> <b>DEF:</b><h2 className="mr-10">{stats[2]}</h2>
          <GiLeatherBoot className="text-amber-950"/><b>SPD:</b><h2 >{stats[5]}</h2>
        </div>
          )}
          <div className="flex gap-1 justify-between mt-10">
            <div className="flex gap-1  text-white bg-slate-500 rounded-lg py-1 px-2">
            <span className="font-semibold">Exp:</span> <p>{pokemon?.base_experience}</p> 
            </div>
            <div className="flex gap-1  text-white bg-slate-500 rounded-lg py-1 px-2">
            <span className="font-semibold">Height:</span> <p>{pokemon?.height}</p> 
            </div>
            <div className="flex gap-1 text-white bg-slate-500 rounded-lg py-1 px-2">
            <span className="font-semibold">Weight:</span> <p>{pokemon?.weight}</p>
            </div>
          </div>
        <div className="flex gap-2">
          {flavorText}
        </div>
        </div>
    </article>
  )
}

export default Pokemon
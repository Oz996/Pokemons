import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPokemon, getPokemonSpecies } from "../api/Pokemons";
import { AiFillHeart } from "react-icons/ai";
import { RiSwordFill } from "react-icons/ri";
import { PiShieldFill, PiSmileyDuotone } from "react-icons/pi";
import { GiLeatherBoot } from "react-icons/gi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";
import { ImArrowUp } from "react-icons/im";
import { useState } from "react";

const Pokemon = () => {
  const [altImage, setAltImage] = useState(false);
  const { id } = useParams();

  const { data: pokemon } = useQuery(["pokemon", id], () => getPokemon(id));
  const { data: speciesData, isSuccess: speciesSuccess } = useQuery(
    ["species", id],
    () => getPokemonSpecies(id)
  );

  console.log(pokemon);
  console.log("first:", speciesData);

  // ChatGPT solution

  // const hpStat = pokemon?.stats.find((stat) => stat.stat.name === "hp");
  // const atkStat = pokemon?.stats.find((stat) => stat.stat.name ==="attack")
  // const defStat = pokemon?.stats.find((stat)=> stat.stat.name ==="defense")
  // const speedStat = pokemon?.stats.find((stat) => stat.stat.name ==="speed")

  // My solution

  const stats = pokemon?.stats.map((stat) => (
    <h2 key={stat.name}>{stat.base_stat}</h2>
  ));

  const types = pokemon?.types.map((type) => (
    <h2 key={type.type.name}>{type.type.name}</h2>
  ));

  // ChatGPT solution
  // const flavorText = speciesData?.flavor_text_entries
  //   ?.filter((entry) => entry.language.name === "en")
  //   .map((entry) => entry.flavor_text)
  //   .join("\n");

  return (
    <article className="flex flex-col items-center justify-center mt-32">
      <div className="border border-neutral-300 p-10 rounded-2xl w-[32rem]">
        <div className="flex flex-row gap-1 justify-center">
          <h2>Type:</h2>
          <b className="flex gap-1">{types}</b>
        </div>

        {!altImage && (
          <figure className="flex justify-center items-center">
            <IoIosArrowBack size={30} className="opacity-30" />
            <img
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
              className="w-40 mb-3"
            />
            <IoIosArrowForward
              size={30}
              className="cursor-pointer"
              onClick={() => setAltImage(true)}
            />
          </figure>
        )}
        {altImage && (
          <figure className="flex justify-center items-center">
            <IoIosArrowBack
              size={30}
              className="cursor-pointer"
              onClick={() => setAltImage(false)}
            />
            <img
              src={pokemon?.sprites.front_shiny}
              alt={pokemon?.name}
              className="w-40 mb-3"
            />
            <IoIosArrowForward size={30} className="opacity-30" />
          </figure>
        )}
        {/* <div className="flex items-center gap-1">
        <AiFillHeart className="text-red-700"/> <b>HP:</b><h2 className="mr-10"> {hpStat?.base_stat}</h2>
        <RiSwordFill/> <b>ATK:</b><h2  className="mr-10"> {atkStat?.base_stat}</h2>
        <PiShieldFill className="text-slate-400"/> <b>DEF:</b><h2 className="mr-10"> {defStat?.base_stat}</h2>
        <GiLeatherBoot/><b>SPD:</b><h2 >{speedStat?.base_stat}</h2>
        </div> */}
        {speciesSuccess && speciesData && speciesData.is_legendary && (
          <h2 className="px-3 py-[3px] bg-red-400 text-white rounded-lg mb-1">
            Legendary
          </h2>
        )}

        {stats && (
          <div className="flex items-center justify-between gap-1 ">
            <AiFillHeart className="text-red-700" /> <b>HP:</b>
            <h2 className="mr-10">{stats[0]}</h2>
            <RiSwordFill /> <b>ATK:</b>
            <h2 className="mr-10"> {stats[1]}</h2>
            <PiShieldFill className="text-slate-400" /> <b>DEF:</b>
            <h2 className="mr-10">{stats[2]}</h2>
            <GiLeatherBoot className="text-amber-950" />
            <b>SPD:</b>
            <h2>{stats[5]}</h2>
          </div>
        )}
        <div className="w-full h-2 bg-slate-500 rounded" />
        {speciesSuccess && speciesData && (
          <>
            <div className="flex items-center gap-5 justify-center mx-auto mt-3">
              <h2 className="items-center flex gap-1">
                <PiSmileyDuotone size={20} className="text-yellow-600" />
                {speciesData.base_happiness}
              </h2>
              <h2 className="items-center flex gap-1">
                <MdCatchingPokemon size={20} className="text-red-500" />{" "}
                {speciesData.capture_rate}
              </h2>
              <h2 className="items-center flex gap-1">
                <ImArrowUp className="text-blue-500" />
                {speciesData.growth_rate.name}
              </h2>
            </div>
            <div className="grid mt-5 gap-3 w-8/12">
              <div className="grid grid-cols-2">
                <h2>Weight:</h2>
                <b>{pokemon?.weight}</b>
              </div>
              <div className="grid grid-cols-2">
                <h2>Height:</h2>
                <b>{pokemon?.height}</b>
              </div>
              <div className="grid grid-cols-2">
                <h2>Experience:</h2>
                <b>{pokemon?.base_experience}</b>
              </div>
              {speciesData?.evolves_from_species !== null ? (
                <div className="grid grid-cols-2">
                  <h2>Evolves from:</h2>
                  <b>{speciesData?.evolves_from_species?.name}</b>
                </div>
              ) : (
                ""
              )}

              <div className="grid grid-cols-2">
                <h2>Habitat:</h2>
                <b>{speciesData?.habitat?.name}</b>
              </div>
            </div>
            {/* <div>{flavorText}</div> */}
          </>
        )}
      </div>
    </article>
  );
};

export default Pokemon;

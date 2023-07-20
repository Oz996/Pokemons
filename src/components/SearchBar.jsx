import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/Pokemons";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  // if (search.length > 0) {
  //   setDisplayList(true)
  // }

  const handleSearch = (e) => {
    e.preventDefault();
  };

  console.log(search);
  
  return (
    <section className="relative">
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for Pokemon..."
          className="border rounded-full p-2 px-12 w-full my-10 focus:outline-blue-300"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <img
        src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
        alt="Pokemon logo"
        className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2"
      />

    </section>
  );
};

export default SearchBar;

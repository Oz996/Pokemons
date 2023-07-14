import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/Pokemons";
import PokemonCard from "../components/PokemonCard";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import SearchBar from "../components/SearchBar";
import Loader from "../utils/Loader/Loader";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 21;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });
  console.log(data);
  if (isLoading)
    return (
      <div className="flex justify-center h-96 items-center">
        <Loader />
      </div>
    );

  if (isError) return <span>Error: {error}</span>;

  if (!data) return null;

  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentPageData = data?.results.slice(start, end);

  return (
    <>
      <SearchBar />
      <section className="flex gap-10 flex-wrap justify-center">
        {currentPageData?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </section>
      <ReactPaginate
        className="flex gap-6 justify-center mt-10 text-blue-400"
        pageCount={Math.ceil(data?.results.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        breakLabel="..." // fix this
        previousLabel={<RiArrowLeftSLine className="text-black" size={25} />}
        nextLabel={<RiArrowRightSLine className="text-black" size={25} />}
      />
    </>
  );
};

export default Home;

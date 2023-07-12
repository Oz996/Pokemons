
const SearchBar = () => {
  return (
    <section className="relative">
        <input type="text" placeholder="Search for Pokemon..." className="border rounded-full p-2 px-12 w-full my-10 focus:outline-blue-300" />
        <img src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png" alt="Pokemon logo" className="w-5 absolute top-1/2 left-4 transform -translate-y-1/2" />
    </section>
  )
}

export default SearchBar
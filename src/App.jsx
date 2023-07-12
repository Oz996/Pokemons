import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-4/5 mx-auto">
      <SearchBar/>
      <Home />
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

const App = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Pokemon/>}/>
      </Routes>
    </div>
  );
};

export default App;

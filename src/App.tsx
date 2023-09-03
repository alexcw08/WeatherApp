import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="bg-violet-200 flex flex-col p-5 items-center ">
      <SearchBar />
      <CityCard />
    </div>
  );
}

export default App;

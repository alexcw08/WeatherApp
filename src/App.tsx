import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/searchBar";
import HourlyCard from "./components/hourlyCard";

function App() {
  return (
    <div className="bg-violet-200 flex flex-col p-7 items-center ">
      <SearchBar />
      <CityCard />
      <HourlyCard />
    </div>
  );
}

export default App;

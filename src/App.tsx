import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/searchBar";
import HourlyCard from "./components/hourlyCard";
import DailyCard from "./components/dailyCard";

function App() {
  return (
    <div className="bg-violet-200 flex flex-col p-7 items-center ">
      <SearchBar />
      <CityCard />
      <HourlyCard />
      <DailyCard />
    </div>
  );
}

export default App;

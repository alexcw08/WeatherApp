import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/searchBar";
import HourlyCard from "./components/hourlyCard";
import DailyCard from "./components/dailyCard";

function App() {
  return (
    <div className="bg-violet-200 flex flex-col items-center min-h-screen overflow-hidden">
      <SearchBar />
      <CityCard />
      <HourlyCard />
      <DailyCard />
    </div>
  );
}

export default App;

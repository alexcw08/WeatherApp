import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/SearchBar";
import HourlyCard from "./components/hourlyCard";
import DailyCard from "./components/dailyCard";

import { useState } from "react";
function App() {
  const [zipCode, setZipCode] = useState<string>("02108");
  return (
    <div className="bg-violet-200 flex flex-col items-center min-h-screen overflow-hidden">
      <h1 className="pt-10 text-xl">Active Zip Code {zipCode}</h1>
      <SearchBar setZipCode={setZipCode} />
      <CityCard />
      <HourlyCard />
      <DailyCard />
    </div>
  );
}

export default App;

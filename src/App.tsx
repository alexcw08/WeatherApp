import "./App.css";
import CityCard from "./components/cityCard";
import SearchBar from "./components/SearchBar";
import HourlyCard from "./components/hourlyCard";
import DailyCard from "./components/dailyCard";
import { useState, useEffect } from "react";

function App() {
  const zipKey: string = import.meta.env.VITE_ZIP_KEY;
  const [zipCode, setZipCode] = useState<string>("02108");
  const [zipData, setZipData] = useState<any[]>([]); //eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${zipKey}`
      );
      result.json().then((json) => {
        console.log(json);
        setZipData(json.results[0]);
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zipCode]);

  // fetch zipcode
  useEffect(() => {
    console.log("printing zip data");
    console.log(zipData);
  }, [zipData]);

  return (
    <div className="bg-violet-200 flex flex-col items-center min-h-screen overflow-hidden">
      <h1 className="pt-10 text-xl">Active Zip Code {zipCode}</h1>
      <h2></h2>
      <SearchBar setZipCode={setZipCode} />
      <CityCard zipData={zipData} />
      <HourlyCard />
      <DailyCard />
    </div>
  );
}

export default App;

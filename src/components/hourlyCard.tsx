import HourContainer from "./hourContainer";

function hourlyCard() {
  return (
    <div className="px-10 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between m-6">
      <div className="flex mt-5 text-xl text-violet-100 justify-between">
        <h1>Hourly</h1>
        <h1 className="text-violet-400">Next 12 Hours</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <HourContainer />
      </div>
    </div>
  );
}

export default hourlyCard;

import DayContainer from "./dayContainer";

function dailyCard() {
  return (
    <div className="px-10 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between m-6">
      <div className="flex mt-5 text-xl text-violet-100 justify-between">
        <h1>Daily</h1>
        <h1 className="text-violet-400">Next 7 Days</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <DayContainer />
      </div>
    </div>
  );
}

export default dailyCard;

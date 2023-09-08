import DayContainer from "./dayContainer";

function dailyCard() {
  const data: string[][] = [
    ["Tuesday", "67", "Cloudy"],
    ["Wednesday", "69", "Cloudy"],
    ["Thursday", "70", "Sunny"],
    ["Friday", "65", "Cloudy"],
    ["Saturday", "62", "Cloudy"],
    ["Sunday", "64", "Sunny"],
    ["Monday", "62", "Cloudy"],
  ];
  return (
    <div className="bg-violet-700 text-slate-100 rounded-xl w-11/12 mb-7">
      <div className="flex mt-6 ml-10  mr-8 text-xl text-violet-100 justify-between mb-3">
        <h1 className="text-3xl">Daily</h1>
        <h1 className="text-violet-400 text-lg">Next 7 Days</h1>
      </div>
      <div className="flex flex-col md:flex-row md:mx-10 md:justify-center lg:justify-between mb-4 flex-wrap">
        {data.map((day) => (
          <DayContainer
            day={day[0]}
            temperature={day[1]}
            description={day[2]}
          />
        ))}
      </div>
    </div>
  );
}

export default dailyCard;

import HourContainer from "./hourContainer";

function hourlyCard() {
  const data: string[][] = [
    ["8:00am", "67", "Cloudy"],
    ["9:00am", "69", "Cloudy"],
    ["10:00am", "70", "Sunny"],
    ["11:00am", "65", "Cloudy"],
    ["12:00pm", "62", "Cloudy"],
    ["01:00am", "64", "Sunny"],
    ["02:00pm", "62", "Cloudy"],
    ["03:00pm", "70", "Sunny"],
    ["04:00pm", "65", "Cloudy"],
    ["05:00pm", "62", "Cloudy"],
    ["06:00am", "64", "Sunny"],
    ["07:00pm", "62", "Cloudy"],
  ];
  return (
    <div className="px-5 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between m-5">
      <div className="flex mt-5 text-xl text-violet-100 justify-between">
        <h1>Hourly</h1>
        <h1 className="text-violet-400">Next 12 Hours</h1>
      </div>
      <div className="flex flex-col md:flex-row md:mb-4">
        {data.map((hour) => (
          <HourContainer
            hour={hour[0]}
            temperature={hour[1]}
            description={hour[2]}
          />
        ))}
        {/* <HourContainer /> */}
      </div>
    </div>
  );
}

export default hourlyCard;

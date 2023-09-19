import HourContainer from "./hourContainer";

type HourlyProps = {
  hourlyData: hourObj[];
};
interface hourObj {
  time?: string;
  temp?: number;
  description?: string;
}

function hourlyCard(props: HourlyProps) {
  props.hourlyData.map((time) => {
    console.log(time.time);
    console.log(time.temp);
    console.log(time.description);
  });

  return (
    <div className="flex flex-col bg-violet-700 text-slate-100 rounded-xl w-11/12 mb-7">
      <div className="flex mt-6 ml-10 mr-8 text-xl text-violet-100 justify-between mb-3">
        <h1 className="text-3xl">Hourly</h1>
        <h1 className="text-violet-400 text-lg">Next 12 Hours</h1>
      </div>
      <div className="flex flex-col w-11/12 mx-7 md:flex-row md:justify-evenly md:flex-wrap mb-4 ">
        {props.hourlyData.map((hour) => (
          <HourContainer
            hour={hour.time}
            temperature={hour.temp}
            description={hour.description}
          />
        ))}
      </div>
    </div>
  );
}

export default hourlyCard;

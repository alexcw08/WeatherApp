import DayContainer from "./dayContainer";

type DailyProps = {
  dailyData: dayObj[];
};
interface dayObj {
  day?: string;
  temp?: number;
  max?: number;
  min?: number;
  description?: string;
}

function dailyCard(props: DailyProps) {
  return (
    <div className="bg-violet-700 text-slate-100 rounded-xl w-11/12 mb-7">
      <div className="flex mt-6 ml-10  mr-8 text-xl text-violet-100 justify-between mb-3">
        <h1 className="text-3xl">Daily</h1>
        <h1 className="text-violet-400 text-lg">Next 7 Days</h1>
      </div>
      <div className="flex flex-col md:flex-row md:mx-10 md:justify-center lg:justify-between mb-4 flex-wrap">
        {props.dailyData.map((day) => (
          <DayContainer
            day={day.day}
            temperature={day.temp}
            description={day.description}
          />
        ))}
      </div>
    </div>
  );
}

export default dailyCard;

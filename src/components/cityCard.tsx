type CityProps = {
  data: {
    time?: number;
    temp?: number;
    description?: string;
    max?: number;
    min?: number;
  };
  locData: {
    city?: string;
    county?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  dateAndTime: {
    date?: number;
    day?: string;
    month?: string;
    time?: string;
  };
};

// TODO
// add back max/min
// round temperature
function cityCard(props: CityProps) {
  return (
    <div className="flex px-10 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between mb-7">
      <div className="py-6  flex flex-col justify-evenly ">
        <h1 className="text-5xl">{props.locData.city}</h1>

        <h2 className=" text-lg text-slate-300">{props.locData.state}</h2>
        <h3 className="text-lg text-slate-300">
          {props.dateAndTime.day}, {props.dateAndTime.month}{" "}
          {props.dateAndTime.date}{" "}
        </h3>
        <h3 className="hidden md:block text-lg text-slate-300">
          {props.dateAndTime.time}
        </h3>
      </div>
      <div className="flex items-center px-4">
        <div className="flex flex-col items-center px-2">
          <h1 className="text-4xl">{props.data.temp?.toFixed(0)}°</h1>
          <h2 className="text-lg text-slate-300">
            {props.data ? props.data.description : null}
          </h2>
          <div className="flex">
            <div className="flex flex-col mx-1 justify-center items-center">
              <h3>High</h3>
              <span>{props.data.max?.toFixed(0)}</span>
            </div>
            <div className="flex flex-col mx-1">
              <h3>Low</h3>
              <span>{props.data.min?.toFixed(0)}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-40">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default cityCard;

type CardProps = {
  hour?: string;
  temperature?: number;
  description?: string;
};
function hourContainer(props: CardProps) {
  return (
    // <div className="flex flex-row justify-between items-center md:hourlyContMd md:mb-1 md:px-6 md:py-4">
    <div className="flex justify-between md:flex-col md:px-10 mb-5 md:justify-center md:items-center">
      <h3 className="text-xl w-20 md:w-fit">{props.hour}</h3>
      <h4 className="md:text-2xl w-10 md:w-fit text-center">
        {props.temperature?.toFixed(0)}°
      </h4>

      <svg
        className="w-8 md:w-20"
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
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
      {/* <h4 className="">Cloudy</h4> */}
      <h4 className="text-xl w-20 md:w-fit">{props.description}</h4>
    </div>
  );
}

export default hourContainer;

type CardProps = {
  hour: string;
  temperature: string;
  description: string;
};
function hourContainer({ hour, temperature, description }: CardProps) {
  return (
    <div className="flex flex-row justify-between items-center m-4 md:hourlyContMd">
      {/* <h3>8:00am</h3> */}
      <h3 className="text-lg">{hour}</h3>

      {/* <h4 className="md:text-2xl">67°</h4> */}
      <h4 className="md:text-xl">{temperature}°</h4>

      <svg
        className="w-8 md:w-12"
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
      <h4 className="text-lg">{description}</h4>
    </div>
  );
}

export default hourContainer;

function hourlyCard() {
  return (
    <div className="px-10 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between m-6">
      <div className="flex mt-5 text-xl text-violet-100 justify-between">
        <h1>Hourly</h1>
        <h1 className="text-violet-400">Next 12 Hours</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:hourlyContMd">
          <h3>8:00am</h3>
          <h4 className="md:text-2xl">67°</h4>
          <svg
            className="m-2"
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
          <h4 className="">Cloudy</h4>
        </div>
      </div>
    </div>
  );
}

export default hourlyCard;

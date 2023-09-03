function dailyCard() {
  return (
    <div className="px-10 w-11/12 bg-violet-700 text-slate-100 rounded-xl justify-between m-6">
      <div className="flex mt-5 text-xl text-violet-100 justify-between">
        <h1>Daily</h1>
        <h1 className="text-violet-400">Next 7 Days</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center p-5 text-lg">
          <h3>Tomorrow</h3>
          <h4 className="text-2xl">70°</h4>
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
          <h4>Sunny</h4>
        </div>
      </div>
    </div>
  );
}

export default dailyCard;

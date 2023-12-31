type CardProps = {
  day?: string;
  temperature?: number;
  description?: string;
};

function hourContainer({ day, temperature, description }: CardProps) {
  return (
    <div className="flex flex-row justify-between items-center m-4 md:flex-col md:justify-center md:items-center">
      <h3 className="w-2/5 md:w-20 md:text-center">{day}</h3>
      <h4 className="md:text-2xl">{temperature?.toFixed(0)}°</h4>
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
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <h4 className="w-1/5 md:w-20 text-center">{description}</h4>
    </div>
  );
}

export default hourContainer;

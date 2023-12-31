import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setZipCode: Dispatch<SetStateAction<string>>;
};

function SearchBar({ setZipCode }: Props) {
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setZipCode(userInput);
    setUserInput("");
  };

  return (
    <form
      className="flex rounded-lg w-2/3 md:w-1/3 bg-violet-400 m-5"
      onSubmit={handleSubmit}
    >
      <h1></h1>
      <input
        required
        className="w-full bg-violet-400 placeholder-slate-200 rounded-xl text-center text-slate-100"
        type="text"
        placeholder="Search a Zip Code"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="w-10 cursor-pointer mx-2">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;

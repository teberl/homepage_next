import React, { useState } from "react";

interface IProps {
  onSubmit(name: string): void;
}

const Login: React.FunctionComponent<IProps> = ({ onSubmit }) => {
  const [localText, setLocalText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLocalText(event.target.value.trim());

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localText) onSubmit(localText);
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={localText}
          onChange={handleChange}
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Join
        </button>
      </div>
    </form>
  );
};

export default Login;

import React, { useState } from "react";
import CalcKeyboard from "./CalcKeyboard";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    const inputVal = e.target.value();
    console.log(inputVal);
    setResult(inputVal);
  };

  return (
    <div className="w-full h-screen flex bg-red-700">
      <form className="m-auto w-[310px] h-[600px] bg-black px-3 py-8">
        <div className="bg-black w-full h-[35%] flex relative">
          <input
            type="text"
            className="placeholder:text-white absolute bottom-0 w-full text-[60px] pr-3 py-0 outline-none caret-black bg-black text-right text-white font-light"
            value={result}
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <CalcKeyboard setResult={setResult} result={result} />
      </form>
    </div>
  );
};

export default Calculator;

import React from "react";
import { FaDivide, FaEquals } from "react-icons/fa6";
import { BsPlusSlashMinus } from "react-icons/bs";
import { LiaPercentSolid, LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CalcKeyboard = ({ setResult, result }) => {
  const buttonClicked = (e) => {
    e.preventDefault();
    setResult(result.concat(e.target.name));
  };
  const handleACButton = () => {
    setResult("");
  };

  return (
    <div className="w-full h-[65%] bg-black flex flex-col gap-2">
      <div className="w-full h-[20%] bg-black flex justify-center gap-2">
        <button
          onClick={handleACButton}
          className="w-[25%] bg-[#A5A5A5] h-full rounded-full text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          AC
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#A5A5A5] h-full rounded-full flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <BsPlusSlashMinus className="m-auto text-[22px]" />
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#A5A5A5] h-full rounded-full flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <LiaPercentSolid className="m-auto text-[29px]" />
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#F89B10] h-full rounded-full text-white flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <FaDivide className="m-auto text-[22px]" />
        </button>
      </div>
      <div className="w-full h-[20%] bg-black flex justify-center gap-2">
        <button
          onClick={buttonClicked}
          name="7"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          7
        </button>
        <button
          onClick={buttonClicked}
          name="8"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          8
        </button>
        <button
          onClick={buttonClicked}
          name="9"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          9
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#F89B10] h-full rounded-full text-white flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <LiaTimesSolid className="m-auto text-[22px]" />
        </button>
      </div>
      <div className="w-full h-[20%] bg-black flex justify-center gap-2">
        <button
          onClick={buttonClicked}
          name="4"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          4
        </button>
        <button
          onClick={buttonClicked}
          name="5"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          5
        </button>
        <button
          onClick={buttonClicked}
          name="6"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          6
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#F89B10] h-full rounded-full text-white flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <AiOutlineMinus className="m-auto text-[22px]" />
        </button>
      </div>
      <div className="w-full h-[20%] bg-black flex justify-center gap-2">
        <button
          onClick={buttonClicked}
          name="1"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          1
        </button>
        <button
          onClick={buttonClicked}
          name="2"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          2
        </button>

        <button
          onClick={buttonClicked}
          name="3"
          className="w-[25%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
        >
          3
        </button>
        <button
          onClick={buttonClicked}
          className="w-[25%] bg-[#F89B10] h-full rounded-full  text-white flex items-center text-center hover:scale-110 ease-in-out duration-500"
        >
          <AiOutlinePlus className="m-auto text-[22px]" />
        </button>
      </div>
      <div className="w-full h-[20%] bg-black flex justify-center gap-2">
        <button
          onClick={buttonClicked}
          className="w-[50%] bg-[#333333] h-full rounded-full text-white text-[26px] text-left pl-7 hover:scale-110 ease-in-out duration-500"
        >
          0
        </button>
        <div className="flex h-full w-[50%] gap-2">
          <button
            onClick={buttonClicked}
            className="w-[50%] bg-[#333333] h-full rounded-full text-white text-[26px] hover:scale-110 ease-in-out duration-500"
          >
            .
          </button>
          <button
            onClick={buttonClicked}
            type="submit"
            className="w-[50%] bg-[#F89B10] h-full rounded-full text-white flex items-center text-center hover:scale-110 ease-in-out duration-500"
          >
            <FaEquals className="m-auto text-[22px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalcKeyboard;

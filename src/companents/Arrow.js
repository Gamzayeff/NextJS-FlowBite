import React from "react";

const Arrow = () => {
  return (
    <div className="mt-[45px] flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div className="h-[15px] w-[60px] rounded-[20px] bg-[#F53838]"></div>
        <div className="ml-[10px] h-[15px] w-[15px] rounded-[100px] bg-[#D8D8D8]"></div>
        <div className="ml-[5px] h-[15px] w-[15px] rounded-[100px] bg-[#D8D8D8]"></div>
        <div className="ml-[5px] h-[15px] w-[15px] rounded-[100px] bg-[#D8D8D8]"></div>
      </div>
      <div className="flex flex-row">
        <img src="/images/leftarrow.svg" />
        <img src="/images/rightarrow.svg" className="ml-[45px]" />
      </div>
    </div>
  );
};

export default Arrow;

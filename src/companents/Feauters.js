"use client";
import List from "../companents/List";

const Feautures = () => {
  return (
    <div className="mt-[60px] flex flex-col justify-center xl:flex-row xl:justify-start">
      <div>
        <img className="w-full" src="/images/Illustration2.svg" />
      </div>

      <div className="mt-[50px] w-full xl:ml-[180px] xl:w-[410px]">
        <h1 className="w-full font-serif text-[30px] font-semibold text-[#2B2B2B] xl:w-[320px]">
          We provide many features you can use
        </h1>
        <p className="mt-[20px] text-[16px] font-normal text-[#5A5A5A]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <List />
      </div>
    </div>
  );
};

export default Feautures;

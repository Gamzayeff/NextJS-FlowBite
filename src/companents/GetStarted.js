"use client";
import { Button } from "flowbite-react";

const GetStrarted = () => {
  return (
    <div className="mt-[100px] flex flex-col justify-center xl:flex-row xl:justify-start">
      <div className="mt-[20px] w-full xl:w-[550px]">
        <h1 className="text-[40px] font-normal text-[#2B2B2B] xl:text-[50px]">
          Want anything to be easy with{" "}
          <span className="font-semibold">LaslesVPN</span>
        </h1>
        <p className="mt-[20px] text-center text-[12px] font-normal text-[#5A5A5A] xl:text-start xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <div className="flex justify-center xl:justify-start">
          <Button
            className="mt-[50px] gap-[10px] rounded-[20px] px-[40px] py-[10px] font-sans text-[18px] font-semibold"
            color="failure"
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="mt-[20px] xl:ml-[50px] xl:mt-[0px] xl:w-[600px]">
        <img className="w-full" src="/images/Illustration.svg" />
      </div>
    </div>
  );
};

export default GetStrarted;

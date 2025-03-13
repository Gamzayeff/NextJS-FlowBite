"use client";
import { Carousel, Rating } from "flowbite-react";

export default function Component() {
  return (
    <div className="mt-[30px] flex flex-col xl:flex-row">
      <div className="ml-[20px] w-[410px] rounded-[25px] border-[2px] border-gray-400 px-[40px] py-[20px] xl:m-[0px]">
        <div className="flex flex-row">
          <img src="/images/Ellipse 3.svg" />
          <div className="ml-[30px]">
            <h2 className="font-sans text-[17px] font-semibold text-[#2C2C2C]">
              Brooklyn Simmons
            </h2>
            <h3 className="font-sans text-[15px] font-normal text-[#7B7B7B]">
              Warsaw,pland
            </h3>
          </div>
          <div className="ml-[20px] mt-[30px]">
            <MyRating />
          </div>
        </div>
        <p className="mt-[20px] w-[300px] font-sans text-[16px] font-normal text-[#5A5A5A]">
          “wow...iam very happy to use this vpn,it turned out to be more than my
          expectations and so far there have been no problems. laslesvpn always
          the best”.
        </p>
      </div>

      <div className="ml-[20px] mt-[20px] w-[410px] rounded-[25px] border-[2px] border-gray-400 px-[40px] py-[20px] xl:mt-[0px]">
        <div className="flex flex-row">
          <img src="/images/Ellipse4.svg" />
          <div className="ml-[30px]">
            <h2 className="font-sans text-[17px] font-semibold text-[#2C2C2C]">
              Darlene Robertson
            </h2>
            <h3 className="font-sans text-[15px] font-normal text-[#7B7B7B]">
              Warsaw,pland
            </h3>
          </div>
          <div className="ml-[20px] mt-[30px]">
            <MyRating />
          </div>
        </div>
        <p className="mt-[20px] w-[300px] font-sans text-[16px] font-normal text-[#5A5A5A]">
          “wow...iam very happy to use this vpn,it turned out to be more than my
          expectations and so far there have been no problems. laslesvpn always
          the best”.
        </p>
      </div>

      <div className="ml-[20px] mt-[20px] w-[410px] rounded-[25px] border-[2px] border-gray-400 px-[40px] py-[20px] xl:mt-[0px]">
        <div className="flex flex-row">
          <img src="/images/Ellipse5.svg" />
          <div className="ml-[30px]">
            <h2 className="font-sans text-[17px] font-semibold text-[#2C2C2C]">
              Darrell Steward
            </h2>
            <h3 className="font-sans text-[15px] font-normal text-[#7B7B7B]">
              Warsaw,pland
            </h3>
          </div>
          <div className="ml-[20px] mt-[30px]">
            <MyRating />
          </div>
        </div>
        <p className="mt-[20px] w-[300px] font-sans text-[16px] font-normal text-[#5A5A5A]">
          “wow...iam very happy to use this vpn,it turned out to be more than my
          expectations and so far there have been no problems. laslesvpn always
          the best”.
        </p>
      </div>
    </div>
  );
}

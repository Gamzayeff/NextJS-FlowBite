import React from "react";

const Info = () => {
  return (
    <div className="mt-[70px] flex justify-between rounded-[20px] bg-white p-[20px] shadow-md shadow-zinc-500 xl:justify-between xl:px-[50px] xl:py-[40px]">
      <div className="flex flex-row items-center">
        <div className="rounded-[100px] xl:bg-red-200 xl:p-[10px]">
          <img
            className="h-[30px] w-[30px]"
            href="https://flowbite.com"
            src="/images/user.svg"
          />
        </div>
        <div className="ml-[10px] xl:ml-[30px]">
          <h3 className="font-serif text-[15px] font-semibold text-[#2B2B2B] xl:text-[20px]">
            90+
          </h3>
          <h4 className="font-serif text-[10px] font-normal text-[#646464] xl:text-[15px]">
            Users
          </h4>
        </div>

        <div className="ml-[50px] h-full w-[2px] bg-gray-400 xl:ml-[70px]"></div>
      </div>

      <div className="ml-[40px] flex flex-row items-center xl:ml-[100px]">
        <div className="rounded-[100px] xl:bg-red-200 xl:p-[10px]">
          <img
            className="h-[30px] w-[30px]"
            href="https://flowbite.com"
            src="/images/location.svg"
          />
        </div>
        <div className="ml-[10px] xl:ml-[30px]">
          <h3 className="font-serif text-[15px] font-semibold text-[#2B2B2B] xl:text-[20px]">
            30+
          </h3>
          <h4 className="font-serif text-[10px] font-normal text-[#646464] xl:text-[15px]">
            Locations
          </h4>
        </div>

        <div className="ml-[50px] h-full w-[2px] bg-gray-400 xl:ml-[70px]"></div>
      </div>

      <div className="ml-[40px] flex flex-row items-center xl:ml-[100px]">
        <div className="rounded-[100px] xl:bg-red-200 xl:p-[10px]">
          <img
            className="h-[30px] w-[30px]"
            href="https://flowbite.com"
            src="/images/server.svg"
          />
        </div>
        <div className="ml-[10px] xl:ml-[30px]">
          <h3 className="font-serif text-[15px] font-semibold text-[#2B2B2B] xl:text-[20px]">
            50+
          </h3>
          <h4 className="font-serif text-[10px] font-normal text-[#646464] xl:text-[15px]">
            Servers
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Info;

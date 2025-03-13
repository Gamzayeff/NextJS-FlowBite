"use client";

import { List, Button } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

const Cards = () => {
  return (
    <div className="mt-[50px] flex flex-row justify-start gap-1 xl:justify-center xl:gap-8">
      <div className="flex flex-col items-center rounded-[20px] border-[2px] border-gray-300 px-[10px] py-[20px] xl:px-[60px]">
        <img
          className="h-[100px] w-[100px] xl:h-fit xl:w-fit"
          src="/images/Premium.svg"
        />
        <h2 className="mt-[20px] text-[15px] font-semibold text-[#2B2B2B] xl:mt-[40px] xl:text-[20px]">
          Free
        </h2>
        <List className="m-auto mt-[20px] xl:mt-[60px]">
          <List.Item
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
            className="text-[11px] font-normal text-[#2B2B2B] xl:text-[16px]"
          >
            Unlimited bandwitch
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Encrypted connection
          </List.Item>
          <List.Item
            className="pb-[80px] pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pb-[180px] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Yes trafic logs
          </List.Item>
        </List>
        <div className="mt-[30px]">
          <h2 className="text-center text-[18px] font-semibold text-[#2B2B2B] xl:text-[28px]">
            Free
          </h2>
          <Button
            color="failure"
            className="mt-[20px] px-[25px] py-[5px] xl:px-[55px]"
            pill
          >
            Select
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center rounded-[20px] border-[2px] border-gray-300 px-[10px] py-[20px] xl:px-[60px]">
        <img
          className="h-[100px] w-[100px] xl:h-fit xl:w-fit"
          src="/images/Premium.svg"
        />
        <h2 className="mt-[20px] text-[15px] font-semibold text-[#2B2B2B] xl:mt-[40px] xl:text-[20px]">
          Standard plan
        </h2>
        <List className="m-auto mt-[20px] xl:mt-[60px]">
          <List.Item
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
            className="text-[11px] font-normal text-[#2B2B2B] xl:text-[16px]"
          >
            Unlimited bandwitch
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className=" mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Encrypted connection
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Yes trafic logs
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Works on all devices
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Connect anyware
          </List.Item>
        </List>
        <div className="mt-[30px]">
          <h2 className="text-center text-[18px] font-semibold text-[#2B2B2B] xl:text-[28px]">
            $ 9 <span className="text-gray-500">/</span>
            <span className="text-[15px] text-gray-500 xl:text-[20px]">mo</span>
          </h2>
          <Button
            color="failure"
            className="mt-[20px] px-[25px] py-[5px] xl:px-[55px]"
            pill
          >
            Select
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center rounded-[20px] border-[2px] border-gray-300 px-[10px] py-[20px] xl:px-[60px]">
        <img
          className="h-[100px] w-[100px] xl:h-fit xl:w-fit"
          src="/images/Premium.svg"
        />
        <h2 className="mt-[20px] text-[15px] font-semibold text-[#2B2B2B] xl:mt-[40px] xl:text-[20px]">
          Standard plan
        </h2>
        <List className="m-auto mt-[20px] xl:mt-[60px]">
          <List.Item
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
            className="text-[11px] font-normal text-[#2B2B2B] xl:text-[16px]"
          >
            Unlimited bandwitch
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className=" mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Encrypted connection
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Yes trafic logs
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Works on all devices
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Connect anyware
          </List.Item>
          <List.Item
            className="pt-[10px] text-[11px] font-normal text-[#2B2B2B] xl:pt-[30px] xl:text-[16px]"
            icon={() => (
              <HiCheckCircle className="mr-[7px] text-green-500 xl:mr-[15px]" />
            )}
          >
            Get new features
          </List.Item>
        </List>
        <div className="mt-[30px]">
          <h2 className="text-center text-[18px] font-semibold text-[#2B2B2B] xl:text-[28px]">
            $ 12 <span className="text-gray-500">/</span>
            <span className="text-[15px] text-gray-500 xl:text-[20px]">mo</span>
          </h2>
          <Button
            color="failure"
            className="mt-[20px] px-[25px] py-[5px] xl:px-[55px]"
            pill
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

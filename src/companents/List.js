"use client";

import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

export default function Component() {
  return (
    <List className="mt-[20px]">
      <List.Item
        icon={() => <HiCheckCircle className="mr-[15px] text-green-500" />}
        className="text-[16px] font-semibold text-[#2B2B2B]"
      >
        Powerfull online protection.
      </List.Item>
      <List.Item
        className="text-[16px] font-semibold text-[#2B2B2B]"
        icon={() => <HiCheckCircle className="mr-[15px] text-green-500" />}
      >
        Internet with borders
      </List.Item>
      <List.Item
        className="text-[16px] font-semibold text-[#2B2B2B]"
        icon={() => <HiCheckCircle className="mr-[15px] text-green-500" />}
      >
        Supercharged VPN
      </List.Item>
      <List.Item
        className="text-[16px] font-semibold text-[#2B2B2B]"
        icon={() => <HiCheckCircle className="mr-[15px] text-green-500" />}
      >
        No specific time limits
      </List.Item>
    </List>
  );
}

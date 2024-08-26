import { Text } from "../../components";
import Link from "next/link";
import React from "react";

export default function MegaMenu1() {
  return (
    <div className="z-[99] min-w-[200px] absolute top-auto pt-3">
      <div className="shadow-[0_0_13px_5px_#00000029] bg-[#ffffff] w-full rounded-lg p-5">
        <div className="gap-[30px] flex">
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="sm:text-[15px] text-[18px] !text-[#000000] font-bold">
              Title 1
            </Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link href="#" className="sm:text-[13px]">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 1
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 2
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 3
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 4
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 5
                </Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="sm:text-[15px] text-[18px] !text-[#000000] font-bold">
              Title 2
            </Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link href="#" className="sm:text-[13px]">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 1
                </Text>
              </Link>
              <Text className="sm:text-[13px] text-[16px] !text-[#656d76] self-center font-normal">
                Menu 2
              </Text>
              <Text className="sm:text-[13px] text-[16px] !text-[#656d76] self-center font-normal">
                Menu 3
              </Text>
              <Text className="sm:text-[13px] text-[16px] !text-[#656d76] self-center font-normal">
                Menu 4
              </Text>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 5
                </Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="sm:text-[15px] text-[18px] !text-[#000000] font-bold">
              Title 3
            </Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <Link href="#" className="sm:text-[13px]">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 1
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 2
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 3
                </Text>
              </Link>
              <Link href="#" className="sm:text-[13px] self-center">
                <Text className="text-[16px] !text-[#656d76] font-normal">
                  Menu 4
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

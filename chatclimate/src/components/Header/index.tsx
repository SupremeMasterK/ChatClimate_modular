"use client";

import MegaMenu1 from "../MegaMenu1";
import { Button, Text, Img, Heading } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen4, setMenuOpen4] = React.useState(false);
  const [menuOpen5, setMenuOpen5] = React.useState(false);

  return (
    <header {...props} className={`${props.className} z-[2] relative`}>
      {/* <Text
        size="texts"
        as="p"
        className="z-[3] text-[20px] !text-[#ffffff] mr-[350px] relative font-medium md:mr-0"
      >
        Companies
      </Text> */}
      <div className="mt-[-12px] relative flex flex-col items-end self-stretch">
        <img
          src="img_rectangle_9.png"
          alt="Header Image"
          width={178}
          height={28}
          className="mr-[286px] w-[14%] h-[28px] rounded-bl-lg object-contain md:mr-0"
        />
        <div className="bg-[#479c8f] mt-[-28px] relative flex justify-center self-stretch px-8 sm:px-5">
          <div className="max-w-[1344px] mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
            <Heading
              size="headings"
              as="h1"
              className="sm:text-[36px] md:text-[38px] text-[40px] !text-[#ffffff] font-bold"
            >
              ChatClimate.ai
            </Heading>
            <div className="gap-[22px] flex items-center md:flex-col">
              <ul className="flex items-center gap-8 sm:flex-col">
                <li
                  onMouseLeave={() => {
                    setMenuOpen4(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen4(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-2">
                    <Text
                      size="textxs"
                      as="p"
                      className="hover:bg-[#479c8f] text-[18px] !text-[#ffffff] cursor-pointer px-4 py-6 font-medium sm:py-5"
                    >
                      Chat Report
                    </Text>
                    <img
                      src="img_arrow_down.svg"
                      alt="Chat Report Arrow"
                      width={16}
                      height={8}
                      className="w-[16px] h-[8px]"
                    />
                  </div>
                  {menuOpen4 ? <MegaMenu1 /> : null}
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen5(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen5(true);
                  }}
                >
                  <div className="bg-[#479c8f] flex cursor-pointer items-center gap-2.5 px-3 py-6 sm:py-5">
                    <Text
                      size="textxs"
                      as="p"
                      className="hover:bg-[#479c8f] text-[18px] !text-[#ffffff] cursor-pointer px-4 py-6 font-medium sm:py-5"
                    >
                      Green Washing
                    </Text>
                    <img
                      src="img_arrow_down.svg"
                      alt="Greenwashing Arrow"
                      width={16}
                      height={8}
                      className="w-[16px] h-[8px]"
                    />
                  </div>
                  {menuOpen5 ? <MegaMenu1 /> : null}
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-[#479c8f] flex cursor-pointer items justify-center sm:py-5"
                  >
                    <Text
                      size="textxs"
                      as="p"
                      className="text-[18px] !text-[#ffffff] px-4 py-6 font-medium"
                    >
                      Team
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="bg-[#479c8f] flex cursor-pointer items justify-center sm:py-5"
                  >
                    <Text
                      size="textxs"
                      as="p"
                      className="hover:bg-[#479c8f] text-[18px] !text-[#ffffff] px-4 py-6 font-medium sm:py-5"
                    >
                      Our Work
                    </Text>
                  </Link>
                </li>
              </ul>
              <Button
                size="xs"
                className="rounded-[20px] min-w-[176px] border-[#ffffff] border border-solid font-medium"
              >
                Ask ChatClimate.ai
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

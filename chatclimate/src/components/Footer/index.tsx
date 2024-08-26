import { Heading, Text } from "./..";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex items-center h-[228px] md:h-auto mt-[-4px] z-[4] relative bg-[url(/images/img_group_29.png)] bg-cover bg-no-repeat`}
    >
      <div className="bg-[url(/images/img_group_15.png) h-[226px] flex w-full] items-center justify-center bg-cover bg-no-repeat p-7 md:h-auto sm:p-5">
        <div className="max-w-[1294px] mx-auto flex w-full items-start justify-between gap-5 md:flex-col">
          <div className="w-[70%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
            <div className="w-[44%] flex flex-col items-start gap-3.5 self-center md:w-full">
              <Heading
                size="headingxs"
                as="h4"
                className="md:text-[22px] text-[24px] !text-[#ffffff] font-bold"
              >
                About this Site
              </Heading>
              <ul className="gap-[22px] flex flex-col items-start">
                <li>
                  <Link href="Disclaimer" target="_blank" rel="noreferrer">
                    <Text
                      size="texts"
                      as="p"
                      className="text-[20px] !text-[#ffffff] font-medium"
                    >
                      Disclaimer
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link
                    href="Privacy / cookies notice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text
                      size="texts"
                      as="p"
                      className="text-[20px] !text-[#ffffff] font-medium"
                    >
                      Privacy / Cookie notice
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="texts"
                      as="p"
                      className="text-[20px] !text-[#ffffff] font-medium"
                    >
                      Terms and Conditions
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[40%] flex flex-col items-start gap-3.5 md:w-full">
              <Heading
                size="headingxs"
                as="h4"
                className="md:text-[22px] text-[24px] !text-[#ffffff] font-bold"
              >
                About us
              </Heading>
              <Link href="#">
                <Text
                  size="texts"
                  as="p"
                  className="text-[20px] !text-[#ffffff] font-medium"
                >
                  What is ChatClimate.ai?
                </Text>
              </Link>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <Heading
                size="headingxs"
                as="h4"
                className="md:text-[22px] text-[24px] !text-[#ffffff] font-bold"
              >
                Get in Touch
              </Heading>
              <Link href="#">
                <Text
                  size="texts"
                  as="p"
                  className="text-[20px] !text-[#ffffff] font-medium"
                >
                  Contact us
                </Text>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <Text
              size="texts"
              as="p"
              className="text-[20px] !text-[#ffffff] font-medium"
            >
              Powered by
            </Text>
            <Heading
              size="headings"
              as="h1"
              className="sm:text-[36px] md:text-[38px] text-[40px] !text-[#ffffff] font-bold"
            >
              ChatClimate.ai
            </Heading>
          </div>
        </div>
      </div>
    </footer>
  );
}

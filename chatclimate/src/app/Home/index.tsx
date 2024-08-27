import { Button, Img, Text, Heading } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-[#bff8ee] w-full">
      <div>
        <Header />
        <div className="h-[1846px] relative md:h-auto">
          <div className="flex-1">
            <div className="flex flex-col items-start">
              <div className="bg-[url(/images/img_group_14.png)] h-[834px] flex items-start justify-center self-stretch bg-cover bg-no-repeat px-14 py-28 md:h-auto md:p-5">
                <div className="mb-[262px] flex flex-col items-start gap-9">
                  <Heading
                    size="headingmd"
                    as="h1"
                    className="sm:text-[40px] md:text-[46px] text-[50px] !text-[#0c2b34] font-bold"
                  >
                    We make Climate Risk understandable and more accessable to
                    the broader communities.
                  </Heading>
                  <Button
                    size="lg"
                    className="rounded-[28px] min-w-[284px] font-bold"
                  >
                    Ask ChatClimate.ai
                  </Button>
                </div>
              </div>
              <div className="rounded-[12px] bg-[#ffffffb2] ml-[174px] mt-[-110px] w-[30%] relative px-1 py-1.5 md:ml-0 md:w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Img
                      src="img_screenschot_2024_07_03.png"
                      width={86}
                      height={88}
                      alt="Main Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_86x86.png"
                      width={86}
                      height={86}
                      alt="Thumbnail Screenshot"
                      className="w-[86px] h-[86px] object-cover"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_88x86.png"
                      width={86}
                      height={88}
                      alt="Alternate Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_1.png"
                      width={86}
                      height={88}
                      alt="Additional Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                  </div>
                  <div className="flex">
                    <Img
                      src="img_screenschot_2024_07_03_88x88.png"
                      width={88}
                      height={88}
                      alt="Primary Image"
                      className="w-[88px] h-[88px] object-cover"
                    />
                    <div className="flex flex-1 justify-end gap-1.5">
                      <Img
                        src="img_screenschot_2024_07_03_2.png"
                        width={86}
                        height={86}
                        alt="Nested Screenshot"
                        className="w-[86px] h-[86px] object-cover"
                      />
                      <Img
                        src="img_screenschot_2024_07_03_3.png"
                        width={86}
                        height={86}
                        alt="Secondary Screenshot"
                        className="w-[86px] h-[86px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-1">
                      <Img
                        src="img_screenschot_2024_07_03_4.png"
                        width={86}
                        height={88}
                        alt="Inner Screenshot"
                        className="w-[32%] h-[88px] object-contain"
                      />
                      <Img
                        src="img_screenschot_2024_07_03_5.png"
                        width={86}
                        height={88}
                        alt="Detail Screenshot"
                        className="w-[32%] h-[88px] ml-1 object-contain"
                      />
                    </div>
                    <Img
                      src="img_screenschot_2024_07_03_6.png"
                      width={86}
                      height={86}
                      alt="Solo Image"
                      className="w-[86px] h-[86px] object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <Img
                      src="img_screenschot_2024_07_03_7.png"
                      width={86}
                      height={86}
                      alt="First Quartet Image"
                      className="w-[86px] h-[86px] object-cover"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_8.png"
                      width={86}
                      height={86}
                      alt="Second Quartet Image"
                      className="w-[86px] h-[86px] object-cover"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_9.png"
                      width={86}
                      height={88}
                      alt="Third Quartet Image"
                      className="w-[86px] h-[86px] object-cover"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_10.png"
                      width={86}
                      height={88}
                      alt="Fourth Quartet Image"
                      className="w-[24%] h-[88px] object-contain"
                    />
                  </div>
                  <div className="flex gap-1">
                    <Img
                      src="img_screenschot_2024_07_03_11.png"
                      width={88}
                      height={88}
                      alt="Penultimate Screenshot"
                      className="w-[88px] h-[88px] object-cover"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_12.png"
                      width={86}
                      height={88}
                      alt="Ultimate Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_13.png"
                      width={86}
                      height={88}
                      alt="Pre Final Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_14.png"
                      width={86}
                      height={88}
                      alt="Last Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="img_rectangle_3.png"
              width={1446}
              height={606}
              alt="Image"
              className="mt-[-80px] h-[606px] relative w-full object-cover md:h-auto"
            />
          </div>
          <div className="to-[#d0f9f1] from-[#daefec] sm:gap-[67px] md:gap-[100px] p-[26px] top-[29%] gap-[134px] absolute left-0 right-0 m-auto flex flex-1 flex-col items-center bg-gradient-to-b sm:p-5">
            <Img
              src="img_menu.svg"
              width={24}
              height={56}
              alt="Menu Image"
              className="w-[2%] h-[56px] object-contain"
            />
            <div className="gap-[26px] mb-[60px] w-[42%] flex flex-col items-start self-end md:w-full">
              <Heading
                size="headinglg"
                as="h2"
                className="md:text-[48px] text-[64px] !text-[#1d252d] font-bold"
              >
                Who are we?
              </Heading>
              <Text
                size="textmd"
                as="p"
                className="md:text-[22px] text-[24px] !text-[#1d252d] w-full font-medium leading-9"
              >
                Lorem ipsum sit amet
              </Text>
              <Button
                shape="round"
                rightIcon={
                  <div className="h-[10px] w-[6px] flex items-center justify-center">
                    <Img
                      src="img_arrowright.svg"
                      width={6}
                      height={10}
                      alt="Arrow Right"
                      className="w-[6px] h-[10px] mb-1.5 mt-1"
                    />
                  </div>
                }
                className="min-w-[160px] gap-[26px] font-bold"
              >
                Know More
              </Button>
            </div>
          </div>
          <div className="absolute bottom-px left-0 right-0 m-auto flex flex-1 items-start justify-center px-14 md:relative md:flex-col md:px-5">
            <div className="mt-[122px] w-[56%] flex flex-col items-start gap-5 md:w-full">
              <Heading
                size="headinglg"
                as="h3"
                className="md:text-[48px] text-[64px] !text-[#1d252d] font-bold "
              >
                What do we do?
              </Heading>
              <Text
                size="textmd"
                as="p"
                className="md:text-[22px] text-[24px] !text-[#1d252d] w-[78%] font-medium leading-9 md:w-full"
              >
                Lorem ipsum sit amet
              </Text>
              <div className="gap-[18px] mx-1 flex self-stretch md:mx-0 sm:flex-col">
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_link.svg"
                      width={20}
                      height={20}
                      alt="Link"
                      className="w-[20px] h-[20px] mb-0.5"
                    />
                  }
                  className="min-w-[174px] gap-5 font-bold underline"
                >
                  ChatClimate
                </Button>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_link.svg"
                      width={20}
                      height={20}
                      alt="Link"
                      className="w-[20px] h-[20px] mb-0.5"
                    />
                  }
                  className="min-w-[174px] gap-5 font-bold underline"
                >
                  ChatReport
                </Button>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_link.svg"
                      width={20}
                      height={20}
                      alt="Link"
                      className="w-[20px] h-[20px] mb-0.5"
                    />
                  }
                  className="min-w-[174px] gap-5 font-bold underline"
                >
                  ClimateBert
                </Button>
              </div>
            </div>
            <Img
              src="img_image_3.png"
              width={322}
              height={632}
              alt="Image"
              className="w-[24%] h-[632px] self-center object-contain md:w-full"
            />
          </div>
        </div>
        <div className="h-[754px] relative mt-6 content-center md:h-auto">
          <div className="mx-auto flex flex-1 flex-col items-start">
            <Img
              src="img_image_4.png"
              width={402}
              height={454}
              alt="Image Four"
              className="z-[1] ml-[180px] w-[32%] h-[454px] relative object-contain md:ml-0"
            />
            <div className="bg-[url(/images/img_group_3.png)] py-[84px] mt-[-64px] h-[364px] relative flex items-end self-stretch bg-cover bg-no-repeat px-14 md:h-auto md:p-5">
              <div className="max-w-[1306px] mt-[82px] mx-auto flex w-full items-center justify-center md:flex-col">
                <Heading
                  size="headingxl"
                  as="h2"
                  className="md:text-[48px] text-[93px] !text-[#648bb833] font-bold uppercase"
                >
                  Partners
                </Heading>
                <div className="pl-[70px] flex flex-col items-start gap-1 pr-14 md:px-5">
                  <Img
                    src=".svg"
                    width={1}
                    height={1}
                    alt="Uzh Image"
                    className="ml-2 h-px w-px md:ml-0"
                  />
                  <Img
                    src="img_zuric_1.png"
                    width={188}
                    height={64}
                    alt="Zurich Image"
                    className="w-[92%] h-[64px] object-contain"
                  />
                </div>
                <Img
                  src="img_oxford.svg"
                  width={228}
                  height={58}
                  alt="Oxford Image"
                  className="w-[18%] h-[58px] object-contain md:w-full"
                />
                <Img
                  src="img_shape.svg"
                  width={132}
                  height={56}
                  alt="Shape Image"
                  className="w-[10%] h-[56px] ml-20 object-contain md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="top-[5%] right-[11%] w-[50%] absolute m-auto flex flex-col items-start gap-9">
            <Heading
              size="headinglg"
              as="h3"
              className="md:text-[48px] text-[64px] !text-[#1d252d] font-bold "
            >
              How to engage with us
            </Heading>
            <Text
              size="textmd"
              as="p"
              className="md:text-[22px] text-[24px] !text-[#1d252d] w-[92%] font-medium leading-9 md:w-full md:px-5"
            >
              We try to constantly improve our tools. If you want to provide
              intellectual or funding support, please contact
            </Text>
            <Button
              size="sm"
              shape="round"
              rightIcon={
                <div className="h-[20px] w-[22px] flex items-center justify-center">
                  <Img
                    src="img_save.svg"
                    width={22}
                    height={20}
                    alt="Save"
                    className="w-[22px] h-[20px] my-0.5"
                  />
                </div>
              }
              className="min-w-[280px] gap-[26px] font-medium"
            >
              hello@chatclimate.ai
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

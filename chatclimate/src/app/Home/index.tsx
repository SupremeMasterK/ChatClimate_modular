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
                      src="img_screenschot_2024_07_03_1.png"
                      width={86}
                      height={88}
                      alt="Additional Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_1.png"
                      width={86}
                      height={88}
                      alt="Additional Screenshot"
                      className="w-[24%] h-[88px] object-contain"
                    />
                    <Img
                      src="img_screenschot_2024_07_03_1.png"
                      width={86}
                      height={88}
                      alt="Additional Screenshot"
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
                  <div>
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                  </div>
                </div>
              </div>
            </div>
            <Img />
          </div>
          <div>
            <Img />
            <div>
              <Heading>Who are we?</Heading>
              <Text>Lorem ipsum sit amet</Text>
              <Button>Know More</Button>
            </div>
          </div>
          <div>
            <div>
              <Heading>What do we do?</Heading>
              <Text>Lorem ipsum sit amet</Text>
              <div>
                <Button>ChatClimate</Button>
                <Button>ChatReport</Button>
                <Button>ClimateBert</Button>
              </div>
            </div>
            <Img />
          </div>
        </div>
        <div>
          <div>
            <Img />
            <div>
              <div>
                <Heading>Partners</Heading>
                <div>
                  <Img />
                  <Img />
                </div>
                <Img />
                <Img />
              </div>
            </div>
          </div>
          <div>
            <Heading>How to engage with us</Heading>
            <Text>
              We try to constantly improve our tools. If you want to provide
              intellectual or funding support, please contact
            </Text>
            <Button>hello@chatclimate.ai</Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

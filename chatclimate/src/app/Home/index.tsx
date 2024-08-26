import { Button, Img, Text, Heading } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <div>
            <div>
              <div>
                <div>
                  <Heading>
                    We make Climate Risk understandable and more accessable to
                    the broader communities.
                  </Heading>
                  <Button>Ask ChatClimate.ai</Button>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <Img />
                    <Img />
                    <Img />
                    <Img />
                  </div>
                  <div>
                    <Img />
                    <div>
                      <Img />
                      <Img />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Img />
                      <Img />
                    </div>
                    <Img />
                  </div>
                  <div>
                    <Img />
                    <Img />
                    <Img />
                    <Img />
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

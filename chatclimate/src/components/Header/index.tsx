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
    <header>
      <Text>Companies</Text>
      <div>
        <img src="" alt="" />
        <div>
          <div>
            <Heading>ChatClimate.ai</Heading>
            <div>
              <ul>
                <li>
                  <div>
                    <Text>Chat Report</Text>
                    <img src="" alt="" />
                  </div>
                  {menuOpen4 ? <MegaMenu1 /> : null}
                </li>
                <li>
                  <div>
                    <Text>Green Washing</Text>
                    <img src="" alt="" />
                  </div>
                  {menuOpen5 ? <MegaMenu1 /> : null}
                </li>
                <li>
                  <Link href="#">
                    <Text>Team</Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text>Our Work</Text>
                  </Link>
                </li>
              </ul>
              <Button>Ask ChatClimate.ai</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

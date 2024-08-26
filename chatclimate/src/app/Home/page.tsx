import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Home - Empowering Climate Risk Understanding | ChatClimate.ai",
  description:
    "ChatClimate.ai is dedicated to making climate risk comprihensable and climate information accessable. Discover our work, team and how to engage with us.",
};
export default function HomePage() {
  return <Page />;
}

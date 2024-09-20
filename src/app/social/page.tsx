
"use client";
import Social from "@/components/Social";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

export default function Contact() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <div>
        <Social />
      </div>
    </WavyBackground>
  );
}

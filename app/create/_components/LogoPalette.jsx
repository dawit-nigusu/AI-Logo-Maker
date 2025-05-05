"use client";
import Header from "@/app/_components/Header";
import React, { useState } from "react";
import HeaderDescription from "./HeaderDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoPalette({onHandleInputChange,formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);
  return (
    <div className="my-10">
      <HeaderDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex p-1 cursor-pointer  ${
              selectedOption === palette.name &&
              "border-2 rounded-lg border-primary"
            } `}
          >
            {palette?.colors.map((color, index) => (
              <div
                key={index}
                className="h-24 w-full"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setSelectedOption(palette.name);
                    onHandleInputChange(palette.name);
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPalette;

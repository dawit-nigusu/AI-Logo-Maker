import Header from "@/app/_components/Header";
import React, { useState } from "react";
import HeaderDescription from "./HeaderDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

function LogoDesigns({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div className="my-10">
      <HeaderDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-1 hover:border-2 border-primary rounded-xl cursor-pointer ${
              selectedOption === design.title &&
              "border-2 rounded-xl border-primary"
            }`}
          >
            <Image
              width={300}
              height={200}
              src={design.image}
              alt={design.title}
              className="w-full h-[150px] object-cover rounded-xl mt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;

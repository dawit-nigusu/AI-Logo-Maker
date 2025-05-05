import React from "react";
import Lookup from "@/app/_data/Lookup";
import HeaderDescription from "./HeaderDescription";

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className="my-10">
      <HeaderDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />
      <input
        type="text"
        placeholder={Lookup.LogoTitleDesc}
        value={formData?.desc}
        className="p-4 border rounded-lg w-full mt-5"
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;

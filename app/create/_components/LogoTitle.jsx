"use client";
import React, { useState, Suspense } from "react";
import Header from "@/app/_components/Header";
import HeaderDescription from "./HeaderDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitleContent({onHandleInputChange}) {
    const searchParam = useSearchParams();
    const [title, setTitle] = useState(searchParam?.get('title')??"");
    
    return (
        <div className="my-10">
            <HeaderDescription
                title={Lookup.LogoTitle}
                description={Lookup.LogoTitleDesc}
            />
            <input 
                type="text" 
                placeholder={Lookup.InputTitlePlaceHolder} 
                className="p-4 border rounded-lg w-full mt-5" 
                defaultValue={title}
                onChange={(e)=>onHandleInputChange(e.target.value)}
            />
        </div>
    );
}

function LogoTitle(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LogoTitleContent {...props} />
        </Suspense>
    );
}

export default LogoTitle;

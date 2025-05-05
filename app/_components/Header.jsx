import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-64 p-4 flex items-center justify-between shadow-sm">
      <Image src="/logo.svg" alt="logo" width={100} height={70} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;

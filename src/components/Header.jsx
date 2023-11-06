"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const headerClass = small
    ? "text-2xl bg-black text-white text-center sticky top-0 ease-in-out transition-all duration-300"
    : "text-5xl py-8 bg-black text-white text-center sticky top-0 ease-in-out transition-all duration-300";

  const imageSize = small
    ? { width: 100, height: 100 }
    : { width: 200, height: 200 };

  return (
    <header className={headerClass}>
      <h1 className="flex flex-col items-center text-[#FFC927] font-bold font-sans">
        <Image
          src="/images/logo.jpg"
          width={imageSize.width}
          height={imageSize.height}
          alt="Logo da Team Grube"
          className="ease-in-out transition-all duration-300"
        />
        Awards
      </h1>
    </header>
  );
}

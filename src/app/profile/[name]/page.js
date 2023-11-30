"use client";
import { useRouter, useParams } from "next/navigation";

export default function AthletePage() {
  const { name } = useParams();
  const decode = decodeURIComponent(name);
  return (
    <div className="h-screen bg-[#1c1c1c]">
      <h1 className="text-5xl p-10 text-center font-bold font-sans text-[#FFC927]">
        {decode}
      </h1>
    </div>
  );
}

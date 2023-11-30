"use client";
import { useParams } from "next/navigation";

export default function AthletePage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  return (
    <div className="h-screen bg-[#1c1c1c]">
      <h1 className="text-5xl p-10 text-center font-bold font-sans text-[#FFC927]">
        {decodedName}
      </h1>
    </div>
  );
}

import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center">
      <Image
        src="/images/logo.jpg"
        width={200}
        height={200}
        alt="Logo da Team Grube"
        className="mt-10"
      />
      <p className="text-5xl text-center m-20 text-[#FFC927] font-bold font-sans">
        Página não encontrada!
      </p>
    </div>
  );
}

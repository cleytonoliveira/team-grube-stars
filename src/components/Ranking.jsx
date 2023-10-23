import athletes from "@/infra/athletesDB";
import Image from "next/image";

export default function Ranking() {
  const athletesSortedByScore = [...athletes].sort((a, b) => b.score - a.score);
  return (
    <section className="w-full md:w-[600px] m-auto leading-relaxed">
      <h2 className="text-center text-3xl py-2 text-white bg-[#171719] rounded-t-2xl">
        Ranking 2023
      </h2>
      <ol className="divide-y divide-gray-500 bg-[rgba(231,234,255,.1)] text-white">
        {athletesSortedByScore.map((athlete, index) => (
          <li key={index} className="flex items-center px-6 py-2.5">
            <div className="mr-4">
              <Image
                src={athlete.imageSrc}
                width={50}
                height={50}
                alt={`Imagem do atleta ${athlete.name} - ${athlete.team}`}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col basis-[10%] grow truncate">
              <span>
                {index + 1}º <strong>{athlete.name}</strong>
              </span>
              <span>{athlete.team}</span>
            </div>
            <div className="flex flex-col items-center">
              <strong>{athlete.score}</strong> Pontos
            </div>
            <div className="flex hidden md:inline-flex">
              <div className="flex flex-col items-center ml-4 text-green-500">
                <strong>{athlete.wins}</strong> Vitórias
              </div>
              <div className="flex flex-col items-center ml-4 text-red-500">
                <strong>{athlete.losses}</strong> Derrotas
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

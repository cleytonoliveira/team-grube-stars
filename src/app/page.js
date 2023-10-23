import Header from "../components/Header";
import Ranking from "../components/Ranking";

import "../../global.css";

export default function Home() {
  return (
    <main className="bg-[#1c1c1c]">
      <Header />
      <Ranking />
    </main>
  );
}

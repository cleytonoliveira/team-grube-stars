import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team Grube Stars",
  description: "Ranking dos melhores atletas de Jiu Jitsu do Team Grube",
  icons: {
    icon: "/images/grube-ico.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

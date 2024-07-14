"use client"

import Footer from "@/components/footer";
import Inicio from "@/components/inicio";
import MapContainer from "@/components/map";
import Mapa from "@/components/Mapa";
import { Navbar } from "@/components/navbar";
import Patrocinadores from "@/components/patrocinadores";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme(); // Pegue o tema atual

  const backgroundImage = theme === 'dark' ? '/ondas2.png' : '/ondas1.png';

  return (
    <>
      <main className="w-[100vw] h-[100vh] flex flex-col items-center mb-16">
        <div className="flex -z-50 absolute w-full h-full opacity-35">
          <Image
            src={backgroundImage}
            alt="Teste"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <Navbar />
        <Inicio />
      </main>
      <Patrocinadores />
      <Mapa />
      <Footer />
    </>
  );
}

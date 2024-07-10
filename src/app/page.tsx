import Inicio from "@/components/inicio";
import MapContainer from "@/components/map";
import Mapa from "@/components/Mapa";
import { Navbar } from "@/components/navbar";
import Patrocinadores from "@/components/patrocinadores";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-[100vw] h-[100vh] flex flex-col items-center mb-16">
        <Navbar />
        <Inicio />
      </main>
      <Patrocinadores />
      <Mapa />
    </>
  );
}

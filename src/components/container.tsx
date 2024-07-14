"use client"

import Image from "next/image";
import Link from "next/link";

interface ContainerProps {
  img: string;
  titulo: string;
  description?: string;
  link: string
}

export default function Container({
  img,
  titulo,
  description,
  link
}: ContainerProps) {
  const patrocinadores = [
    "Patrocinador 1",
    "Patrocinador 2",
    "Patrocinador 3",
    "Patrocinador 4",
  ];

  return (
    <div
    className="flex items-center bg-[--white] p-4 shadow-xl rounded-2xl">
      <Link href={link}>
        <Image
          alt="Logo"
          className="hover:scale-110 hover:rotate-2 duration-300"
          height={150}
          src={img}
          width={180}
        />
      </Link>
    </div>
  );
}

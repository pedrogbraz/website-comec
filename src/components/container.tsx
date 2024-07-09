import Image from "next/image";

interface ContainerProps {
  img: string;
  titulo: string;
  description?: string;
}

export default function Container({
  img,
  titulo,
  description,
}: ContainerProps) {
  const patrocinadores = [
    "Patrocinador 1",
    "Patrocinador 2",
    "Patrocinador 3",
    "Patrocinador 4",
  ];

  return (
    <div className="flex flex-col items-center gap-2 p-5 shadow-xl rounded-3xl">
      <Image
        alt="Logo"
        className="hover:scale-110 hover:rotate-2 duration-300"
        height={100}
        src={img}
        width={100}
      />
      <h1 className="text-lg font-bold text-[--zinc-color]">{titulo}</h1>
      <p className="text-center text-[--color-text]">{description}</p>
    </div>
  );
}

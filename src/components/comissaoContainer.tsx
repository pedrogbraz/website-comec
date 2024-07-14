import Image from "next/image";

interface ComissaoProps {
  img: string;
  nome: string;
  cargo: string;
}

export default function ComissaoContainer({ img, nome, cargo }: ComissaoProps) {
  return (
    <div className="relative flex flex-col items-center bg-white gap-2 shadow-xl rounded-xl w-full h-full">
      <div className="relative w-full h-52">
        <Image
          src={img}
          alt={`Foto de ${nome}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="text-lg font-bold text-gray-700 text-center">{nome}</h1>
        <p className="text-center text-gray-600">{cargo}</p>
      </div>
    </div>
  );
}

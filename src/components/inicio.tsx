import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Carrosel } from "./Carrosel";
import MapContainer from "./map";

export default function Inicio() {
  return (
    <>
      <main className="w-[100vw] flex items-center justify-center md:justify-between h-[100%] px-10 md:px-20">
        <div className="space-y-4 md:w-[60%]">
          <div className="flex flex-col items-center md:items-start md:gap-1">
            <h1 className="text-2xl md:text-4xl font-bold text-[--title-color] text-center md:text-start">Congresso Médico Acadêmico de Especialidades Cirúrgicas do Piauí.</h1>
            <span className="text-[--orange-theme] text-xl md:text-3xl font-bold">26 a 28 de Setembro de 2024</span>
          </div>
          <p className="text-center md:text-start text-[--color-text] md:max-w-[70%] md:text-lg">Traçando caminhos de excelência cirúrgica: junte-se às linhas de aprendizado e inovação!</p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/" className="text-sm md:text-base text-[--white] flex items-center rounded-lg px-4 py-2 font-semibold bg-[--orange-theme] hover:bg-[#f39639e8] hover:scale-105 duration-300">
              Inscreva-se
            </Link>
            <Link href="/" className="px-2 py-2 flex items-center bg-[--white] text-[--zinc-color] gap-2 rounded-lg text-sm md:text-base font-semibold shadow-md hover:scale-105 duration-300">
              <IoMdMail className="size-6 p-[4px] bg-[--orange-theme] rounded-md hover:scale-110 hover:rotate-2 duration-300" />
              suporte@comec.com
            </Link>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <Link className="text-green-600 p-2 shadow-md rounded-lg bg-[--white] hover:scale-110 hover:rotate-2 duration-300" href="/"><FaWhatsapp className="size-5" /></Link>
            <Link className="text-[#d62976] p-2 shadow-md rounded-lg bg-[--white] hover:scale-110 hover:rotate-2 duration-300" href="https://www.instagram.com/comecpi/"><FaInstagram className="size-5" /></Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-[42%]">
          <Carrosel />
        </div>
      </main>
    </>
  )
}
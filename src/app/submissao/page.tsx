import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Submissao() {
  return (
    <>
      <main className="w-[100vw] h-[100vh] px-10 md:px-20 space-y-6 mb-8">
        <Navbar />
        <div className="flex flex-col items-center">
        <h1 className="text-[1.563rem] font-bold uppercase text-[--orange-theme]">
            Submissão
          </h1>
          <p className="text-[2.1875rem] font-semibold text-center">
            Aqui você realizará a submissão
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center md:items-start">
          <p className="text-lg text-center md:text-start font-light">Bem-vindo à aba de Submissões de Trabalhos Científicos do VIII COSAMPI, o congresso da Sociedade de Acadêmicos de Medicina do Piauí. Aqui é o seu espaço para compartilhar suas pesquisas e contribuir para o avanço da medicina. Estamos ansiosos para receber suas submissões e destacar o seu trabalho durante o nosso evento. Junte-se a nós nesta emocionante jornada de descoberta e inovação médica.</p>
          <Link className="flex w-[200px] items-center justify-center text-lg bg-[--orange-theme] text-[--white] font-medium px-4 py-2 rounded-lg hover:bg-[#f39639e8]" href="/">Ler edital</Link>
        </div>
      </main>
    </>
  )
}
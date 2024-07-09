import { Navbar } from "@/components/navbar";

export default function Submissao() {
  return (
    <>
      <main className="w-[100vw] h-[100vh] px-10 md:px-20 space-y-6">
        <Navbar />
        <div className="flex flex-col items-center">
        <h1 className="text-[1.563rem] font-bold uppercase text-[--orange-theme]">
            Submissão
          </h1>
          <p className="text-[2.1875rem] font-semibold text-center">
            Aqui você realizará a submissão
          </p>
        </div>
      </main>
    </>
  )
}
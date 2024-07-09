import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-[100vw] h-[100vh] border flex items-center px-10 md:px-20 justify-between">
      <div className="flex flex-col items-center md:items-start gap-3 md:gap-6 md:max-w-[35%]">
        <h1 className="text-[--orange-theme] text-7xl font-bold drop-shadow-md md:text-8xl">404</h1>
        <p className="text-[--color-text] font-bold text-4xl text-center md:text-start drop-shadow-md">Ops! você não deveria ter visto isso</p>
        <p className="text-[--color-text] text-center md:text-start">A página que você está procurando não existe mais. Volte para a página inicial e lembre-se, você não viu nada</p>
        <Link href="/" className="text-[--white] text-lg md:text-xl font-bold bg-[--orange-theme] py-2 px-4 rounded-lg shadow-2xl hover:scale-105 hover:-rotate-1 duration-300">Página Inicial</Link>
      </div>
      <div className="hidden md:flex max-w-[50%]">
        <img src="/not-found.jpg" alt="404" />
      </div>
    </main>
  )
}
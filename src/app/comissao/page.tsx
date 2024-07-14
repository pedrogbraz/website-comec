"use client";

import { motion } from "framer-motion";
import ComissaoContainer from "@/components/comissaoContainer";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Comissao() {
  const comissaoMembers = [
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Presidente",
      delay: 0,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Vice-Presidente",
      delay: 0.2,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Secretária",
      delay: 0.4,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Tesoureiro",
      delay: 0.6,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Coordenadora",
      delay: 0.8,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Conselheiro",
      delay: 1,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Membro",
      delay: 1.2,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Membro",
      delay: 1.4,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Membro",
      delay: 1.6,
    },
    {
      img: "/comissao1.png",
      nome: "Carolina Maria Matos Rodrigues",
      cargo: "Membro",
      delay: 1.8,
    },
  ];

  return (
    <>
      <main className="w-[100vw] px-10 md:px-20 space-y-12">
        <Navbar />
        <div className="flex flex-col items-center border-[--orange-theme] border rounded-2xl p-8">
          <h1 className="absolute -mt-[55px] bg-[--orange-theme] text-[1.563rem] font-bold uppercase text-black py-1 px-3 rounded-lg">
            Comissões
          </h1>
          <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-5 gap-4">
            {comissaoMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: member.delay }}
              >
                <ComissaoContainer
                  img={member.img}
                  nome={member.nome}
                  cargo={member.cargo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

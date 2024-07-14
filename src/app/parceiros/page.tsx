"use client"

import Container from "@/components/container";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function Parceiros() {
  const items = [
    {
      description: "Descrição 1",
      link: "/link1",
      img: "/1.png",
      titulo: "Parceiro 1",
      delay: 0,
    },
    {
      description: "Descrição 2",
      link: "/link2",
      img: "/2.png",
      titulo: "Parceiro 2",
      delay: 0.2,
    },
    {
      description: "Descrição 3",
      link: "/link3",
      img: "/3.png",
      titulo: "Parceiro 3",
      delay: 0.4,
    },
    {
      description: "Descrição 4",
      link: "/link4",
      img: "/1.png",
      titulo: "Parceiro 4",
      delay: 0.6,
    },
    {
      description: "Descrição 5",
      link: "/link5",
      img: "/2.png",
      titulo: "Parceiro 5",
      delay: 0.8,
    },
    {
      description: "Descrição 6",
      link: "/link6",
      img: "/3.png",
      titulo: "Parceiro 6",
      delay: 1,
    },
    {
      description: "Descrição 7",
      link: "/link7",
      img: "/1.png",
      titulo: "Parceiro 7",
      delay: 1.2,
    },
    {
      description: "Descrição 8",
      link: "/link8",
      img: "/2.png",
      titulo: "Parceiro 8",
      delay: 1.4,
    },
    {
      description: "Descrição 9",
      link: "/link9",
      img: "/3.png",
      titulo: "Parceiro 9",
      delay: 1.6,
    },
    {
      description: "Descrição 10",
      link: "/link10",
      img: "/1.png",
      titulo: "Parceiro 10",
      delay: 1.8,
    },
  ];

  return (
    <>
      <main className="w-[100vw] px-10 pt-3 md:px-20 space-y-12">
        <Navbar />
        <div className="flex flex-col items-center gap-12 border-[--orange-theme] border p-8 rounded-2xl">
          <div className="flex flex-col items-center">
            <h1 className="absolute -mt-[55px] bg-[--orange-theme] text-[1.563rem] font-bold uppercase text-black py-1 px-3 rounded-lg">
              Parceiros
            </h1>
          </div>
          <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.delay }}
              >
                <Container
                  description={item.description}
                  link={item.link}
                  img={item.img}
                  titulo={item.titulo}
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

"use client";

import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Carrosel } from "./Carrosel";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Inicio() {
  return (
    <main className="w-full flex items-center justify-center md:justify-between h-full px-10 md:px-20">
      <div className="space-y-4 md:w-[60%]">
        <div className="flex flex-col items-center md:items-start md:gap-1">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-4xl font-bold text-[--title-color] text-center md:text-start"
          >
            Congresso Médico Acadêmico de Especialidades Cirúrgicas do Piauí.
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-[--orange-theme] text-xl md:text-3xl font-bold"
          >
            26 a 28 de Setembro de 2024
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-center md:text-start text-[--color-text] md:max-w-[70%] md:text-lg"
        >
          Traçando caminhos de excelência cirúrgica: junte-se às linhas de
          aprendizado e inovação!
        </motion.p>
        <div className="flex justify-center md:justify-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <Link
              href="/"
              className="text-sm md:text-base text-white flex items-center rounded-lg px-4 py-2 font-semibold bg-[--orange-theme] hover:bg-[#f39639e8] hover:scale-105 transition duration-300"
            >
              Inscreva-se
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <Link
              href="/"
              className="px-2 py-2 flex items-center bg-white text-[--zinc-color] gap-2 rounded-lg text-sm md:text-base font-semibold shadow-md hover:scale-105 transition duration-300"
            >
              <IoMdMail className="size-6 p-[4px] bg-[--orange-theme] rounded-md hover:scale-110 hover:rotate-2 transition duration-300" />
              suporte@comec.com
            </Link>
          </motion.div>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            <Link
              className="flex text-green-600 p-2 shadow-md rounded-lg bg-white hover:scale-110 hover:rotate-2 transition duration-300"
              href="/"
            >
              <FaWhatsapp className="size-5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            <Link
              className="flex text-[#d62976] p-2 shadow-md rounded-lg bg-white hover:scale-110 hover:rotate-2 transition duration-300"
              href="https://www.instagram.com/comecpi/"
            >
              <FaInstagram className="size-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.8 }}
        className="hidden md:flex md:w-[42%]"
      >
        <Carrosel />
      </motion.div>
    </main>
  );
}

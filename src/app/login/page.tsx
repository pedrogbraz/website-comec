"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Login() {
  const [cpf, setCpf] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [ano, setAno] = useState<string>('');

  const [title, setTitle] = useState<string>("Bem vindo de volta!");
  const [subtitle, setSubtitle] = useState<string>("Insira seus dados pessoais para usufruir de todo o site.");
  const [textButton, setTextButton] = useState<string>("Cadastrar");
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setState: (value: string) => void, maxLength: number) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      setState(value);
    }
  };

  function mudarLogin() {
    if (title === "Bem vindo de volta!") {
      setTitle("Seja Bem Vindo!");
      setSubtitle("Registre-se com seus dados pessoais para usufruir de todo o site.");
      setTextButton("Entrar");
    } else {
      setTitle("Bem vindo de volta!");
      setSubtitle("Insira seus dados pessoais para usufruir de todo o site.");
      setTextButton("Cadastrar");
    }
  }

  function toggleSections() {
    if (!isTransitioning) { // Impedir mudanças se já estiver em transição
      setIsTransitioning(true); // Indicar que está em transição
      setShowLogin((prevShowLogin) => !prevShowLogin);
      mudarLogin()
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }

  return (
    <main className="w-full h-[100vh] flex">
      <div className={`${showLogin ? "flex" : "hidden"} w-[100%] lg:w-[60%] px-20 flex-col gap-4 md:gap-2 justify-center items-center`}>
        <h1 className="text-center text-2xl font-semibold text-[--login]">Entrar</h1>
        <Input className="border-gray-500/15 border" type="text" placeholder="Digite seu email" />
        <Input className="border-gray-500/15 border" type="text" placeholder="Digite sua senha" />
        <div className="flex justify-between items-center w-[100%] px-2" >
          <Button variant="ghost" onClick={toggleSections} className="text-[--color-text] px-0 text-sm font-normal">Não tem conta?</Button>
          <Link href="/forgot-password" className="text-[--color-text] text-sm">Esqueceu sua senha?</Link>
        </div>
        <Button className="md:text-lg px-12 py-6 w-[100%] bg-[--login] hover:bg-[--login]/90">Entrar</Button>
      </div>
      <div className={`${showLogin ? "flex" : "hidden"} hidden md:flex w-[50%] h-[100vh] bg-[--login] px-12 ${showLogin ? "rounded-l-[120px]" : "rounded-r-[120px]"} flex-col items-center gap-2 justify-center`}>
        <h1 className="text-[--loginButton] font-bold text-3xl md:text-xl">{title}</h1>
        <p className="text-[--loginButton] text-center">{subtitle}</p>
        <Button className="mt-4 px-8 py-6 md:px-6 md:py-4 text-[--login] bg-[--loginButton] hover:bg-[--loginButton]/90" onClick={toggleSections}>{textButton}</Button>
      </div>
      <div className={`${showLogin ? "hidden" : "flex"} w-[100%] lg:w-[50%] flex-col gap-2 justify-center px-10 items-center`}>
        <h1 className="text-center text-2xl font-semibold text-[--blue-theme]">Cadastro</h1>
        <Input className="border-gray-500/15 border" type="text" placeholder="Digite seu nome completo" />
        <Input className="border-gray-500/15 border" type="text" placeholder="Digite seu nome de crachá" />
        <Input 
          className="border-gray-500/15 border" 
          type="text" 
          value={cpf} 
          onChange={(e) => handleInputChange(e, setCpf, 11)} 
          placeholder="Digite seu cpf" 
        />
        <Input className="border-gray-500/15 border" type="email" placeholder="Digite seu email" />
        <Input 
          className="border-gray-500/15 border" 
          type="number" 
          value={numero} 
          onChange={(e) => handleInputChange(e, setNumero, 11)} 
          placeholder="Digite seu número" 
        />
        <div className="w-[100vw] md:w-[100%] px-10 md:px-0 grid grid-cols-2 gap-2">
          <Input 
            className="border-gray-500/15 border" 
            type="text" 
            value={cep} 
            onChange={(e) => handleInputChange(e, setCep, 8)} 
            placeholder="Digite seu cep" 
          />
          <Input className="border-gray-500/15 border" type="text" placeholder="Digite sua cidade" />
          <Input className="border-gray-500/15 border" type="text" placeholder="Digite seu bairro" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Estados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Acre">Acre</SelectItem>
              <SelectItem value="Alagoas">Alagoas</SelectItem>
              <SelectItem value="Amapá">Amapá</SelectItem>
              <SelectItem value="Amazonas">Amazonas</SelectItem>
              <SelectItem value="Bahia">Bahia</SelectItem>
              <SelectItem value="Ceará">Ceará</SelectItem>
              <SelectItem value="Distrito Federal">Distrito Federal</SelectItem>
              <SelectItem value="Espírito Santo">Espírito Santo</SelectItem>
              <SelectItem value="Goiás">Goiás</SelectItem>
              <SelectItem value="Maranhão">Maranhão</SelectItem>
              <SelectItem value="Mato Grosso">Mato Grosso</SelectItem>
              <SelectItem value="Mato Grosso do Sul">Mato Grosso do Sul</SelectItem>
              <SelectItem value="Minas Gerais">Minas Gerais</SelectItem>
              <SelectItem value="Pará">Pará</SelectItem>
              <SelectItem value="Paraíba">Paraíba</SelectItem>
              <SelectItem value="Paraná">Paraná</SelectItem>
              <SelectItem value="Pernambuco">Pernambuco</SelectItem>
              <SelectItem value="Piauí">Piauí</SelectItem>
              <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
              <SelectItem value="Rio Grande do Norte">Rio Grande do Norte</SelectItem>
              <SelectItem value="Rio Grande do Sul">Rio Grande do Sul</SelectItem>
              <SelectItem value="Rondônia">Rondônia</SelectItem>
              <SelectItem value="Roraima">Roraima</SelectItem>
              <SelectItem value="Santa Catarina">Santa Catarina</SelectItem>
              <SelectItem value="São Paulo">São Paulo</SelectItem>
              <SelectItem value="Sergipe">Sergipe</SelectItem>
              <SelectItem value="Tocantins">Tocantins</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[100vw] md:w-[100%] px-10 md:px-0 flex gap-4 md:gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Instituição" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CET">CET</SelectItem>
              <SelectItem value="IESVAP">IESVAP</SelectItem>
              <SelectItem value="UESPI">UESPI</SelectItem>
              <SelectItem value="UFDPAR">UFDPAR</SelectItem>
              <SelectItem value="UFPI">UFPI</SelectItem>
              <SelectItem value="UFPI - PICOS">UFDPAR - PICOS</SelectItem>
              <SelectItem value="UNIFACID">UNIFACID</SelectItem>
              <SelectItem value="UNINOVAFAPI">UNINOVAFAPI</SelectItem>
              <SelectItem value="OUTRAS">OUTRAS</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Tipo de Inscrição" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ACADÊMICO SÓCIO DA SAMPI">ACADÊMICO SÓCIO DA SAMPI</SelectItem>
              <SelectItem value="ACADÊMICO NÃO SÓCIO DA SAMPI">ACADÊMICO NÃO SÓCIO DA SAMPI</SelectItem>
              <SelectItem value="MÉDICO SÓCIO DA SAMPI">MÉDICO SÓCIO DA SAMPI</SelectItem>
              <SelectItem value="MÉDICO NÃO SÓCIO DA SAMPI">MÉDICO NÃO SÓCIO DA SAMPI</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input 
          className="border-gray-500/15 border" 
          type="text" 
          value={ano} 
          onChange={(e) => handleInputChange(e, setAno, 4)} 
          placeholder="Digite o ano de sua formação" 
        />
        <Input className="border-gray-500/15 border" type="text" placeholder="Digite seu curso" />
        <div className="w-[100vw] md:w-[100%] px-10 md:px-0 flex gap-4 md:gap-2">
          <Input className="border-gray-500/15 border" type="password" placeholder="Digite uma senha" />
          <Input className="border-gray-500/15 border" type="password" placeholder="Confirme sua senha" />
        </div>
        <Input className="border-gray-500/15 border" type="text" placeholder="Observações(opcional)" />
        <Button className="mt-4 md:text-lg px-8 py-6 w-[100%] bg-[--login] hover:bg-[--login]/90">Cadastrar</Button>
      </div>
    </main>
  );
}

import React from "react";
import logo from "../../assets/imgs/logo.png";
import { MessageBtn, MessageInput, SocialIcons } from "./styles";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#1d191a] h-fit p-16 flex flex-col gap-7 items-center text-white max-md:px-10">
      <img src={logo} className="w-28" />
      <h1 className="text-3xl tracking-widest text-center max-sm:text-xl">
        CARLOS / ADVOGADOS DE RESULTADO
      </h1>

      <div className="w-full flex flex-row mt-5 justify-center max-lg:flex-col mx-auto gap-20">
        <div className="flex flex-col max-sm:items-center">
          <h1 className="text-xl mb-2 max-sm:text-center">Fale Conosco!</h1>
          <h2 className="font-normal max-sm:text-center">
            Defendemos seus direitos com experiência e dedicação.
          </h2>
          <MessageBtn>
            <MessageInput placeholder="Envie sua mensagem!" />
            <BsWhatsapp size={30} />
          </MessageBtn>
        </div>
        <div className=" flex flex-col gap-4 text-center">
          <p className="flex flex-row items-center gap-4 max-sm:flex-col">
            <BiPhone size={25} />
            +55 (34) 99163-6838
          </p>
          <p className="flex flex-row items-center gap-4 whitespace-pre-wrap max-sm:flex-col">
            <MdEmail size={25} />
            contato@carlosadvogadosderesultados.com
          </p>
          <p className="flex flex-row items-center gap-4 max-sm:flex-col">
            <FaLocationPin size={25} />
            Av. Leopoldino de Oliveira, 4113 - salas 220/221
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-10 flex-wrap max-sm:justify-center max-sm:w-[90%]">
        <SocialIcons>
          <BsInstagram size={25} />
        </SocialIcons>
        <SocialIcons>
          <BsLinkedin size={25} />
        </SocialIcons>
        <SocialIcons>
          <BsFacebook size={25} />
        </SocialIcons>
        <SocialIcons>
          <BsTiktok size={25} />
        </SocialIcons>
      </div>
      <small>©Mooncoded 2024. All rights reserved.</small>
    </div>
  );
}

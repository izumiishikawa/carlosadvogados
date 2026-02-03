import React from "react";
import logo from "../../assets/imgs/logo.png";
import { MessageBtn, MessageInput, SocialIcons } from "./styles";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

export default function Footer({ refs }) {
  return (
    <div
      className="bg-[#1d191a] h-fit p-8 sm:p-16 flex flex-col gap-5 sm:gap-7 items-center text-white"
      ref={refs}
    >
      <img src={logo} className="w-20 sm:w-28" alt="Logo" />
      <h1 className="text-lg sm:text-3xl tracking-widest text-center">
        CARLOS / ADVOGADOS DE RESULTADO
      </h1>

      <div className="w-full flex flex-col lg:flex-row mt-5 justify-center mx-auto gap-10 lg:gap-20">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-lg sm:text-xl mb-2 text-center lg:text-left">Fale Conosco!</h1>
          <h2 className="font-normal text-sm sm:text-base text-center lg:text-left">
            Defendemos seus direitos com experiência e dedicação.
          </h2>
          <MessageBtn
            onClick={() => window.open("https://wa.me/553491636838", "_blank")}
          >
            Envie sua mensagem!
            <BsWhatsapp size={25} />
          </MessageBtn>
        </div>
        <div className="flex flex-col gap-4 text-center items-center lg:items-start">
          <p className="flex flex-row items-center gap-4 text-sm sm:text-base">
            <BiPhone size={20} />
            +55 (34) 99163-6838
          </p>
          <p className="flex flex-row items-center gap-4 whitespace-pre-wrap text-sm sm:text-base">
            <MdEmail size={20} />
            carlosadvogados.bs@gmail.com
          </p>
          <p className="flex flex-row items-center gap-4 text-sm sm:text-base text-center">
            <FaLocationPin size={20} />
            <span>Av. Leopoldino de Oliveira, 4113 - salas 220/221</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-10 flex-wrap max-sm:justify-center max-sm:w-[90%]">
        {/* <SocialIcons>
          <BsInstagram size={25} />
        </SocialIcons> */}
        <SocialIcons onClick={() => window.open("https://www.linkedin.com/in/carlos-alberto-damaceno/", "_blank")}>
          <BsLinkedin size={25} />
        </SocialIcons>
        {/* <SocialIcons>
          <BsFacebook size={25} />
        </SocialIcons>
        <SocialIcons>
          <BsTiktok size={25} />
        </SocialIcons> */}
      </div>
      <small>©Mooncoded 2024. All rights reserved.</small>
    </div>
  );
}

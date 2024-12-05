import React from "react";
import { Container } from "./styles";

export default function InfoCard({ icon, title, text, onClick, background }) {
  return (
    <Container background={background} className="flex flex-col relative p-7 gap-7 text-white text-center max-w-[350px] max-sm:max-w-[90%] items-center justify-center">
      <div className="bg-black absolute inset-0 opacity-85"></div>
      <div className="text-white z-20 flex flex-col gap-7 items-center justify-center">
        {icon}
        <h1 className="font-bold tracking-widest uppercase">{title}</h1>
        <p className="text-sm font-normal">{text}</p>

        <button className="bg-[#2a2529] p-4 px-14 text-sm font-semibold tracking-widest uppercase">EXPLORAR</button>
      </div>
    </Container>
  );
}

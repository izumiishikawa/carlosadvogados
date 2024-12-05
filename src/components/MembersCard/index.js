import React from "react";
import carlos from "../../assets/imgs/carlos.jpg";
import aspas from "../../assets/imgs/aspas.png";

export default function MembersCard() {
  return (
    <div className="max-w-80 text-center items-center justify-center relative flex flex-col gap-2">
      <img src={carlos} className="w-72 h-72 rounded-full" />
      <img src={aspas} className="absolute -top-0 left-2 w-20" />
      <h1 className="font-extrabold uppercase mt-4">Carlos Alberto J Damaceno</h1>
      <p className="text-sm">
        <span className="font-semibold">OAB/MG 172.922</span> Advogado especializado em Direito Empresarial e
        Trabalhista, oferecendo soluções eficazes e personalizadas
      </p>
      <div className="h-[0.5px] bg-black w-full my-2" />
      <p className="text-xs">
        <b>Marcos Oliveira Fernandes Junior</b> (OAB/MG 098.233 )
      </p>
      <p className="text-xs">
        <b>Maurício Moreira da Silva Junior</b> (OAB/MG 184.548)
      </p>
    </div>
  );
}

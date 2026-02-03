import React from "react";
import hero from "../../assets/imgs/hero.jpg";
import { Container } from "./styles";

export default function Hero({ refs }) {
  return (
    <Container ref={refs}>
      <div className="text-white gap-6 sm:gap-8 flex w-full flex-col min-h-[100vh] h-full justify-center px-4 sm:px-10">
        <h1 className="text-base sm:text-xl">Precisa de ajuda?</h1>
        <h1 className="text-2xl sm:text-4xl text-[#bd9d60] uppercase font-semibold max-w-[700px]">
          Defendendo seus direitos com excelência
        </h1>
        <h1 className="text-sm sm:text-base max-w-[600px]">
          Somos especialistas dedicados a oferecer soluções jurídicas eficientes
          e personalizadas. Nosso escritório une experiência e comprometimento
          para proteger os interesses dos clientes, sempre com ética e
          transparência.
        </h1>

        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <button
            onClick={() => window.open("https://wa.me/553491636838", "_blank")}
            className="p-3 sm:p-4 px-8 sm:px-16 rounded-full text-white bg-[#bd9d60] max-sm:w-full text-sm sm:text-base"
          >
            Fala conosco!
          </button>
        </div>
      </div>
    </Container>
  );
}

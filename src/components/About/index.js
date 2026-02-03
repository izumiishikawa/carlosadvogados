import React from "react";
import Button from "../Button";
import { PiFlagBannerFoldLight } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import { ItemRow, Marker } from "./styles";
import law_hammer from "../../assets/imgs/law-hammer.jpg";
import bg_logo from "../../assets/imgs/bg_logo.png";

export default function About({ refs }) {
  return (
    <div className="relative max-sm:mb-20" ref={refs}>
      <div className="w-full h-auto py-6 sm:h-32 text-white flex flex-row flex-wrap max-lg:justify-center gap-6 sm:gap-10 px-4 sm:px-20 items-center justify-center bg-[#af8b45]">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center">
          1400+{" "}
          <h2 className="text-sm sm:text-lg font-normal">
            Resultados comprovados
          </h2>
        </h1>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center">
          1200+{" "}
          <h2 className="text-sm sm:text-lg font-normal">
            Clientes Satisfeitos
          </h2>
        </h1>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center">
          900+{" "}
          <h2 className="text-sm sm:text-lg font-normal">
            Casos Resolvidos
          </h2>
        </h1>
      </div>

      <div className="flex flex-row w-[90%] sm:w-[80%] h-auto min-h-[600px] lg:h-[1000px] m-auto justify-start gap-10 items-start pt-10 sm:pt-28 pb-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 max-xl:w-[45%] max-lg:w-[100%] px-2 sm:px-0">
          <img className="w-16 sm:w-20 rounded-full" src={bg_logo} alt="Logo" />
          <b className="uppercase text-xs">Venha conosco</b>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Lutamos por Justiça, Entregamos Resultados.
          </h1>

          <p>
            Na Carlos Advogados de Resultado, transformamos desafios jurídicos
            em soluções práticas e eficientes. Somos especialistas em Direito
            Empresarial e Trabalhista, oferecendo estratégias personalizadas
            para atender às necessidades de cada cliente.
          </p>
          <p>
            Combinamos experiência sólida e inovação para garantir agilidade e
            excelência no atendimento. Nosso compromisso com confiança, ética e
            transparência guia todas as etapas do processo, proporcionando
            segurança e tranquilidade em cada decisão.
          </p>
          <p>
            Seja para prevenir ou resolver conflitos, estamos prontos para
            entregar resultados concretos e eficientes. Conte com a Carlos
            Advogados de Resultado e experimente um novo padrão de qualidade no
            setor jurídico.
          </p>
          <div className="mt-10">
            <Button text="Fale com a gente"         onClick={() => window.open("https://wa.me/553491636838", "_blank")} />
          </div>
        </div>
        <div className="w-[50%] max-w-[600px] h-full max-h-[950px] right-20 absolute max-lg:hidden max-2xl:right-8 top-0 bg-blue-100 max-2xl:max-w-[500px]">
          <Marker className="bg-[#1d191b] h-full text-white relative flex flex-col justify-start w-full py-5 px-12 items-center">
            <div className="flex flex-col gap-5">
              <ItemRow>
                <PiFlagBannerFoldLight size={120} />
                <div className="flex flex-col">
                  <b>Compromisso com a Justiça</b>
                  <p>
                    Atuamos em todo o Brasil, garantindo a proteção dos seus
                    direitos com dedicação e eficiência.
                  </p>
                </div>
              </ItemRow>
              <ItemRow>
                <AiOutlineSafetyCertificate size={120} />
                <div className="flex flex-col">
                  <b>Confiança e Transparência</b>
                  <p>
                    Nossa equipe trabalha para oferecer soluções jurídicas
                    claras e confiáveis em qualquer lugar.
                  </p>
                </div>
              </ItemRow>
              <ItemRow>
                <BsTrophy size={120} />
                <div className="flex flex-col">
                  <b>Resultados que Importam</b>
                  <p>
                    Com experiência e excelência, defendemos seus interesses e
                    alcançamos resultados de destaque.
                  </p>
                </div>
              </ItemRow>
            </div>
            <div className="border-8 relative mt-10">
              <div className="absolute inset-0 flex justify-center text-left p-12 z-20 items-center">
                <h1 className="text-white text-5xl font-bold">
                  10+ Anos de experiência em advocacia
                </h1>
              </div>
              <div className="absolute bg-black opacity-85 h-full w-full" />
              <img className="w-full" src={law_hammer} />
            </div>
            <div class="custom-shape-divider-bottom-1732556244">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 0L0 0 598.97 114.72 1200 0z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </Marker>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Button from "../Button";
import { PiFlagBannerFoldLight } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import { ItemRow, Marker } from "./styles";
import law_hammer from "../../assets/imgs/law-hammer.jpg";
import bg_logo from "../../assets/imgs/bg_logo.png";

export default function About() {
  return (
    <div className="relative max-sm:mb-52">
      <div className="w-full h-32 text-white flex flex-row max-lg:justify-center gap-10 px-20 max-sm:px-2 max-sm:gap-4 items-center bg-[#af8b45]">
        <h1 className="text-4xl font-extrabold max-md:text-2xl">
          1400+ <h2 className="text-lg font-normal max-md:text-sm max-sm:text-xs">Resultados comprovados</h2>
        </h1>
        <h1 className="text-4xl font-extrabold max-md:text-2xl">
          1200+ <h2 className="text-lg font-normal max-md:text-sm max-sm:text-xs">Clientes Satisfeitos</h2>
        </h1>
        <h1 className="text-4xl font-extrabold max-2xl:hidden max-lg:block max-md:text-2xl ">
          900+{" "}
          <h2 className="text-lg font-normal max-md:text-sm max-sm:text-xs">Casos Resolvidos</h2>
        </h1>
      </div>

      <div className="flex flex-row w-[80%] h-[1000px] m-auto justify-start gap-10 items-start pt-28">
        <div className="w-[50%] flex flex-col gap-4 max-xl:w-[45%] max-lg:w-[100%]">
          <img className="w-20 rounded-full" src={bg_logo} />
          <b className="uppercase text-xs">Venha conosco</b>
          <h1 className="text-5xl font-extrabold">
            Lutamos por Justiça, Entregamos Resultados.
          </h1>

          <p>
            Na Carlos Advogados de Resultado, nossa missão é transformar
            desafios jurídicos em soluções concretas e eficientes. Especialistas
            em Direito Empresarial e Trabalhista, oferecemos estratégias
            inteligentes e personalizadas para atender às necessidades
            específicas de cada cliente.
          </p>
          <p>
            Combinando experiência sólida e inovação, nos destacamos pela
            agilidade e excelência no atendimento. Nossa abordagem única
            prioriza a confiança, a ética e a transparência em todas as etapas,
            garantindo segurança e tranquilidade em cada decisão.
          </p>
          <p>
            Seja na prevenção ou na resolução de conflitos, somos sinônimo de
            compromisso e resultados. Escolha Carlos Advogados de Resultado e
            descubra um novo padrão de eficiência no setor jurídico.
          </p>
          <div className="mt-10">
            <Button text="Ler mais.." onClick={() => {}} />
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
                  30+ Anos de experiência em advocacia
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

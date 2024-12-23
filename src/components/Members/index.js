import React from "react";
import MembersCard from "../MembersCard";
import placeholder from "../../assets/imgs/placeholder.jpg";
import Button from "../Button";
import statue from "../../assets/imgs/statue.jpg";
import carlos from "../../assets/imgs/carlos.jpg";
import marcos from "../../assets/imgs/marcoss.jpg";
import mauricio from "../../assets/imgs/mauricio.jpeg";
import aspas from "../../assets/imgs/aspas.png";

export default function Members({ refs }) {
  const collaborators = [
    { name: "Marcos Oliveira Fernandes Junior", oab: "OAB/MG  098.233" },
  ];

  return (
    <div className="mt-[300px] flex flex-col items-center" ref={refs}>
      <h1 className="text-3xl font-bold tracking-widest text-center">
        NOSSOS ADVOGADOS
      </h1>
      <h2 className="italic text-lg font-[Lora] text-center max-w-[90%]">
        Excelência e confiança para proteger seus direitos
      </h2>

      <div class="custom-shape-divider-bottom-1732555316">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="bg-[#e6e0e4] gap-20 h-[860px] w-full flex flex-row justify-center relative max-lg:h-[1800px]">
        <div className="absolute flex gap-20 -top-24 flex-row max-lg:flex-col-reverse items-center">
          <div className="relative -top-10 w-fit h-fit">
            <MembersCard
              photo={mauricio}
              name="Maurício Moreira da Silva Junior"
              oab="OAB/MG 184.548"
              description="Advogado especializado em Direito Digital, Administrativo e Condomínios"
            />
          </div>
          <div className="relative -top-14 w-fit h-fit">
            <MembersCard
              photo={carlos}
              quoteImage={aspas}
              name="Carlos Alberto J Damaceno"
              oab="OAB/MG 172.922"
              description="Advogado especializado em Direito Empresarial, Trabalhista e Previdenciário, oferecendo soluções eficazes e personalizadas"
              collaborators={collaborators}
            />
          </div>
          <div className="relative -top-10">
            <img
              src={statue}
              className="w-[400px] z-[999] max-sm:max-w-[90%] max-sm:mx-auto"
            />
          </div>
        </div>

        <div className="w-[90%] h-full flex gap-20 p-16 flex-row justify-around items-center max-h-[500px] absolute -bottom-44 bg-[#1d191b] max-lg:flex-col-reverse max-lg:max-h-fit max-lg:-bottom-[600px]">
          <div className="flex flex-col w-[55%] max-lg:w-[100%] text-white gap-8 items-center justify-center text-wrap text-center">
            <h1 className="text-4xl tracking-widest font-bold max-sm:text-2xl">
              RESOLVEMOS O IMPOSSÍVEL
            </h1>
            <p className="font-normal text-sm">
              Na Carlos Advogados de Resultado, transformamos desafios complexos
              em vitórias reais. Nossa equipe vai além da análise jurídica,
              estudando cada detalhe do seu caso para criar estratégias
              inovadoras e eficazes. Com foco em Direito Empresarial,
              Trabalhista e soluções de alta complexidade, somos reconhecidos
              por superar expectativas e entregar resultados que outros
              consideram inalcançáveis. Confie em quem sabe como vencer.
            </p>
            <Button
              onClick={() =>
                window.open("https://wa.me/553491636838", "_blank")
              }
              text="PRECISA DE NÓS?"
            />
          </div>
          <div className="w-[45%] max-lg:w-[100%]">
            <img className="" src={placeholder} />
          </div>
        </div>
      </div>
    </div>
  );
}

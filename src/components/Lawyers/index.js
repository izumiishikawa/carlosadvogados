import React from "react";
import InfoCard from "../InfoCard";
import { GoLaw } from "react-icons/go";
import previdenciaria from "../../assets/imgs/previdenciaria.jpg"
import criminal from "../../assets/imgs/criminal.png"
import trabalhista from "../../assets/imgs/trabalhista.jpg"
import civel from "../../assets/imgs/civel.jpg"

export default function Lawyers() {
  return (
    <div className="relative">
      <div class="custom-shape-divider-bottom-1732552893">
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
      <div className="bg-[#e6e0e4] min-h-[500px] relative flex flex-col py-10 items-center">
        <h1 className="text-3xl font-bold tracking-widest text-center">ADVOGADOS ESPECIALIZADOS</h1>
        <h2 className="italic text-lg font-[Lora] text-center">Soluções jurídicas sob medida para você</h2>

        <div className="flex flex-row gap-1 mt-20 flex-wrap justify-center">
            <InfoCard background={civel} icon={<GoLaw size={90}/>} title="CÍVEL" text="A advocacia cível trata de conflitos entre pessoas ou empresas, abrangendo contratos, família e consumidor, com foco na defesa de direitos e soluções legais eficazes." />
            <InfoCard background={previdenciaria} icon={<GoLaw size={90}/>} title="previdênciaria" text="Atua na proteção dos direitos de segurados do INSS, tratando de aposentadorias, benefícios e revisões, garantindo suporte ao cidadão." />
            <InfoCard background={trabalhista} icon={<GoLaw size={90}/>} title="trabalhista" text="Foca em relações entre empregados e empregadores, abrangendo direitos trabalhistas, rescisões, acordos e ações judiciais ligadas à legislação do trabalho." />
            <InfoCard background={criminal} icon={<GoLaw size={90}/>} title="criminal" text="Defende direitos de acusados em crimes, buscando justiça, liberdade e garantias legais, com atuação em investigações e julgamentos." />
        </div>
      </div>
    </div>
  );
}

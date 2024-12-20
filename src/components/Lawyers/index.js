import React from "react";
import InfoCard from "../InfoCard";
import { GoLaw } from "react-icons/go";
import previdenciaria from "../../assets/imgs/previdenciaria.jpg";
import criminal from "../../assets/imgs/criminal.png";
import trabalhista from "../../assets/imgs/trabalhista.png";
import civel from "../../assets/imgs/civel.jpeg";
import possessorio from "../../assets/imgs/possessorio.jpg";
import { FaHandcuffs, FaGavel } from "react-icons/fa6";
import { MdHandyman, MdPersonSearch } from "react-icons/md";

export default function Lawyers({ refs }) {
  return (
    <div className="relative" ref={refs}>
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
        <h1 className="text-3xl font-bold tracking-widest text-center">
          ADVOGADOS ESPECIALIZADOS
        </h1>
        <h2 className="italic text-lg font-[Lora] text-center">
          Soluções jurídicas sob medida para você
        </h2>
        <div className="flex flex-row gap-1 mt-20 flex-wrap justify-center">
          <InfoCard
            type="civil"
            background={civel}
            icon={<GoLaw size={90} />}
            title="CÍVEL"
            text="A advocacia cível resolve conflitos entre pessoas ou empresas, atuando em áreas como contratos, família e consumidor, sempre com foco na defesa de direitos e em soluções legais eficientes."
          />
          <InfoCard
            type="previdenciaria"
            background={previdenciaria}
            icon={<MdPersonSearch size={90} />}
            title="PREVIDENCIÁRIO"
            text="Atua na defesa dos direitos dos segurados do INSS, lidando com aposentadorias, benefícios e revisões, assegurando suporte completo ao cidadão."
          />
          <InfoCard
            type="trabalhista"
            background={trabalhista}
            icon={<MdHandyman size={90} />}
            title="TRABALHISTA"
            text="Focamos nas relações entre empregados e empregadores, atuando em direitos trabalhistas, rescisões, acordos e ações judiciais relacionadas à legislação do trabalho."
          />
          <InfoCard
            type="criminal"
            background={criminal}
            icon={<FaHandcuffs size={90} />}
            title="CRIMINAL"
            text="Defendemos os direitos de acusados em crimes, atuando em investigações e julgamentos para garantir justiça, liberdade e o cumprimento das garantias legais."
          />
          <InfoCard
            type="possessorio"
            background={possessorio}
            icon={<FaGavel size={90} />}
            title="POSSESSÓRIO"
            text="Direcionado às relações de posse e propriedade, o Direito Possessório visa proteger o exercício da posse, resolver conflitos sobre bens imóveis e assegurar direitos relacionados à propriedade e usucapião."
          />
        </div>
      </div>
    </div>
  );
}

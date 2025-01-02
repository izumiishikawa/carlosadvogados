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
      <div className="bg-[#e6e0e4] gap-20 h-[1260px] w-full flex flex-row justify-center relative max-lg:h-[2600px]">
        <div className="absolute flex gap-20 -top-24 flex-row max-lg:flex-col-reverse items-center">
          <div className="relative -top-10 w-fit h-fit">
            <MembersCard
              photo={mauricio}
              name="Maurício Moreira da Silva Junior"
              oab="OAB/MG 184.548"
              description="- Especialista em Direito Digital, com atuação em proteção de dados (LGPD), contratos tecnológicos e resolução de conflitos no ambiente virtual;
- Experiência em Direito Administrativo, auxiliando servidores, empresas e cidadãos em processos administrativos, licitações e contratos públicos;
- Atuação estratégica em questões relacionadas à gestão de condomínios, incluindo elaboração e revisão de convenções condominiais, mediação de conflitos entre moradores e cobranças de taxas;
- Consultoria jurídica para empresas e indivíduos na adequação às normas de privacidade e segurança digital, prevenindo riscos e garantindo conformidade legal;
- Representação em disputas administrativas e judiciais relacionadas a temas de direito público e privado;"
            />
          </div>
          <div className="relative -top-14 w-fit h-fit">
            <MembersCard
              photo={carlos}
              quoteImage={aspas}
              name="Carlos Alberto J Damaceno"
              oab="OAB/MG 172.922"
              description="- Especialista em Direito Empresarial, com foco em estruturação societária, contratos empresariais e assessoria estratégica para empresas de todos os portes;
- Experiência em Direito Trabalhista, incluindo negociações coletivas, processos judiciais trabalhistas e consultoria preventiva para empregadores e empregados;
- Especialista em Direito Previdenciário, auxiliando na obtenção de benefícios como aposentadorias, pensões e auxílios, tanto no INSS quanto em regimes próprios de previdência;
- Consultoria e atuação em questões relacionadas à proteção patrimonial e planejamento sucessório, garantindo segurança jurídica e proteção dos interesses familiares;
- Ampla experiência em questões relacionadas à responsabilidade civil, incluindo reparações por danos materiais e morais;
- Pós-Graduado em Direito do Consumidor, atuando em litígios e soluções de conflitos envolvendo relações de consumo;
- Assessoria jurídica personalizada, oferecendo suporte completo e estratégico para a resolução de problemas empresariais, trabalhistas e previdenciários."
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

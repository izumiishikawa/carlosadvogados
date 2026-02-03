import React from "react";
import MembersCard from "../MembersCard";
import placeholder from "../../assets/imgs/placeholder.jpg";
import Button from "../Button";
import statue from "../../assets/imgs/statue.jpg";
import carlos from "../../assets/imgs/carlos.jpg";
import marcos from "../../assets/imgs/marcoscastro.jpeg";
import mauricio from "../../assets/imgs/mauricio.jpeg";
import aspas from "../../assets/imgs/aspas.png";

export default function Members({ refs }) {
  const collaborators = [
    { name: "Marcos Oliveira Fernandes Junior", oab: "OAB/MG  098.233" },
  ];

  return (
    <div className="mt-20 sm:mt-[200px] lg:mt-[300px] flex flex-col items-center" ref={refs}>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-center px-4">
        NOSSOS ADVOGADOS
      </h1>
      <h2 className="italic text-base sm:text-lg font-[Lora] text-center max-w-[90%]">
        Excelência e confiança para proteger seus direitos
      </h2>

      <div className="custom-shape-divider-bottom-1732555316">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="bg-[#e6e0e4] w-full flex flex-col items-center pb-10">
        {/* Cards dos advogados */}
        <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row items-center justify-center px-4 py-8 -mt-10">
          <div className="w-full max-w-[350px]">
            <MembersCard
              photo={marcos}
              name="Marcos Oliveira Fernandes Junior"
              oab="OAB/MG 098.233"
              description="- Especialista em Direito Bancário, com atuação em questões relacionadas a contratos bancários, renegociação de dívidas, financiamentos e compliance no setor financeiro;
- Experiência em Direito Criminal, incluindo defesa e acompanhamento em processos criminais, com enfoque em crimes financeiros, empresariais e cibernéticos;
- Atuação estratégica em Direito Securitário, abrangendo a análise e revisão de apólices, mediação de conflitos entre seguradoras e segurados e suporte jurídico em sinistros;
- Consultoria jurídica para empresas e indivíduos, garantindo conformidade com normas bancárias, securitárias e prevenção de riscos legais;
- Representação em disputas administrativas e judiciais relacionadas a contratos bancários, litígios criminais e questões securitárias."
            />
          </div>
          <div className="w-full max-w-[350px]">
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
          <div className="w-full max-w-[350px]">
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
            />
          </div>
        </div>

        {/* Seção "Resolvemos o Impossível" */}
        <div className="w-[95%] sm:w-[90%] flex gap-8 lg:gap-20 p-6 sm:p-16 flex-col lg:flex-row justify-around items-center bg-[#1d191b] mt-10">
          <div className="flex flex-col w-full lg:w-[55%] text-white gap-6 sm:gap-8 items-center justify-center text-wrap text-center">
            <h1 className="text-xl sm:text-2xl lg:text-4xl tracking-widest font-bold">
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
          <div className="w-full lg:w-[45%]">
            <img className="w-full" src={placeholder} alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import bg_logo from "../../assets/imgs/bg_logo.png";

// Certifique-se de definir o elemento principal do app para acessibilidade
Modal.setAppElement("#root");

const descriptions = {
  civil: `
    O Direito Cível é uma das áreas mais amplas da advocacia, lidando com conflitos que envolvem relações entre pessoas físicas, jurídicas e o estado. Ele é fundamental para resolver questões relacionadas a contratos, indenizações, propriedade, família e sucessões.

    Por exemplo, se você enfrentou um problema com a entrega de um produto adquirido online, ou se precisa reivindicar seus direitos em um contrato de aluguel, o Direito Cível é responsável por oferecer soluções legais.

    Outro aspecto importante desta área envolve questões de família, como divórcios, guarda de filhos e partilha de bens. Com a ajuda de um advogado cível, é possível resolver disputas de forma mais rápida e eficiente, garantindo que seus direitos sejam respeitados.
  `,
  previdenciaria: `
    O Direito Previdenciário é essencial para garantir que você tenha acesso aos benefícios do sistema de seguridade social. Ele abrange questões como aposentadorias, pensões, auxílio-doença e outros direitos oferecidos pelo INSS.

    Se você trabalhou por anos e agora enfrenta dificuldades para se aposentar, ou se precisa de um auxílio emergencial devido a um problema de saúde, o advogado previdenciário atua para assegurar que você receba o que é de direito.

    Além disso, essa área também lida com revisões de benefícios, buscando corrigir eventuais erros no cálculo ou na concessão de valores. A atuação nesse campo visa proporcionar segurança e amparo nos momentos mais importantes da sua vida.
  `,
  trabalhista: `
    O Direito Trabalhista é voltado para a defesa dos direitos de trabalhadores e empregadores nas relações de trabalho. Ele abrange questões como demissões sem justa causa, pagamento de verbas rescisórias, condições de trabalho e reconhecimento de direitos como horas extras e férias.

    Se você está enfrentando condições abusivas no trabalho ou não recebeu corretamente o que lhe é devido ao ser desligado de uma empresa, o advogado trabalhista pode ajudar a garantir que seus direitos sejam preservados.

    Essa área também é essencial para empregadores, auxiliando na criação de contratos e na gestão de recursos humanos, assegurando que tudo esteja de acordo com a legislação vigente.
  `,
  criminal: `
    O Direito Criminal é uma área que atua na defesa de pessoas acusadas de crimes ou vítimas de delitos. Ele é fundamental para garantir que a justiça seja aplicada de forma imparcial e que os direitos das partes envolvidas sejam respeitados.

    Um advogado criminalista pode atuar em todas as fases de um processo penal, desde a investigação até o julgamento, buscando provas e apresentando argumentos que assegurem a defesa do cliente.

    Além disso, essa área trabalha para proteger as garantias fundamentais das pessoas, como o direito à liberdade, a presunção de inocência e o devido processo legal, mesmo em casos extremamente delicados e complexos.
  `,
  possessorio: `
    O Direito Possessório é uma área especializada em proteger a posse de bens imóveis. Ele lida com situações como invasões de terrenos, disputas de propriedade e reintegrações de posse, garantindo que os direitos dos possuidores sejam preservados.

    Por exemplo, se você é proprietário de um terreno que foi invadido ou está enfrentando problemas para exercer sua posse, essa área do direito oferece os mecanismos legais necessários para recuperar ou proteger o bem.

    Além disso, o Direito Possessório também é importante em casos de usucapião, onde uma pessoa pode requerer a propriedade de um imóvel após cumpri determinados requisitos legais. A atuação é focada em assegurar que cada parte envolvida tenha seus direitos analisados de forma justa.
  `,
};

export default function InfoCard({ icon, title, text, background, type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000001,
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "0",
      width: "90%",
      maxWidth: window.innerWidth < 768 ? "95%" : "600px",
      maxHeight: "90vh",
      overflow: "auto",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 1000000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <Container
        background={background}
        className="flex flex-col relative p-7 gap-7 text-white text-center max-w-[300px] max-sm:max-w-[90%] items-center justify-center"
      >
        <div className="bg-black absolute inset-0 opacity-85"></div>
        <div className="text-white z-20 flex flex-col gap-7 items-center justify-center">
          {icon}
          <h1 className="font-bold tracking-widest uppercase">{title}</h1>
          <p className="text-sm font-normal">{text}</p>

          <button
            onClick={openModal}
            className="bg-[#2a2529] p-4 px-14 text-sm font-semibold tracking-widest uppercase"
          >
            EXPLORAR
          </button>
        </div>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Info Modal"
      >
        <div className="relative w-full p-4 sm:p-6 rounded-lg text-black">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          >
            ×
          </button>
          <img
            src={background}
            alt="Banner"
            className="w-full h-48 sm:h-72 object-cover mb-4 rounded-lg"
          />

          <div className="flex flex-row gap-2 items-center justify-between my-4">
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-wide">
              DIREITO {title}
            </h1>
            <img className="w-10 sm:w-14 rounded-full" src={bg_logo} alt="Logo" />
          </div>

          <div className="h-[0.5px] w-full bg-black" />

          <div
            className="text-sm sm:text-base text-black mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {descriptions[type] || "Descrição detalhada não disponível."}
          </div>
        </div>
      </Modal>
    </>
  );
}

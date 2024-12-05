import React from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";

export default function Ratings({refs}) {
  return (
    <div className="bg-[#2c282b] w-full" ref={refs}>
      <div className="pt-60 pb-20 flex justify-center flex-col items-center gap-20  text-white max-lg:pt-[700px]">
        <h1 className="text-lg font-semibold tracking-widest">NOSSOS CLIENTES</h1>
        <div className="flex justify-center flex-wrap items-start gap-8">
          <div className="flex flex-col text-center items-center justify-center gap-2 max-w-[400px] max-sm:max-w-[80%]">
            <Rating
              fullSymbol={<FaStar color="#dbb860" size={20} />}
              readonly
              initialRating={5}
            />
            <p>
              O escritório me surpreendeu com a qualidade do atendimento e o
              profundo conhecimento nas questões trabalhistas. Resolveram meu
              caso com agilidade e eficiência. Recomendo a todos que buscam um
              serviço de confiança e resultados concretos
            </p>
            <b className="italic mt-4">- João Pinheiro</b>
          </div>
          <div className="flex flex-col text-center items-center justify-center gap-2 max-w-[400px] max-sm:max-w-[80%]">
            <Rating
              fullSymbol={<FaStar color="#dbb860" size={20} />}
              readonly
              initialRating={5}
            />
            <p>
              Fui atendido por uma equipe extremamente atenciosa e competente.
              Todas as minhas dúvidas foram esclarecidas, e o resultado do meu
              caso foi melhor do que eu esperava. Indico sem hesitar a quem
              precisa de apoio jurídico.
            </p>
            <b className="italic mt-4">- Vitor Silva</b>
          </div>
          <div className="flex flex-col text-center items-center justify-center gap-2 max-w-[400px] max-sm:max-w-[80%]">
            <Rating
              fullSymbol={<FaStar color="#dbb860" size={20} />}
              readonly
              initialRating={5}
            />
            <p>
              Desde o primeiro contato, percebi o quanto a equipe é dedicada e
              eficiente. Meu caso foi tratado com seriedade e transparência, e o
              resultado foi muito positivo. Se você precisa de suporte jurídico
              de alta qualidade, esse é o lugar certo!
            </p>
            <b className="italic mt-4">- Marco Abreu</b>
          </div>
        </div>
      </div>
    </div>
  );
}

import styled from 'styled-components';
import hero from "../../assets/imgs/hero.jpg";

export const Container = styled.div`
  position: relative;
  background-image: url(${hero});
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); /* Transparente por padrão */
    transition: background-color 0.3s ease; /* Transição suave */
    z-index: 1;
  }

  @media (max-width: 900px) {
    background-position: right;
    &:before {
      background-color: rgba(0, 0, 0, 0.7); /* Escurece com overlay preto */
    }
  }

  @media (max-width: 500px) {
    background-position: 80%;
  }

  /* Garante que o conteúdo fique acima do overlay */
  > * {
    position: relative;
    z-index: 2;
  }
`;

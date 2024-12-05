import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  padding: 0 25px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  background-color: transparent;
  top: 0;
  z-index: 999999;
  transition: all 0.2s;
  color: #fff;

  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  ${(props) =>
    props.isFixed &&
    css`
      height: 80px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      background-color: #fff;
      color: #000;

      ul li {
        font-weight: 700;

      }
    `}

  ${(props) =>
    props.isOpen &&
    css`
      background-color: #fff;
      box-shadow: none;
    `}

  .title {
    font-size: 35pt;
    text-transform: none;
    cursor: pointer;
    font-weight: 600;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .logo {
    width: 50px;
    text-transform: none;
    font-weight: 600;
    cursor: pointer;
  }

  .menu {
    display: flex;

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .icons {
    display: none;
    justify-self: flex-end;
    flex-direction: row;
    gap: 10px;

    svg {
      cursor: pointer;
    }

  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 30px;
    margin-left: 50px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;


    :hover {
      transform: scale(1.1);
      margin: 0 30px;
    }

    li {
      cursor: pointer;
      padding: 0px;
      margin: 0px;
      height: fit-content;
      transition: all 0.2s;
    }
  }

  @media (max-width: 1000px) {
    ul {
      display: none;
    }
    .icons {
      display: none;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  opacity: 0;
  animation: fadeIn 0.5s;
  animation-play-state: running;
  animation-fill-mode: both;
  transition: all 0.1s;
  background-color: #fff;

  ul {
    list-style: none;

    li {
      margin: 20px 0;
      font-size: 25pt;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 900;
    }

    .icons-mobile {
      display: flex;
      flex-direction: row;
      gap: 20px;

      svg {
        cursor: pointer;
      }
    }

  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
      transform: translateY(
        -100%
      ); /* Adicione esta linha para animar o translateY */
    }
    to {
      opacity: 1;
      height: 100vh;
      transform: translateY(
        0%
      ); /* Adicione esta linha para animar o translateY */
    }
  }
`;
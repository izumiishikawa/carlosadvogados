import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  height: 500px;
  min-height: 400px;

  @media (max-width: 640px) {
    height: auto;
    min-height: 450px;
  }

  svg {
    color: #bd9d60;
  }
`;

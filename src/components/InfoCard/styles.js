import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  height: 500px;

  svg {
    color: #bd9d60;
  }
`;

import styled from "styled-components";

export const MessageBtn = styled.div`
  width: 90%;
  margin-top: 20px;
  padding: 12px 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: #2c282b;
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: transparent;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border: 1px solid rgb(66, 62, 64);
    color: #fff;
    border-radius: 100%;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background-color: rgb(66, 62, 64);
    }
`
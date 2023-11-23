import styled, { css } from "styled-components";

export const DatePickerWrapp = styled.div(() => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: transparent;
      font-size: 16px;
      padding: 5px 10px;
      cursor: pointer;
    }
  `;
});

export const CalendarlWrapp = styled.div(() => {
  return css`
    margin-right: 15px;
    margin-left: 15px;

    input {
      font-size: 16px;
      background-color: transparent;
    }
  `;
});

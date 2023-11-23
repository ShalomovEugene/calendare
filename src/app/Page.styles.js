import styled, { css } from "styled-components";

export const ContentWrapp = styled.div(() => {
  return css`
    margin: 25px 20px;

    h1 {
      text-align: center;
      margin-bottom: 35px;
      text-transform: capitalize;
    }
  `;
});

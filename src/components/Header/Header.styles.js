import styled, { css } from "styled-components";

export const HeaderWrapp = styled.header(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 20px;
    position: relative;

    .addEvent {
      width: 30px;
      height: 30px;
      font-size: 18px;
      background-color: var(--water-spirit);
      color: var(--white);
      border-radius: 50%;
      position: relative;
      box-shadow: 0 0 10px 0px var(--dark-silver);
      cursor: pointer;
    }
  `;
});

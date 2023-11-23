import styled, { css } from "styled-components";

export const DayEventWrapp = styled.div(() => {
  return css`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--black);
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    .startsAt {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    p {
      font-size: 16px;
      margin-bottom: 15px;
      padding-left: 5px;
    }
  `;
});

import styled, { css } from "styled-components";

export const DayNodeItem = styled.div((props) => {
  const { mediaQueries } = props.theme;
  return css`
    min-height: 150px;
    width: 33.3%;
    border: 1px solid #ccc;
    padding: 10px 5px;

    h4 {
      text-transform: capitalize;
    }

    ${mediaQueries.md} {
      width: 25%;
    }

    ${mediaQueries.lg} {
      width: 20%;
    }

    &.active {
      background-color: #e5fee5;
    }
  `;
});

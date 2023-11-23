import styled, { css } from "styled-components";

export const EventUpdateFormWrapp = styled.div(() => {
  return css`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 100%;
    border: 1px solid var(--alto);
    background-color: white;
    padding: 25px 20px;
    border-radius: 4px;
    box-shadow: 0 0 7px #ccc;
    z-index: 2;

    form {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      cursor: pointer;
    }
  `;
});

export const EventHeader = styled.header(() => {
  return css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    h4 {
      margin-bottom: 0;
    }
  `;
});

export const CreatedAt = styled.span(() => {
  return css`
    margin-bottom: 10px;
  `;
});

export const EventTitle = styled.div(() => {
  return css`
    display: flex;
    margin-bottom: 25px;
    flex-direction: column;

    label {
      font-size: 13px;
      color: var(--chinese-silver);
      margin-bottom: 3px;
    }

    input {
      border-bottom: 1px solid var(--black);
      padding: 3px 0;
      background-color: transparent;
      &::placeholder {
        color: var(--dark-silver);
        font-size: 15px;
      }
    }
  `;
});

export const EventDesc = styled.div(() => {
  return css`
    textarea {
      border: none;
      resize: none;
      outline: none;
      border-bottom: 1px solid var(--black);
      margin-bottom: 15px;
      width: 100%;

      &::placeholder {
        color: var(--dark-silver);
        font-size: 12px;
      }
    }
  `;
});

export const DateTime = styled.div(() => {
  return css`
    padding: 10px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--black);
    display: flex;
    input {
      flex-grow: 1;
    }
  `;
});

export const ButtonSave = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;

    button {
      padding: 5px 10px;
      border-radius: 4px;
      background-color: var(--green-light);
      &.disabled {
        opacity: 0.5;
        cursor: default;
        background-color: var(--chinese-silver);
      }
      &.deleteEvent {
        background-color: var(--red-light);
      }
    }
  `;
});

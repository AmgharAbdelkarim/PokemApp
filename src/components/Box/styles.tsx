import styled from "styled-components";

export const BoxContainer = styled.div`
  padding: 20px;
  border: 1px solid #979797;
  border-radius: 10px;
  cursor: pointer;
  > span {
    color: #575e71;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 16px;
    display: block;
  }
  .poke-width {
    margin: 10px 0px;
  }
  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
    border: none;
  }
`;

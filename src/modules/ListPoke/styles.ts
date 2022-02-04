import styled from "styled-components";

export const ListPokesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  .item_container {
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }
`;

import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 20px;
  background-color: dodgerblue;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: auto;
  display: block;
  cursor: pointer;
`;

export const ItemData = styled.p`
  margin: 0;
  border-bottom: 1px solid #fff;
  padding: 20px;

  &:last-child {
    border-bottom: none;
  }
`;

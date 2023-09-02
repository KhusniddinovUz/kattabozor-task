import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  width: 200px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

export const ItemImageWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const BrandText = styled.p`
  position: absolute;
  left: 0;
  padding: 5px 15px;
  top: 0;
  margin: 0;
  background-color: darkviolet;
  color: #fff;
  border-radius: 20px;
`;

export const ImageTitle = styled.p`
  margin: 15px 0 5px 0;
  font-weight: 600;
`;

export const MerchantText = styled.p`
  background-color: yellow;
  padding: 2px 5px 2px 5px;
  border-radius: 2px;
  display: inline;
  font-size: 14px;
`;

export const CategoryText = styled.p`
  margin: 5px 0 0 0;
`;

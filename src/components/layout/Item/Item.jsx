import React from "react";
import {
  ItemImageWrapper,
  ImageTitle,
  ItemContainer,
  MerchantText,
  BrandText,
  CategoryText,
} from "./item.styles";

const Item = ({ title, image, merchant, brand, category, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <ItemImageWrapper>
        <BrandText>{brand}</BrandText>
        <img
          src={image.url}
          alt="item"
          width="100"
          height="200"
          style={{ objectFit: "contain" }}
        />
      </ItemImageWrapper>
      <ImageTitle>{title}</ImageTitle>
      <MerchantText>{merchant}</MerchantText>
      <CategoryText>{category}</CategoryText>
    </ItemContainer>
  );
};

export default Item;

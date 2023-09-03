import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import loader from "../../assets/roller.svg";
import {
  ItemDetailsContainer,
  ContentWrapper,
  ItemBox,
  ItemData,
} from "./ItemDetails.styles";

const ItemDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.kattabozor.uz/hh/test/api/v1/offers")
      .then((response) => {
        console.log(response.data["offers"]);
        response.data["offers"].forEach((e) => {
          if (e.id == id) {
            setItem(e);
          }
        });
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);
  return (
    <ItemDetailsContainer>
      {!loading && (
        <ItemBox>
          <img
            style={{
              margin: "auto",
            }}
            src={item.image.url}
            alt="item"
            width={item.image.width}
            height={item.image.height}
          />
          <ContentWrapper>
            <ItemData>{item.name}</ItemData>
            <ItemData>{item.brand}</ItemData>
            <ItemData>{item.category}</ItemData>
            <ItemData>{item.merchant}</ItemData>
            {item.attributes &&
              item.attributes.map((attr) => (
                <ItemData>
                  {attr.name}:{attr.value}
                </ItemData>
              ))}
          </ContentWrapper>
        </ItemBox>
      )}
      {loading && <img src={loader} alt="roller" />}
    </ItemDetailsContainer>
  );
};

export default ItemDetails;

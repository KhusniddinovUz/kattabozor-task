import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../../components/layout/Item/Item";
import { HomeContainer } from "./Home.styles";
import loader from "../../assets/roller.svg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.kattabozor.uz/hh/test/api/v1/offers")
      .then((response) => {
        setItems(response.data["offers"]);
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
  }, []);
  return (
    <HomeContainer>
      {items &&
        !loading &&
        items.map((item) => (
          <Item
            onClick={() => {
              navigate(`item/${item.id}`);
            }}
            key={item.id}
            title={item.name}
            category={item.category}
            brand={item.brand}
            merchant={item.merchant}
            attributes={item.attributes}
            image={item.image}
          />
        ))}
      {loading && <img src={loader} alt="roller" />}
    </HomeContainer>
  );
};

export default Home;

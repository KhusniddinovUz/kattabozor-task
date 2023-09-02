import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./components/layout/Item/Item";
import loader from "./assets/roller.svg";
import { AppContainer } from "./App.styles";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.kattabozor.uz/hh/test/api/v1/offers")
      .then((response) => {
        setItems(response.data["offers"]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <AppContainer>
      {items &&
        items.map((item) => (
          <Item
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
    </AppContainer>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import PizzaDisplayTemplate from "./PizzaDisplayTemplate";

const PizzaDisplay = () => {
  const [pizza, setPizza] = useState([]);

  const pizzaData = async () => {
    const jsonData = await fetch(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    setPizza(await jsonData.json());
  };

  useEffect(() => {
    pizzaData();
  }, []);
  return (
    <div>
      {pizza.map((curPizza) => {
        return <PizzaDisplayTemplate  />;
      })}
    </div>
  );
};

export default PizzaDisplay;

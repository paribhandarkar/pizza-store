import React, { useContext } from "react";
import PizzaDisplayTemplate from "./PizzaDisplayTemplate";
import "./PizzaDisplay.css";
import { PizzaContext } from "../../context/PizzaContext";

const PizzaDisplay = () => {
  const pizzas = useContext(PizzaContext);

  return (
    <div className="pizzaDisplay">
      {pizzas.map((curPizza) => {
        return (
          <PizzaDisplayTemplate
            identity={curPizza.id}
            key={curPizza.id}
            img_url={curPizza.img_url}
            name={curPizza.name}
            description={curPizza.description}
          />
        );
      })}
    </div>
  );
};

export default PizzaDisplay;

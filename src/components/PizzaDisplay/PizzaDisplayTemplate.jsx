import React from "react";

const PizzaDisplayTemplate = (props) => {
  return (
    <div className="pizzaDisplayTemplate">
      <img
        src={props.img_url}
        alt={props.name}
        className="pizzaDisplay-image"
      />
      <h4 className="pizzaDisplay-heading">{props.name}</h4>
      <p className="pizzaDisplay-content">{props.description}</p>
    </div>
  );
};

export default PizzaDisplayTemplate;

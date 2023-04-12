import React, { useState } from "react";
import "./PizzaDisplayTemplate.css";
import PizzaDisplayModal from "./PizzaDisplayModal";

const PizzaDisplayTemplate = (props) => {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="pizzaDisplayTemplate">
      <img
        src={props.img_url}
        alt={props.name}
        className="pizzaDisplay-image"
      />
      <h4 className="pizzaDisplay-heading">{props.name}</h4>
      <p className="pizzaDisplay-content">{props.description}</p>
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal && <PizzaDisplayModal closeModal={closeModal} identity={props.identity} />}
    </div>
  );
};

export default PizzaDisplayTemplate;

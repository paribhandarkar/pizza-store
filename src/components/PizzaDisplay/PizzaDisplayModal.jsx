import React, { useContext } from "react";
import "./PizzaDisplayModal.css";
import { PizzaContext } from "../../context/PizzaContext";

const PizzaDisplayModal = (props) => {
  const pizzas = useContext(PizzaContext);

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        {pizzas
          .filter((currentEntry) => currentEntry.id === props.identity)
          .map((filteredPizza) => {
            return (
              <div>
                <h1>{filteredPizza.name}</h1>
                <button onClick={props.closeModal}>close</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PizzaDisplayModal;

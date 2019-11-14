import React from "react";
import { useResource } from "../../../hooks/useResource";
import Card from "../../shared/Card";

const PizzaPlaces = () => {
  const pizzas = useResource({ path: "/pizza" });

  console.log(pizzas);
  return (
    <div>
      {pizzas.map(b => (
        <Card place={b}></Card>
      ))}
    </div>
  );
};

export default PizzaPlaces;

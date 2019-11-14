import React from "react";
import { useResource } from "../../../hooks/useResource";
import Card from "../../shared/Card";

const BurgerPlaces = () => {
  const burgers = useResource({ path: "/burgers" });

  console.log(burgers);
  return (
    <div>
      {burgers.map(b => (
        <Card place={b}></Card>
      ))}
    </div>
  );
};

export default BurgerPlaces;

// import data from "./data";
import React from "react";
import "./index.css";

function Pizza(props) {
  // console.log(props);

  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizza spinaci" />
      <h3 className="pizzas">{props.name}</h3>
      <p>{props.ingrediens}</p>
      <span>{props.price}</span>
    </div>
  );
}
export default Pizza;

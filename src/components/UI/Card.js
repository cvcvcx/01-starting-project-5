import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  const propsClasses = props.className ? props.className : "";
  return (
    <div className={`${classes.card} ${propsClasses}`}>{props.children}</div>
  );
};

export default Card;

import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = props => {
  return (
    <React.Fragment>
      <div className="card-list">
        {" "}
        {props.monsters.map((monster, index) => (
          <Card key={index} monsters={monster} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardList;

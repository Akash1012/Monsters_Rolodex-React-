import React from "react";
import "./Card.css";

const Card = props => {
  const { name, email, id } = props.monsters;
  return (
    <React.Fragment>
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </React.Fragment>
  );
};

export default Card;

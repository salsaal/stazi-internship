import React from "react";
import "./carCard.css";
import user from "../../assets/user.png";
import gas from "../../assets/gas-station.png";
import speed from "../../assets/speed-test.png";
import steering from "../../assets/steering-wheel.png";
import heart from "../../assets/heart.png";

function Carcard({ car }) {
  return (
    <div className="CarCard">
      <img src={car.image} alt="" />
      <div className="name">
        <h2>{car.name}</h2> <span>{car.year}</span>
      </div>
      <div className="details">
        <p>
          <img src={user} alt="" /> {car.people} People
        </p>
        <p>
          <img src={gas} alt="" /> {car.fuel}
        </p>
        <p>
          <img src={speed} alt="" /> {car.kmpl} / 1-litre
        </p>
        <p>
          <img src={steering} alt="" /> {car.engine}
        </p>
      </div>
      <div className="line"></div>
      <div className="pricing">
        <h2>
          ${car.price} <span>/ month</span>
        </h2>
        <div className="background">
          <img src={heart} alt="" />
        </div>
        <button>Rent now</button>
      </div>
    </div>
  );
}

export default Carcard;

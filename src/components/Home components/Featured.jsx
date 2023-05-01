import React from "react";
import { Link } from "react-router-dom";
import Circle from "../../images/Yellow.png";
import "../../styles/Featured.css";
import Person1 from "../../images/Person1.png";

export default function Featured() {
  return (
    <div className="Backdrop">
      <section className="imageFlex">
        <img className="Item Person" src={Person1} alt="guy walking down the street"></img>
        <img className="Item Circle" src={Circle} alt="big orange circle"></img>
      </section>
      <section>
        <div className="Item FeaText">
          <h1>Review ofAvoTravles</h1>
          <p>
            "Avo Traveler has helped me see the world while creating the least harm to the enviornment. Any time I plan a trip I check Avo Traveler first."
<br />
            - Johnathon Dragomir
          </p>
          <Link className="FeaButton">Learn More</Link>
        </div>
      </section>
    </div>
  );
}

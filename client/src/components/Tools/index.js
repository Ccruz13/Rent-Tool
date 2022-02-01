import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/air-tools/0.jpg";

function Tools() {
  const currentCategory = {
    name: "nail gun",
    description: "air-powered nail gun. like new!",
  };

  return (
    <div>
      <h2>This is the Tool page</h2>
      <div>
        <h3>Air Tools</h3>
        <div>
          <h4>{capitalizeFirstLetter(currentCategory.name)}</h4>
          <p>{currentCategory.description}</p>
          <img src={photo} alt="Air Tool Example" />
          <button>Rent Me</button>
        </div>
      </div>
      <div>
        <h3>Power Tools</h3>
      </div>
      <div>
        <h3>Hand Tools</h3>
      </div>
    </div>
  );
}

export default Tools;

import React from "react";
import aboutimage from "./Images/about.png";

function About(){
    return(
<>
    <div id="about">
<div className="about-image">
  <img src={aboutimage} alt="about img" />
</div>
<div className="about-text">
        <h2>LEARN MORE ABOUT US</h2>
        <p>
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        a large room or a building with equipment for doing physical exercise
        </p>
        <button>READ MORE</button>
</div>
    </div>
</>
    );
}

export default About;
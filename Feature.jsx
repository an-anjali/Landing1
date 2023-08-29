import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "./Images/1.svg";
import fimage2 from "./Images/2.svg";
import fimage3 from "./Images/3.svg";
import fimage4 from "./Images/4.svg";


function  Feature(){
    return(
<>
    <div className="features">
        <h1>FEATURE</h1>
       <div className="a-container">
           <Featurebox image={fimage1} title="Workout" />
           <Featurebox image={fimage2} title="Cycling" />
           <Featurebox image={fimage3} title="Traning" />
           <Featurebox image={fimage4} title="Tridmin" />
       </div>
    </div>
</>
    );
}

export default Feature;
import React from "react";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Feature from "./Component/Feature";
import Offer from "./Component/Offer";
import About from "./Component/About";
import Contact from "./Component/Contact";


function App(){
  return(
<>
  
<div className="App">
            <Navbar/>,
            <Header/>,
            <Feature/>,
            <Offer/>,
            <About/>,
            <Contact/>
</div>

</>
  );
}


export default App;
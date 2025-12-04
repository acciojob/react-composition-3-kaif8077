import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";  

const App = () => {
  return (
    <div className="app">


      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>

      <br /><br />
      

      <Tooltip text="This is a another tooltip">
        <p>Hover over me to see anohther toolip</p>
      </Tooltip>


    </div>
  )
}

export default App;

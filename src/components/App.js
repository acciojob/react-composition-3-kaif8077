import React from "react";
import './../styles/App.css';   // your existing global CSS
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="app">

      

      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

    </div>
  );
};

export default App;
